import React, { useContext, useEffect, useState } from "react";

import { AuthCreateContext } from "../../Context/AuthContext";

import {} from "antd";
import {} from "@ant-design/icons";

import { Container, ContainerInside, StyleTable, StyleColumn, StyleColumnGroup } from "./style";

import Header from "../../components/Header";

import { Assets } from "../../interfaces";

function Home() {
  const { assetsUnit1, assetsUnit2, dataTable } = useContext(AuthCreateContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Container>
      <Header />
      <ContainerInside>
        {loading ? (
          "Carregando"
        ) : (
          <StyleTable dataSource={dataTable} pagination={false}>
            <StyleColumn title="Name" dataIndex="name" key="name" />
            <StyleColumn title="Sensor" dataIndex="sensor" key="sensor" />
            <StyleColumn title="Empresa" dataIndex="company" key="company" />
            <StyleColumn title="Unidade" dataIndex="unity" key="unity" />
            <StyleColumn title="Status" dataIndex="status" key="status" />
            <StyleColumn title="Healthscore" dataIndex="healthscore" key="healthscore" />
            <StyleColumn title="Model" dataIndex="model" key="model" />
          </StyleTable>
        )}
      </ContainerInside>
    </Container>
  );
}

export default Home;
