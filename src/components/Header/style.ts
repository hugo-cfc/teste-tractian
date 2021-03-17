import styled from "styled-components";

import { NavLink } from "react-router-dom";

import { Row, Col, Layout, Typography, Avatar, Dropdown } from "antd";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

export const HeaderStyled = styled(Header)`
  background: #001529;
`;

export const HeaderRow = styled(Row)``;

export const HeaderCol = styled(Col)`
  flex: none;
`;

export const ImgLogo = styled.img`
  cursor: pointer;
`;

export const AvatarProfile = styled(Avatar)`
  background: #fafa;
  margin-right: 10px;
`;

export const AvatarName = styled(Text)`
  color: #fff;
  margin-left: 10px;
`;
