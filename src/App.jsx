import { BrowserRouter as Switch, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import ContactList from "./components/ContactList";
import ViewContact from "./components/ViewContact";
import UpdateContacts from "./components/UpdateContacts";
import AddContacts from "./components/AddContacts";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" element={<Navigate to={"/contacts/list"} />} />
        <Route path="/contacts/list" element={<ContactList />} />
        <Route path="/contacts/view/:contactId" element={<ViewContact />} />
        <Route path="/contacts/edit/:contactId" element={<UpdateContacts />} />
        <Route path="/contacts/add" element={<AddContacts />} />
      </Switch>
    </>
  );
}

export default App;
