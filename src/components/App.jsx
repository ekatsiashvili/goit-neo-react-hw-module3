import { useState, useEffect } from "react";

import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import contactsList from "../contacts.json";

//Setting up the initial contacts array, either from local storage, or from json
const initialContacts = () => {
  const storedContacts = localStorage.getItem("savedContacts");
  if (storedContacts !== null) {
    return JSON.parse(storedContacts);
  }
  return contactsList;
};

//Main logic
function App() {
  //Set up states
  const [contacts, setContacts] = useState(initialContacts);
  const [search, setSearch] = useState("");

  //Updating state to add contact
  const updateContacts = (updContact) => {
    setContacts((curContacts) => {
      return [...curContacts, updContact];
    });
  };

  //Function to set state for the serched contact
  const searchContact = (targetContact) => {
    setSearch(targetContact);
  };

  //Function to display searched contact
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  //Use effect to save contacts to local storage
  useEffect(() => {
    localStorage.setItem("savedContacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm updateContacts={updateContacts} />
      <SearchBox value={search} onSearch={searchContact} />
      <ContactList contacts={filterContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
