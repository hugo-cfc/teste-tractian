import React, { useContext } from "react";

import { useParams } from "react-router-dom";

import { AuthCreateContext } from "../../Context/AuthContext";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import Header from "../../components/Header";

import { H1 } from "./style";

interface ParamTypes {
  id: string;
}

const config = {
  chart: {
    type: "pie",
  },
  title: {
    text: "My chart",
  },
  series: [
    {
      name: "Brands",
      colorByPoint: true,
      data: [
        {
          name: "Em operação",
          y: 61.41,
          sliced: true,
          selected: true,
        },
  
        {
          name: "Em parada",
          y: 10,
        },
  
        {
          name: "Em alerta",
          y: 10,
        },
      ],
    },
  ],
};

function AssetDetails() {
  const {} = useContext(AuthCreateContext);
  const { id } = useParams<ParamTypes>();

  return (
    <>
      <Header />
      <H1>Olá mundo! Page Assets!! {id}</H1>
      <HighchartsReact options={config}></HighchartsReact>
    </>
  );
}

export default AssetDetails;
