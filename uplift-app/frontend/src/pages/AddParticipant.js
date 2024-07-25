import React, { useState } from 'react';
import axios from 'axios';

const AddParticipant = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    race: '',
    primaryLanguage: '',
    livingLocation: '',
    workingLocation: '',
    housingStatus: '',
    educationLevel: '',
    healthInsurance: false,
    dentalInsurance: false,
    visionInsurance: false,
    workingBefore: false,
    workType: '',
    certificates: false,
    certificatesNote: '',
    militaryVeteran: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/participants', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Render form fields similarly */}
      <button type="submit">Add Participant</button>
    </form>
  );
};

export default AddParticipant;
