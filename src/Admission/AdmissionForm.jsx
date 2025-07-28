import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase"; 
import { collection, addDoc } from "firebase/firestore"; 
import { onAuthStateChanged } from "firebase/auth"; 
import "./AdmissionForm.css"; 

const AdmissionForm = () => {
  const initialFormState = {
    firstName: "",
    middleInitial: "",
    lastName: "",
    birthMonth: "",
    birthDay: "",
    birthYear: "",
    gender: "",
    country: "",
    phone: "",
    email: "",
    streetAddress: "",
    streetAddress2: "",
    city: "",
    state: "",
    zipCode: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [buttonText, setButtonText] = useState("Submit");

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true); 
      } else {
        setIsLoggedIn(false); 
      }
    });

    return unsubscribe; 
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (!isLoggedIn) {
      setButtonText("Please log in to submit");
      return; 
    }

    try {
      
      const docRef = await addDoc(collection(db, "admissions"), formData);
      
      console.log("Document written with ID: ", docRef.id);
      alert("Admission Form Submitted Successfully!");

      
      setFormData(initialFormState);
      setButtonText("Submit"); 
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="admission">
    <div className="admission-form">
      <h2> ADMISSIONS FORM</h2>
      <p id="p">Enter your admission information below</p>
      <hr />

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <div className="name-fields">
            <input 
              type="text" 
              name="firstName" 
              placeholder="First Name" 
              value={formData.firstName} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="text" 
              name="middleInitial" 
              placeholder="Middle Initial" 
              value={formData.middleInitial} 
              onChange={handleChange} 
            />
            <input 
              type="text" 
              name="lastName" 
              placeholder="Last Name" 
              value={formData.lastName} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>

        <div className="form-group">
          <label>Birth Date</label>
          <div className="birthdate-fields">
            <select 
              name="birthMonth" 
              value={formData.birthMonth} 
              onChange={handleChange} 
              required
            >
              <option value="">Select a Month</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
            <select 
              name="birthDay" 
              value={formData.birthDay} 
              onChange={handleChange} 
              required
            >
              <option value="">Select a Day</option>
              {[...Array(31)].map((_, i) => (
                <option key={i} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <select 
              name="birthYear" 
              value={formData.birthYear} 
              onChange={handleChange} 
              required
            >
              <option value="">Select a Year</option>
              {[...Array(100)].map((_, i) => (
                <option key={i} value={2025 - i}>{2025 - i}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Gender</label><br />
          <div className="gender-options">
            <label>
              <input 
                type="radio" 
                name="gender" 
                value="male" 
                checked={formData.gender === "male"} 
                onChange={handleChange} 
                required 
              /> Male
            </label>
            <label>
              <input 
                type="radio" 
                name="gender" 
                value="female" 
                checked={formData.gender === "female"} 
                onChange={handleChange} 
                required 
              /> Female
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Country</label>
          <select 
            name="country" 
            value={formData.country} 
            onChange={handleChange} 
            required
          >
            <option value="">Please Select</option>
            <option>United States</option>
            <option>Canada</option>
            <option>India</option>
          </select>
        </div>

        <div className="form-group contact-info">
          <div>
            <label>Phone</label>
            <input 
              type="number" 
              name="phone" 
              placeholder="(000) 000-0000" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
          </div><br/>
          <div>
            <label>E-mail Address</label>
            <input 
              type="email" 
              name="email" 
              placeholder="example@example.com" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>

        <hr />
        <h3>Mailing Address</h3>

        <div className="form-group">
          <label>Street Address</label>
          <input 
            type="text" 
            name="streetAddress" 
            placeholder="Street Address" 
            value={formData.streetAddress} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Street Address Line 2</label>
          <input 
            type="text" 
            name="streetAddress2" 
            placeholder="Street Address Line 2" 
            value={formData.streetAddress2} 
            onChange={handleChange} 
          />
        </div>

        <div className="form-group city-state">
          <div>
            <label>City</label>
            <input 
              type="text" 
              name="city" 
              placeholder="City" 
              value={formData.city} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <label>State / Province</label>
            <input 
              type="text" 
              name="state" 
              placeholder="State / Province" 
              value={formData.state} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>

        <div className="form-group">
          <label>Postal / Zip Code</label>
          <input 
            type="number" 
            name="zipCode" 
            placeholder="Postal / Zip Code" 
            value={formData.zipCode} 
            onChange={handleChange} 
            required 
          />
        </div>

        <button 
          type="submit" 
          className="button"
        >
          {buttonText}
        </button>
      </form>
    </div>
    </div>
  );
};  

export default AdmissionForm;
