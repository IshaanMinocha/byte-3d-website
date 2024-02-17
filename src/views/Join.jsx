import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from 'react'

export default function Join({setProgress}) {

  useEffect(()=>{
    setProgress(20);
    setTimeout(()=>{
      setProgress(100);
    }, 500)
  }, [])

    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });

  const [currentField, setCurrentField] = useState("firstName");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFieldChange = (fieldName) => {
    setCurrentField(fieldName);
  };

  return (
        <>
    <div className="max-w-md mx-auto mt-8 p-8 bg-gray-200 rounded-lg">
      <AnimatePresence>
        {currentField === "firstName" && (
          <motion.input
          key="firstName"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full p-2 my-2 rounded-md border border-gray-300"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
          />
        )}

        {currentField === "lastName" && (
          <motion.input
            key="lastName"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full p-2 my-2 rounded-md border border-gray-300"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
          />
        )}

        {currentField === "email" && (
          <motion.input
            key="email"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 my-2 rounded-md border border-gray-300"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
          />
        )}

        {currentField === "password" && (
          <motion.input
            key="password"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-2 my-2 rounded-md border border-gray-300"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
          />
        )}
      </AnimatePresence>

      {currentField !== "password" && (
        <button
          onClick={() => handleFieldChange(nextField[currentField])}
          className="block w-full p-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Next
        </button>
      )}

      {currentField === "password" && (
        <button className="block w-full p-2 mt-4 bg-green-500 text-white rounded-md hover:bg-green-600">
          Join Us
        </button>
      )}
    </div>




</>
  )
}

const nextField = {
  firstName: "lastName",
  lastName: "email",
  email: "password",
  password: null,
};