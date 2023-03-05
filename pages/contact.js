import React from "react";
import styled from "styled-components";
import AppLayout from "./components/AppLayout";
import contactBg from "../public/images/contactBg.svg";
import mailIcon from "../public/images/mailIcon.svg";
import Image from "next/image";
import Footer from "./components/Footer";

const TopWrapper = styled.div`
  width: 1920px;
  height: 400px;
`;

const ContactBgWrapper = styled.div`
  width: 1920px;
  height: 1000px;
  background-color: #f5f9fc;
  display: flex;
  justify-content: center;
`;
const ContactWrapper = styled.div`
  width: 700px;
  height: 800px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const MailIconWrapper = styled.div`
  margin-top: 60px;
`;
const ContactUsWrapper = styled.div`
  margin-top: 30px;
  font-family: "Serif12 Beta";
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 25px;
  text-align: center;

  color: #2f3c56;
`;

const SubInfoWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 44px;
  font-family: "Serif12 Beta";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  text-align: center;

  color: #000000;
`;

const FormWrapper = styled.div`
  width: 500px;
  /* margin-left: 100px; */
  /* margin-right: 100px; */
  display: flex;
  flex-direction: column;
`;
const SubTitleWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 4px;
  font-family: "Serif12 Beta";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  color: #2f3c56;
`;
const SmallInputBox = styled.input`
  width: 500px;
  height: 50px;
  background: #f8f8f8;
  border: none;
`;
const BigInputBox = styled.input`
  width: 500px;
  height: 180px;
  background: #f8f8f8;
  border: none;
`;

const SendButton = styled.div`
  width: 500px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 30px;
  background: #15317f;

  font-family: "Gmarket Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.3em;
  text-transform: uppercase;

  color: #ffffff;
`;

function ContactPage(props) {
  return (
    <AppLayout>
      <TopWrapper>
        <Image src={contactBg} />
      </TopWrapper>
      <ContactBgWrapper>
        <ContactWrapper>
          <MailIconWrapper>
            <Image src={mailIcon} />
          </MailIconWrapper>
          <ContactUsWrapper>Contact Us</ContactUsWrapper>
          <SubInfoWrapper>
            Please fill this form in a decent manner
          </SubInfoWrapper>

          <FormWrapper>
            <SubTitleWrapper>Full Name</SubTitleWrapper>
            <SmallInputBox></SmallInputBox>
            <SubTitleWrapper>E-mail</SubTitleWrapper>
            <SmallInputBox></SmallInputBox>
            <SubTitleWrapper>Message</SubTitleWrapper>
            <BigInputBox></BigInputBox>
            <SendButton>SEND</SendButton>
          </FormWrapper>
        </ContactWrapper>
      </ContactBgWrapper>
    </AppLayout>
  );
}

export default ContactPage;
