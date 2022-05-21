import React from "react";

// Chakra imports
import { Button, Flex, Link, Text, Input, Select } from "@chakra-ui/react";

// Assets
import banner from "assets/img/nfts/NftBanner1.png";

export default function Banner() {
  // Chakra Color Mode
  return (
    <Flex
      direction="column"
      backgroundColor="#6b4fe8"
      bgSize="cover"
      py={{ base: "30px", md: "56px" }}
      px={{ base: "30px", md: "64px" }}
      borderRadius="30px"
      style={{ height: "550px" }}
    >
      <Text
        fontSize={{ base: "24px", md: "34px" }}
        color="white"
        mb="14px"
        maxW={{
          base: "100%",
          md: "64%",
          lg: "46%",
          xl: "70%",
          "2xl": "50%",
          "3xl": "42%",
        }}
        fontWeight="700"
        lineHeight={{ base: "32px", md: "42px" }}
      >
        Add Cast...
      </Text>
      <Text
        fontSize="md"
        color="#E3DAFF"
        maxW={{
          base: "100%",
          // md: "64%",
          lg: "40%",
          xl: "56%",
          "2xl": "46%",
          "3xl": "34%",
        }}
        fontWeight="500"
        mb="5px"
        lineHeight="28px"
      >
        Cast Name
      </Text>
      <Input placeholder="Basic usage" />
      <Text
        fontSize="md"
        color="#E3DAFF"
        maxW={{
          base: "100%",
          // md: "64%",
          lg: "40%",
          xl: "56%",
          "2xl": "46%",
          "3xl": "34%",
        }}
        fontWeight="500"
        mb="5px"
        lineHeight="28px"
      >
        Description
      </Text>
      <Input placeholder="Basic usage" />
      <Text
        fontSize="md"
        color="#E3DAFF"
        maxW={{
          base: "100%",
          // md: "64%",
          lg: "40%",
          xl: "56%",
          "2xl": "46%",
          "3xl": "34%",
        }}
        fontWeight="500"
        mb="5px"
        lineHeight="28px"
      >
        Type
      </Text>
      <Select placeholder="Select option">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Text
        fontSize="md"
        color="#E3DAFF"
        maxW={{
          base: "100%",
          // md: "64%",
          lg: "40%",
          xl: "56%",
          "2xl": "46%",
          "3xl": "34%",
        }}
        fontWeight="500"
        mb="5px"
        lineHeight="28px"
      >
        Image
      </Text>
      <Input type="file" />
      <Flex align="center">
        <Button
          bg="white"
          color="black"
          _hover={{ bg: "whiteAlpha.900" }}
          _active={{ bg: "white" }}
          _focus={{ bg: "white" }}
          fontWeight="500"
          fontSize="14px"
          py="20px"
          px="27"
          me="38px"
          mt="40px"
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
}
