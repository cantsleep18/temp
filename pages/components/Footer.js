import Image from "next/image";
import React from "react";
import styled from "styled-components";
import footerLogo from "../../public/images/footerLogo.svg";

const FooterWrapper = styled.div`
  width: 1200px;
  height: 164px;
  display: flex;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 34px;
`;

const FooterText = styled.div`
  font-family: "S-Core Dream";
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 25px;
  color: #333333;
`;

const LogoWrapper = styled.div``;

function Footer(props) {
  return (
    <FooterWrapper>
      <LogoWrapper>
        <Image src={footerLogo} />
      </LogoWrapper>
      <TextWrapper>
        <FooterText>
          서울특별시 강남구 언주로 30길 13(도곡동) 사업자 번호 2356-212256
        </FooterText>
        <FooterText>
          COPYRIGHT ⓒ 2023 ALL ROUND Co., Ltd. ALL RIGHT RESERVED
        </FooterText>
      </TextWrapper>
    </FooterWrapper>
  );
}

export default Footer;
