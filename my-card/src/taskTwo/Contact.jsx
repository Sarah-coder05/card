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

export default Contact;
