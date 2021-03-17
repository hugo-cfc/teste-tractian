import styled from "styled-components";

import { Row, Col, Layout, Typography, Table } from "antd";

const { Header, Content } = Layout;
const { Title, Text } = Typography;
const {Column, ColumnGroup} = Table;

export const Container = styled.main`
  height: 100vh;
`;

export const ContainerInside = styled(Row)`
  margin: 24px;
  padding: 24px;
  border: 1px solid #dddfe0;
  justify-content: center;
`;

export const BoxCards = styled(Col)`

`;
