import React, { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { AuthCreateContext } from "../../Context/AuthContext";

import api from "../../services/api";

import Header from "../../components/Header";

import { Hello } from "./style";

interface ParamTypes {
  id: string;
}

export default function UnityPage() {
  const { assetsUnit1, assetsUnit2, usersUnit1, usersUnit2 } = useContext(AuthCreateContext);
  const { id } = useParams<ParamTypes>();
  const assetsUnitCurrent = Number(id) === 1 ? assetsUnit1 : assetsUnit2;
  const usersUnitCurrent = Number(id) === 1 ? usersUnit1 : usersUnit2;

  return (
    <>
      <Header />
      <Hello>Olá, mundo! {id}</Hello>
      <Hello>Funcionarios {id}</Hello>
      <Hello>Ativos {id}</Hello>
      <Hello>Insights {id}</Hello>
    </>
  );
}
