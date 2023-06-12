import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactList from "./components/ContactList";
import ViewContact from "./components/ViewContact";
import UpdateContacts from "./components/UpdateContacts";
import AddContacts from "./components/AddContacts";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Navigate to={"/contacts/list"} />} />
          <Route path="/contacts/list" element={<ContactList />} />
          <Route path="/contacts/view/:contactId" element={<ViewContact />} />
          <Route
            path="/contacts/edit/:contactId"
            element={<UpdateContacts />}
          />
          <Route path="/contacts/add" element={<AddContacts />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
