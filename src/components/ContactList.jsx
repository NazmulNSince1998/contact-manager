import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Button from "./Button";
import ShowContact from "./ShowContact";
import { useEffect, useState } from "react";
import { ContactService } from "../services/ContactService";
import Spinnar from "./Spinnar";
import { useParams } from "react-router-dom";

const ContactList = () => {
  const [state, setState] = useState({
    loading: false,
    contacts: [],
    filteredContacts: [],
    errorMessage: "",
  });

  // useEffect(() => {
  //   setState({ ...state, loading: true });
  //   axios.get("http://localhost:3000/contacts").then((response) =>
  //     setState({
  //       ...state,
  //       loading: false,
  //       contacts: response.data,
  //     })
  //   );
  // }, []);

  useEffect(() => {
    async function fetchData() {
      setState({ ...state, loading: true });
      let response = await ContactService.getAllContacts();

      setState({
        ...state,
        loading: false,
        contacts: response.data,
        filteredContacts: response.data,
      });
    }
    fetchData();
  }, []);

  // useEffect(async () => {
  //   try {
  //     setState({ ...state, loading: true });
  //     let response = await ContactService.getAllContacts();
  //     setState({
  //       ...state,
  //       loading: false,
  //       contacts: response.data,
  //     });
  //   } catch (error) {
  //     setState({
  //       ...state,
  //       loading: false,
  //       errorMessage: error.message,
  //     });
  //   }
  // }, []);

  // delete COntact
  // const { contactId } = useParams();
  const onDelete = (contactId) => {
    async function deleteData() {
      const response = await ContactService.deleteContact(contactId);
      if (response) {
        setState({ ...state, loading: true });
        let response = await ContactService.getAllContacts();

        setState({
          ...state,
          loading: false,
          contacts: response.data,
          filteredContacts: response.data,
        });
      }
    }
    deleteData();
  };

  // search contacts
  const [query, setQuery] = useState({ text: "" });

  const handleSearchInput = (e) => {
    setQuery({ ...query, text: e.target.value });
    const searchedContacts = state.filteredContacts.filter((contact) =>
      contact.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setState({
      ...state,
      filteredContacts: searchedContacts,
    });
  };
  return (
    <main className="px-3 lg:px-16 bg-green-100 w-full min-h-[100vh] pt-[120px]  ">
      <div className="flex items-center gap-4 ">
        <p className="text-xl font-medium">Phone Directory</p>
        {/* <button className="bg-green-950 flex items-center justify-center px-2 py-1 rounded-lg text-white gap-2 hover:bg-green-900 transition-all">
          <AiOutlinePlusCircle />
          New
        </button> */}
        <Button styles={"bg-green-950 hover:bg-green-900"}>
          <AiOutlinePlusCircle />
          <Link to={"/contacts/add"}>New</Link>
        </Button>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, iste.
        </p>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <input
          name="name"
          value={query.text}
          onChange={handleSearchInput}
          type="text"
          placeholder="Search"
          className="px-2 border border-black rounded-sm"
        />
        <Button styles={"bg-green-950 hover:bg-green-900"}>Search</Button>
      </div>

      {state.loading ? (
        <div className="flex items-center justify-center my-8">
          {" "}
          <Spinnar />
        </div>
      ) : (
        <div className="flex  flex-wrap gap-2">
          {state.filteredContacts.map((contact) => {
            return (
              <ShowContact
                key={contact.id}
                name={contact.name}
                mobile={contact.mobile}
                email={contact.email}
                image={contact.imageUrl}
                contactId={contact.id}
                onDelete={onDelete}
              />
            );
          })}
        </div>

        // <ShowContact />
      )}
    </main>
  );
};

export default ContactList;
