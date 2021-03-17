import React, { useState, createContext, useEffect } from "react";

import { DataUsers, Units, Assets, ContextProps } from "../interfaces";

import api from "../services/api";
import history from "../history";

const AuthCreateContext = createContext<Partial<ContextProps>>({});

const AuthProvider: React.FC = ({ children }) => {
  const [dataUsers, setdataUsers] = useState([]);
  const [companies, setCompanies] = useState({});
  const [units, setUnits] = useState<Units>({});
  const [currentUser, setCurrentUser] = useState<DataUsers>({});
  const [authenticated, setAuthenticated] = useState(false);
  const [assets, setAssets] = useState([]);
  const assetsUnit1 = [] as any;
  const assetsUnit2 = [] as any;
  const dataTable = [] as any;
  const avatarName = `${currentUser?.name?.split(" ")[0].charAt(0)}${currentUser?.name?.split(" ")[1].charAt(0)}`;

  useEffect(() => {
    (async () => {
      const { data } = await api.get("users");

      setdataUsers(data);
    })();

    (async () => {
      const { data } = await api.get(`companies`);

      setCompanies(data);
    })();

    (async () => {
      const { data } = await api.get(`units`);

      setUnits(data);
    })();

    (async () => {
      const { data } = await api.get(`assets`);

      setAssets(data);
    })();
  }, []);

  function getAssets() {
    assets.map((item: Assets) => {
      if (item.unitId === 1) {
        assetsUnit1.push(item);
      }
      if (item.unitId === 2) {
        assetsUnit2.push(item);
      }
    });
  }

  function getAssetsTable() {
    assetsUnit1.map((item: Assets) => {
      dataTable.push({
        key: item.id,
        name: item.name,
        sensor: item.sensor,
        company: item.companyId,
        unity: item.unitId,
        status: item.status,
        healthscore: item.healthscore,
        model: item.model,
      });
    });
  }

  function authentication(state: boolean) {
    setAuthenticated(state);
    localStorage.setItem("authentication", String(authenticated));
  }

  function emailValidation() {
    return dataUsers?.map((item: DataUsers) => {
      if (item.email === localStorage.getItem("email")) {
        setCurrentUser(item);
        authentication(true);
      }
      return true;
    });
  }

  const collectDataUser = () => {
    (async () => {
      const { data } = await api.get(`units/${currentUser?.unitId}`);

      currentUser.unityName = data.name;
    })();

    (async () => {
      const { data } = await api.get(`companies/${currentUser?.companyId}`);

      currentUser.companyName = data.name;
    })();

    getAssets();
    getAssetsTable();
  };

  const redirector = (route: string) => history.push(route);

  function handleInputChange(e: any) {
    localStorage.setItem("email", e.target.value);
    emailValidation();
  }

  const handleLogin = (e: any) => {
    if (authenticated) redirector("/home");
    collectDataUser();
  };

  function handleLogout(e: any) {
    authentication(false);
    localStorage.clear();
    redirector("/");
  }

  return (
    <AuthCreateContext.Provider
      value={{ handleLogin, handleLogout, handleInputChange, currentUser, authenticated, companies, units, avatarName, assets, assetsUnit1, assetsUnit2, dataTable }}
    >
      {children}
    </AuthCreateContext.Provider>
  );
};

export { AuthCreateContext, AuthProvider };
