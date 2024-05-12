import Contact from "./Contacts";
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

export default ContactList;
