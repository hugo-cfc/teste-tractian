import React, { useContext, useEffect, useState } from "react";

import { AuthCreateContext } from "../../Context/AuthContext";

import history from "../../history";

import { Assets } from "../../interfaces";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { AiTwotoneAlert, AiOutlinePoweroff } from "react-icons/ai";
import { BsLightningFill } from "react-icons/bs";

import Header from "../../components/Header";
import CardAsset from "./components/CardAsset";

import { Container, ContainerInside, BoxCards, Saudation, ContainerCards } from "./style";

const config = {
  chart: {
    type: "pie",
  },
  title: {
    text: "Status Geral",
  },
  series: [
    {
      name: "Brands",
      colorByPoint: true,
      data: [
        {
          name: "Em operação",
          y: 2,
          sliced: true,
          selected: true,
        },

        {
          name: "Em parada",
          y: 0,
        },

        {
          name: "Em alerta",
          y: 2,
        },
      ],
    },
  ],
};

function Home() {
  const { assetsUnit1, assetsUnit2, dataTable, currentUser } = useContext(AuthCreateContext);
  const [loading, setLoading] = useState(true);
  const assetsUnitCurrent = currentUser?.unitId === 1 ? assetsUnit1 : assetsUnit2;

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

  function handleClickCard(idAsset: number | undefined) {
    history.push(`/asset/${idAsset}`);
  }

  return (
    <Container>
      <Header />
      <ContainerInside>
        <Saudation>Olá, {currentUser?.name}! Escolha um ativo de sua unidade abaixo: </Saudation>
        <ContainerCards>
          {assetsUnitCurrent.map((item: Assets) => {
            return (
              <>
                <BoxCards key={item.id} span={5} onClick={() => handleClickCard(item.id)}>
                  <CardAsset titleMeta={item.name} cover={<img alt={item.name} src={item.image} style={{ height: "230px" }} />}>
                    Status: {iconSelector(item.status)}
                  </CardAsset>
                </BoxCards>
              </>
            );
          })}
          <HighchartsReact options={config}></HighchartsReact>
        </ContainerCards>
      </ContainerInside>
    </Container>
  );
}

export default Home;
