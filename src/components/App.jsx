import React from "react";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card">
        <div className="top">
          <h2 className="name">Elon Musk</h2>
          <img
            className="circle-img"
            src="https://i.imgur.com/CNhZzYY.jpeg"
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p>+123 456 789</p>
          <p>elon@spacex.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
