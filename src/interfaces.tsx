export interface DataUsers {
  id?: number;
  email?: string;
  name?: string;
  unitId?: number;
  companyId?: number;
  companyName?: string;
  unityName?: string;
}

export interface Companies {
  id?: number;
  name?: string;
}

export interface Units extends Companies {
  companyId?: number;
}

export interface MetricsAssets {
  totalCollectsUptime: number;
  totalUptime: number;
  lastUptimeAt: string;
}

export interface EspecificationsAssets {
  maxTemp: number;
  rpm: number;
  power: number;
}

export interface Assets {
  id?: number;
  sensor?: string[];
  status?: string;
  healthscore?: number;
  model?: string;
  name?: string;
  image?: string;
  metrics?: MetricsAssets;
  specification?: EspecificationsAssets;
  unitId?: number;
  companyId?: number;
}

export interface ContextProps extends DataUsers {
  authenticated: boolean;
  dataUsers: Array<DataUsers>;
  handleLogin(e: any): void;
  handleLogout(e: any): void;
  handleInputChange(e: any): void;
  currentUser: DataUsers;
  companies: Companies;
  units: Units;
  avatarName: string;
  assets: Array<Assets>;
  assetsUnit1: any;
  assetsUnit2: any;
  dataTable: any;
  assetsUnitCurrent: any;
}
