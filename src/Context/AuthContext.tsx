import React, { useState, createContext, useCallback } from "react";

import api from "../services/api";

interface DataUser {
  id: number;
  email: string;
  name: string;
  unitId: number;
  companyId: number;
}

interface ContextProps {
  id: number;
  email: string;
  name: string;
  unitId: number;
  companyId: number;
  authenticated: boolean;
  getUsers(): {};
  dataUser: {};
}

const AuthCreateContext = createContext<Partial<ContextProps>>({});

const AuthProvider: React.FC = ({ children }) => {
  const [dataUser, setdataUser] = useState<Partial<DataUser>>({});
  const [authenticated, setAuthenticated] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const { data } = await api.get("users");
    setdataUser(data);
    return {
      id: data.id,
      email: data.email,
      name: data.name,
      unitId: data.unitId,
      companyId: data.companyId,
    };
  };

  return <AuthCreateContext.Provider value={{ authenticated, getUsers, dataUser }}>{children}</AuthCreateContext.Provider>;
};

export { AuthCreateContext, AuthProvider };
