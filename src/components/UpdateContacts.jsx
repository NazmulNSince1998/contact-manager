import { useEffect, useState } from "react";
import CreateAndUpdate from "./CreateAndUpdate";
import { useParams } from "react-router-dom";
import { ContactService } from "../services/ContactService";
import { useNavigate } from "react-router-dom";

const UpdateContacts = () => {
  const navigate = useNavigate();
  const { contactId } = useParams();
  const [state, setState] = useState({
    loading: false,
    contact: {
      name: "",
      imageURL: "",
      email: "",
      mobile: "",
      company: "",
      title: "",
      groupId: "",
    },
    groups: [],
  });
  useEffect(() => {
    async function fetchData() {
      setState({ ...state, loading: true });
      const response = await ContactService.getContact(contactId);
      const groupResponse = await ContactService.getGroups();
      setState({
        ...state,
        loading: false,
        contact: response.data,
        groups: groupResponse.data,
      });
    }
    fetchData();
  }, []);
  const handleInputUpdate = (e) => {
    setState({
      ...state,
      contact: {
        ...state.contact,
        [e.target.name]: e.target.value,
      },
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    async function updateData() {
      const response = await ContactService.updateContact(
        state.contact,
        contactId
      );
      if (response) {
        navigate("/contacts/list", { replace: true });
      }
    }
    updateData();
  };
  return (
    <div>
      <CreateAndUpdate
        title={"Update Contact"}
        stateContactName={state.contact.name}
        stateContactImageURL={state.contact.imageURL}
        stateContactMobile={state.contact.mobile}
        stateContactEmail={state.contact.email}
        stateContactCompany={state.contact.company}
        stateContactTitle={state.contact.title}
        groups={state.groups}
        stateContactGroupId={state.contact.groupId}
        groupsLength={state.groups.length}
        createOrUpdate={"Update"}
        style={"bg-blue-900"}
        handleInputUpdate={handleInputUpdate}
        onSubmit={onSubmit}
        loading={state.loading}
      />
    </div>
  );
};

export default UpdateContacts;
