import React from "react";

import Card from "./Card.jsx";
// import all Contacts
import Contacts from "../contacts.js";
// import Avatar to show your image at the top
import Avatar from "./Avatar.jsx";

// Using map() to automatically create cards for each object
// createCard function uses Card component and takes one contact as input
function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="http://devprakhar.in/static/assets/img/profile-img.jpg" />
      {Contacts.map(createCard)}
    </div>
  );
}

export default App;
