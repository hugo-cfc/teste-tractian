import React, { useEffect, useState } from "react";
import api from "../../services/api";

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

interface Users {
  id: Number;
  email: String;
  name: String;
  unitId: Number;
  companyId: Number;
}

function Login() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    (async () => {
      const { data } = await api.get("users");
      setUsers(data);
    })();
  }, []);

  function handleClickSubmit(e:EventM) {

  }

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
            <FormStyled requiredMark={false} {...layoutForm} onSubmit={}>
              <FormStyled.Item label="E-mail" name="email" rules={[{ required: true, message: "Por favor, digite seu e-mail" }]}>
                <InputStyled />
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
