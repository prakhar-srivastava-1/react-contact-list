import React from "react";

import Card from "./Card.jsx";
// import all Contacts
import Contacts from "../contacts.js";
// import Avatar to show your image at the top
import Avatar from "./Avatar.jsx";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="http://devprakhar.in/static/assets/img/profile-img.jpg" />
      <Card
        name={Contacts[0].name}
        img={Contacts[0].imgURL}
        phone={Contacts[0].phone}
        email={Contacts[0].email} />
      <Card
        name={Contacts[1].name}
        img={Contacts[1].imgURL}
        phone={Contacts[1].phone}
        email={Contacts[1].email} />
      <Card
        name={Contacts[2].name}
        img={Contacts[2].imgURL}
        phone={Contacts[2].phone}
        email={Contacts[2].email} />
    </div>
  );
}

export default App;
