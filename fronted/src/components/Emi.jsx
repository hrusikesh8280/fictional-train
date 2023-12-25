import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";

const Emi = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [annualInterestRate, setAnnualInterestRate] = useState("");
  const [tenureInMonths, setTenureInMonths] = useState("");
  const [emi, setEmi] = useState("");
  const [interestPayable, setInterestPayable] = useState("");
  const [totalPayment, setTotalPayment] = useState("");

  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/emi", {
        loanAmount,
        annualInterestRate,
        tenureInMonths,
      });

      const { emi, interestPayable, totalPayment } = response.data;
      setEmi(emi);
      setInterestPayable(interestPayable);
      setTotalPayment(totalPayment);
    } catch (error) {
      // Handle error, such as displaying an error message
      console.error(error);
    }
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={4}>
        EMI Calculator
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="loanAmount" isRequired>
            <FormLabel>Loan Amount</FormLabel>
            <Input
              type="number"
              placeholder="Enter Loan Amount"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />
          </FormControl>
          <FormControl id="annualInterestRate" isRequired>
            <FormLabel>Annual Interest Rate (%)</FormLabel>
            <Input
              type="number"
              placeholder="Enter Annual Interest Rate"
              value={annualInterestRate}
              onChange={(e) => setAnnualInterestRate(e.target.value)}
            />
          </FormControl>
          <FormControl id="tenureInMonths" isRequired>
            <FormLabel>Tenure (In Months)</FormLabel>
            <Input
              type="number"
              placeholder="Enter Tenure in Months"
              value={tenureInMonths}
              onChange={(e) => setTenureInMonths(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="100%">
            Calculate
          </Button>
        </VStack>
      </form>
      {emi && (
        <Box mt={8}>
          <Heading as="h2" size="lg" mb={4}>
            EMI Calculation Result
          </Heading>
          <Box borderWidth={1} borderRadius="lg" p={4}>
            <p>
              <strong>EMI:</strong> {emi}
            </p>
            <p>
              <strong>Interest Payable:</strong> {interestPayable}
            </p>
            <p>
              <strong>Total Payment:</strong> {totalPayment}
            </p>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Emi;
