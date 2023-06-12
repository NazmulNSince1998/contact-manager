import { useEffect, useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ContactService } from "../services/ContactService";
import Spinnar from "./Spinnar";

const ViewContact = () => {
  let { contactId } = useParams();

  const [state, setState] = useState({
    loading: false,
    contact: {},
    group: {},
    errorMessage: "",
  });
  useEffect(() => {
    setState({ ...state, loading: true });
    async function fetchData() {
      let response = await ContactService.getContact(contactId);
      let groupResponse = await ContactService.getGroup(response.data);
      setState({
        ...state,
        loading: false,
        contact: response.data,
        group: groupResponse.data,
      });
    }
    fetchData();
  }, []);
  return (
    <main className="px-3 lg:px-16 bg-green-100 w-full min-h-[100vh] pt-[120px] ">
      <p className="text-xl font-medium">Contact</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, at.</p>
      {state.loading ? (
        <div className="flex items-center justify-center my-8">
          {" "}
          <Spinnar />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row items-center justify-evenly mt-10">
          <img src={state.contact.imageUrl} alt="" className="w-[300px]" />
          <div>
            <p className="">Name: {state.contact.name}</p>
            <p className="">Mobile: {state.contact.mobile}</p>
            <p className="">Email: {state.contact.email}</p>
            <p className="">Company: {state.contact.company}</p>
            <p className="">Title: {state.contact.title}</p>
            <p className="">Group: {state.group.name}</p>
          </div>
        </div>
      )}

      <div>
        <Link to={"/"}>
          <Button styles={"bg-red-500 hover:bg-red-600"}>Back</Button>
        </Link>
      </div>
    </main>
  );
};

export default ViewContact;
