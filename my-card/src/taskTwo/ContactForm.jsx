import { useState } from "react";

const ContactForm = ({ contact, addContact, updateContact, cancelEdit }) => {
  const [name, setName] = useState(contact ? contact.name : "");
  // if the value of contact is true, then the initial value is contact.name. Else, if the contact is false, the initial value is an empty string.
  const [email, setEmail] = useState(contact ? contact.email : "");
  // if the value of contact is true, then the initial value is contact.email. Else, if the contact is false, the initial value is an empty string.
  const [phone, setPhone] = useState(contact ? contact.phone : "");
  // if the value of contact is true, then the initial value is contact.phone. Else, if the contact is false, the initial value is an empty string.
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
      {/* if contact is truth, then "edit contact" is the value of the expression.Else if the contact is false then the string "add contact is the value of the expression". */}
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
      {/* if contact is truth, then the string "update" is the value of the value of the expression. Else, if the contact is false, the string "Add" is the value of the expression. */}
      {contact && <button onClick={cancelEdit}>Cancel</button>}
    </form>
  );
};

export default ContactForm;
