import React, { useState } from "react";
import "./App.css"; // CSS file import

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  // Handles changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form submission behavior
    setSubmittedData(formData); // Stores the submitted data
    setFormData({ name: "", email: "", message: "" }); // Resets the form fields
  };

  return (
    // Main container for the form
    <div className="container">
      <h1>React Form</h1>
      {/* Form element with submit handler */}
      <form onSubmit={handleSubmit} className="form">
        {/* Form group for Name input */}
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required // Makes the field mandatory
          />
        </div>
        {/* Form group for Email input */}
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required // Makes the field mandatory
          />
        </div>
        {/* Form group for Message textarea */}
        <div className="form-group">
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required // Makes the field mandatory
          ></textarea>
        </div>
        {/* Submit button */}
        <button type="submit" className="submit-button">Submit</button>
      </form>

      {/* Displays submitted data if available */}
      {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Data:</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Message:</strong> {submittedData.message}</p>
        </div>
      )}
    </div>
  );
}

export default App;
