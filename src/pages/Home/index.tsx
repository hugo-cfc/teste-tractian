import React, { useContext, useEffect, useState } from "react";

import { AuthCreateContext } from "../../Context/AuthContext";

import {} from "antd";
import {} from "@ant-design/icons";

import { AiTwotoneAlert, AiOutlinePoweroff } from "react-icons/ai";
import { BsLightningFill } from "react-icons/bs";

import CardAsset from "./components/CardAsset";

import { Container, ContainerInside, BoxCards } from "./style";

import Header from "../../components/Header";

import { Assets } from "../../interfaces";

function Home() {
  const { assetsUnit1, assetsUnit2, dataTable } = useContext(AuthCreateContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  function iconSelector(status: string | undefined) {
    switch (status) {
      case "inOperation":
        return (
          <>
            <BsLightningFill style={{ color: "green" }} /> Em Operação
          </>
        );
      case "inDowntime":
        return (
          <>
            <AiOutlinePoweroff style={{ color: "red" }} /> Em Parada
          </>
        );
      case "inAlert":
        return (
          <>
            <AiTwotoneAlert style={{ color: "orange" }} /> Em alerta
          </>
        );
      default:
        return "Desconhecido";
    }
  }

  return (
    <Container>
      <Header />
      <ContainerInside>
        {assetsUnit2.map((item: Assets) => {
          return (
            <>
              <BoxCards span={5}>
                <CardAsset titleMeta={item.name} descriptionMeta="Thisssssss" cover={<img alt={item.name} src={item.image} style={{ height: "230px" }} />}>
                  Status: {iconSelector(item.status)}
                </CardAsset>
              </BoxCards>
            </>
          );
        })}
      </ContainerInside>
    </Container>
  );
}

export default Home;
