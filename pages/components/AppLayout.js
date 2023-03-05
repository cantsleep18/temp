import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import logo1 from "/public/images/logo1.svg";
import Image from "next/image";
import Footer from "./Footer";

const TopWrapper = styled.div`
  width: 1920px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  width: 1920px;
  height: 89px;
  position: sticky;
  top: 0px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: white;
`;

const ScrollHeaderWrapper = styled.div`
  width: 1920px;
  height: 89px;
  position: sticky;
  top: 0px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: white;
  box-shadow: 0 0 12px 0 rgb(0 0 0 / 35%);
`;

const LogoWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 360px;
`;

const TextWrapper = styled.div`
  display: flex;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-right: 360px;
`;

const HomeText = styled.div`
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #184eae;
  margin-right: 50px;
`;

const ContactText = styled(HomeText)`
  margin-right: 0px;
`;

const AppLayout = ({ children }) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY >= 50) {
      setScroll(true);
      console.log(scroll);
    } else {
      // 스크롤이 50px 미만일경우 false를 넣어줌
      setScroll(false);
    }
  };

  return (
    <>
      <TopWrapper>
        {scroll ? (
          <ScrollHeaderWrapper>
            <LogoWrapper>
              <Image src="/images/logo1.svg" alt="ye" width="200" height="20" />
            </LogoWrapper>
            <TextWrapper>
              <HomeText>
                <Link
                  href="/"
                  style={{
                    textDecoration: "none",
                    color: "#184eae",
                  }}
                >
                  Home
                </Link>
              </HomeText>
              <Link
                href="/contact"
                style={{
                  textDecoration: "none",
                  color: "#184eae",
                }}
              >
                <ContactText>Contact</ContactText>
              </Link>
            </TextWrapper>
          </ScrollHeaderWrapper>
        ) : (
          <HeaderWrapper>
            <LogoWrapper>
              <Image src="/images/logo1.svg" alt="ye" width="200" height="20" />
            </LogoWrapper>
            <TextWrapper>
              <HomeText>
                <Link
                  href="/"
                  style={{
                    textDecoration: "none",
                    color: "#184eae",
                  }}
                >
                  Home
                </Link>
              </HomeText>
              <Link
                href="/contact"
                style={{
                  textDecoration: "none",
                  color: "#184eae",
                }}
              >
                <ContactText>Contact</ContactText>
              </Link>
            </TextWrapper>
          </HeaderWrapper>
        )}

        {children}
        <Footer />
      </TopWrapper>
    </>
  );
};

export default AppLayout;
