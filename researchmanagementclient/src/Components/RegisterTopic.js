import React from "react";
import "@fontsource/roboto";
import RegisterForm from "./RegisterForm";

function RegisterTopic() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Register Your Topic</h1>
      <h2
        style={{
          textAlign: "center",
          marginLeft: "10%",
          marginRight: "10%",
          fontSize: "25px",
          marginTop: "30px",
          fontFamily: "Roboto",
        }}
      >
        Online chat may refer to any kind of communication over the Internet
        that offers a real-time transmission of text messages from sender to
        receiver. Chat messages are generally short in order to enable other
        participants to respond quickly. Thereby, a feeling similar to a spoken
        conversation is created, which distinguishes chatting from other
        text-based online communication forms such as Internet forums and email.
        Online chat may address point-to-point communications as well as
        multicast communications{" "}
      </h2>

      <RegisterForm />
    </div>
  );
}

export default RegisterTopic;
