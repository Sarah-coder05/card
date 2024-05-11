import React, { useState } from "react";

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

const Contact = ({ contact, deleteContact, editContact }) => (
  <div>
    <p>
      <strong>Name:</strong> {contact.name}
    </p>
    <p>
      <strong>Email:</strong> {contact.email}
    </p>
    <p>
      <strong>Phone:</strong> {contact.phone}
    </p>
    <button onClick={() => editContact(contact)}>Edit</button>
    <button onClick={() => deleteContact(contact.id)}>Delete</button>
  </div>
);

const ContactList = ({ contacts, deleteContact, editContact }) => (
  <div>
    <h2>Contacts</h2>
    {contacts.map((contact) => (
      <Contact
        key={contact.id}
        contact={contact}
        deleteContact={deleteContact}
        editContact={editContact}
      />
    ))}
  </div>
);

const ContactForm = ({ contact, addContact, updateContact, cancelEdit }) => {
  const [name, setName] = useState(contact ? contact.name : "");
  const [email, setEmail] = useState(contact ? contact.email : "");
  const [phone, setPhone] = useState(contact ? contact.phone : "");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      const newContact = { name, email, phone };
      if (contact) {
        updateContact({ ...contact, ...newContact });
      } else {
        addContact({ ...newContact, id: Date.now() });
      }
      setName("");
      setEmail("");
      setPhone("");
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(email)) newErrors.email = "Invalid email address";
    if (!phone.trim()) newErrors.phone = "Phone number is required";
    return newErrors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{contact ? "Edit Contact" : "Add Contact"}</h2>
      <label>Name</label>
      <input
        type="text"
        placeholder="full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {errors.name && <p>{errors.name}</p>}
      <label>Email</label>
      <input
        type="email"
        placeholder="info@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <p>{errors.email}</p>}
      <label>Phone</label>
      <input
        type="text"
        placeholder="enter your phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      {errors.phone && <p>{errors.phone}</p>}
      <button type="submit">{contact ? "Update" : "Add"}</button>
      {contact && <button onClick={cancelEdit}>Cancel</button>}
    </form>
  );
};

const Contacts = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [editingContact, setEditingContact] = useState(null);
  const addContact = (contact) => setContacts([...contacts, contact]);
  const updateContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
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
