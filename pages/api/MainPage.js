import React from "react";
import styled from "styled-components";
import Image from "next/image";
import titleLogo from "../../public/images/titleLogo.svg";
import mainBg from "../../public/images/mainBg.svg";
import logoBg from "../../public/images/logoBackground.svg";
import Footer from "../components/Footer";

const MainWrapper = styled.div`
  /* width: 1200px; */
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-bottom: 123px; */
  padding-bottom: 246px;
  background-image: url("/images/logoBackground.svg");
  background-size: cover;
  background-position: right;
`;
const TopText = styled.div`
  font-family: "Serif";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 28px;
  text-align: center;
  color: #15317f;

  margin-top: 208px;
`;
const LogoWrapper = styled.div`
  margin-top: 50px;
`;
const BottomText = styled.div`
  font-family: "Serif";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  text-align: center;

  color: #15317f;

  margin-top: 50px;
`;

const BodyWrapper = styled.div`
  width: 1920px;
  /* margin-top: 123px; */
`;
function MainPage(props) {
  return (
    <>
      <MainWrapper>
        <TitleWrapper>
          <TopText>Be a crypto All rounder with</TopText>
          <LogoWrapper>
            <Image src={titleLogo} alt="Picture of me" />
          </LogoWrapper>
          <BottomText>
            We are all-rounders who invest in Web3 companies and trade digital
            assets.
          </BottomText>
        </TitleWrapper>
        <BodyWrapper>
          <Image src={mainBg} />
        </BodyWrapper>
      </MainWrapper>
    </>
  );
}

export default MainPage;
