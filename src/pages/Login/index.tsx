import React, { useEffect, useState, useContext } from "react";
import api from "../../services/api";

import { AuthCreateContext, AuthProvider } from "../../Context/AuthContext";

import TractianLogo from "../../assets/logoTractian.webp";

import {
  Container,
  HeaderStyled,
  HeaderCol,
  ImgLogo,
  ContainerInside,
  MainCols,
  TypographySaudation,
  ContentLogin,
  FormStyled,
  InputStyled,
  ButtonStyled,
} from "./style";

const layoutForm = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

function Login() {
  const {dataUser, getUsers,} = useContext(AuthCreateContext);
  const [userEmail, setUserEmail] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(e);
  }

  console.log(getUsers())

  return (
    <Container>
      <HeaderStyled>
        <HeaderCol span={24}>
          <ImgLogo src={TractianLogo} />
        </HeaderCol>
      </HeaderStyled>
      <ContainerInside>
        <MainCols span={10} offset={2}>
          <TypographySaudation level={4}>MONITORAMENTO DE MÁQUINAS TRACTIAN:</TypographySaudation>
          <TypographySaudation>O sistema preditivo mais completo do mercado</TypographySaudation>
        </MainCols>
        <MainCols offset={2} span={10}>
          <ContentLogin>
            <FormStyled requiredMark={false} {...layoutForm} onFinish={handleSubmit}>
              <FormStyled.Item label="E-mail" name="email" rules={[{ required: true, message: "Por favor, digite seu e-mail" }]}>
                <InputStyled onChange={(e: any) => setUserEmail(e.target.value)} />
              </FormStyled.Item>
              <FormStyled.Item>
                <ButtonStyled htmlType="submit">Entrar</ButtonStyled>
              </FormStyled.Item>
            </FormStyled>
          </ContentLogin>
        </MainCols>
      </ContainerInside>
    </Container>
  );
}

export default Login;
