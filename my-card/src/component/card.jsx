import React, { useState } from "react";

const Card = () => {
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState({
    name: "",
    number: "",
    image: "",
  });

  const handleInputChange = (e) => {
    setNewCard({ ...newCard, [e.target.name]: e.target.value });
  };

  const handleAddCard = () => {
    if (
      newCard.name.trim() !== "" &&
      newCard.number.trim() !== "" &&
      newCard.image.trim() !== ""
    ) {
      setCards([...cards, newCard]);
      setNewCard({ name: "", number: "", image: "" });
    }
  };

  const handleDeleteCard = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  return (
    <div className="card-container">
      <h2>List of Cards</h2>
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <h3>{card.name}</h3>
          <p>{card.number}</p>
          <img src={card.image} alt={card.name} />
          <div className="card-buttons">
            <button>Edit</button>
            <button onClick={() => handleDeleteCard(index)}>Delete</button>
          </div>
        </div>
      ))}
      <div className="card-form">
        <input
          type="text"
          name="name"
          value={newCard.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="number"
          value={newCard.number}
          onChange={handleInputChange}
          placeholder="Number"
        />
        <input
          type="text"
          name="image"
          value={newCard.imageUrl}
          onChange={handleInputChange}
          placeholder="Image "
        />
        <button onClick={handleAddCard}>Add Card</button>
      </div>
    </div>
  );
};

export default Card;
