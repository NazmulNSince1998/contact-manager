import { useEffect, useState } from "react";
import CreateAndUpdate from "./CreateAndUpdate";
import { ContactService } from "../services/ContactService";
import { useNavigate } from "react-router-dom";

const AddContacts = () => {
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
  const handleInputUpdate = (e) => {
    setState({
      ...state,
      contact: {
        ...state.contact,
        [e.target.name]: e.target.value,
      },
    });
    console.log(state);
  };

  useEffect(() => {
    async function fetchData() {
      setState({ ...state, loading: true });
      const response = await ContactService.getGroups();
      setState({
        ...state,
        loading: false,
        groups: response.data,
      });
    }
    fetchData();
  }, []);
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    async function createData() {
      const response = await ContactService.createContact(state.contact);
      if (response) {
        navigate("/contacts/list", { replace: true });
      }
    }
    createData();
  };
  return (
    <CreateAndUpdate
      title={"Create Contact"}
      handleInputUpdate={handleInputUpdate}
      createOrUpdate={"create"}
      style={"bg-green-950 hover:bg-green-900"}
      stateContactName={state.contact.name}
      stateContactImageURL={state.contact.imageURL}
      stateContactMobile={state.contact.mobile}
      stateContactEmail={state.contact.email}
      stateContactCompany={state.contact.company}
      stateContactTitle={state.contact.title}
      groups={state.groups}
      stateContactGroupId={state.contact.groupId}
      groupsLength={state.groups.length}
      groupName={state.groups.map((group) => group.name)}
      onSubmit={onSubmit}
      loading={state.loading}
    />
  );
};

export default AddContacts;
