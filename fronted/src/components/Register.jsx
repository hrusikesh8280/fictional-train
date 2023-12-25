import { Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await axiosInstance.post("/auth/signup", {
        name,
        email,
        password,
      });

      // Clear the form fields
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      setError("Registration failed");
    }

    setLoading(false);
  };

  return (
    <VStack spacing="10px">
      <FormControl id="name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          value={name}
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          value={email}
          type="email"
          placeholder="Enter Your Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter password"
        />
      </FormControl>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={handleSubmit}
        isLoading={loading}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Register;
