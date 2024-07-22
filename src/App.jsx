import React from "react";
import Review from "./Review";
import { useState } from "react";
// don't change the Component name "App"

function App() {
  const [feedback, setFeedback] = useState();
  const [studentName, setstudentName] = useState();
  const feedbackHandleChange = (event) => {
    setFeedback(event.target.value);
  };
  const nameHandleChange = (event) => {
    setstudentName(event.target.value);
  };
  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea onChange={feedbackHandleChange} value={feedback} />
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" onChange={nameHandleChange} value={studentName} />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={feedback} student={studentName} />

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;
