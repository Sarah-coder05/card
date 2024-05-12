import React from 'react';
import './component/card.css'
import Card from './component/card';
import Contacts from './taskTwo/Contacts';
import ContactForm from './taskTwo/ContactForm';
import Contact from './taskTwo/Contact';
import ContactList from './taskTwo/ContactList';

const App = () => {
  return (
    <div>
      <Card /> 
      <Contacts />
      <ContactForm />
      <Contact />
      <ContactList />
    </div>
  );
};

export default App;