import React, { useState } from "react";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";

const initialContacts = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    phone: "456-789-0123",
  },
];

const Contacts = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [editingContact, setEditingContact] = useState(null);
  const addContact = (contact) => setContacts([...contacts, contact]);
  const updateContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
        // If the id property of the contact object is equal to the id property of the updatedContact object,  Result is assigned the value of updatedContact.
        // result is assigned the value of contact.
      )
    );
    setEditingContact(null);
  };
  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };
  const editContact = (contact) => {
    setEditingContact(contact);
  };
  const cancelEdit = () => {
    setEditingContact(null);
  };

  return (
    <div>
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        editContact={editContact}
      />
      <ContactForm
        contact={editingContact}
        addContact={addContact}
        updateContact={updateContact}
        cancelEdit={cancelEdit}
      />
    </div>
  );
};

export default Contacts;
