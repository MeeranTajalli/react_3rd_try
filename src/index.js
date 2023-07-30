//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

function greeting() {
  const hour = new Date().getHours();
  let message;
  const Custom = {}; // Create the Custom object directly inside the function

  if (hour >= 0 && hour < 12) {
    message = "Good Morning";
    Custom.color = "red";
  } else if (hour >= 12 && hour <= 18) {
    message = "Good Afternoon";
    Custom.color = "green";
  } else {
    message = "Good evening";
    Custom.color = "blue";
  }
  return { message, Custom }; // Return an object with both the message and the Custom object
}

const Greeting = () => {
  const { message, Custom } = greeting(); // Destructure the message and Custom from the returned object

  return (
    <div>
      <h1 className="heading" style={Custom}>
        {message}
      </h1>
    </div>
  );
};

ReactDOM.render(<Greeting />, document.getElementById("root"));
