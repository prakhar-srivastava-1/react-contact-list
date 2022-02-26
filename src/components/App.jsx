import React from "react";

import Card from "./Card.jsx";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name="Elon Musk"
        img="https://i.imgur.com/CNhZzYY.jpeg"
        phone="+123 456 789"
        email="elon@spacex.com" />
    </div>
  );
}

export default App;
