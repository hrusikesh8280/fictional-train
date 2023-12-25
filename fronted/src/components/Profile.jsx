import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get("/profile");
        setUser(response.data.user);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4}>
        Profile
      </Heading>
      {user ? (
        <Box borderWidth={1} borderRadius="lg" p={4}>
          <Text mb={4}>
            <strong>Name:</strong> {user.name}
          </Text>
          <Text mb={4}>
            <strong>Email:</strong> {user.email}
          </Text>
          <Text mb={4}>
            <strong>Timestamp:</strong> {user.timestamp}
          </Text>
          <Button colorScheme="red" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      ) : (
        <Text>Loading...</Text>
      )}
    </Box>
  );
};

export default Profile;
