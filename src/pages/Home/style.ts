import styled from "styled-components";

import { Row, Col, Layout, Typography, Table } from "antd";

const { Header, Content } = Layout;
const { Title, Text } = Typography;
const { Column, ColumnGroup } = Table;

export const Container = styled.main`
  height: 100vh;
  background: #f4f6fa;
`;

export const Saudation = styled.h1``;

export const ContainerInside = styled(Row)`
  margin: 24px;
  padding: 24px;
  background: #fff;
  border: 1px solid #dddfe0;
`;

export const ContainerCards = styled(Row)`
  width: 100%;
  margin: 24px;
  padding: 24px;
  border: 1px solid #dddfe0;
  justify-content: center;
  background: #fff;
`;

export const BoxCards = styled(Col)``;
