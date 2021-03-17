import styled from "styled-components";

import { Row, Col, Layout, Typography, Table } from "antd";

const { Header, Content } = Layout;
const { Title, Text } = Typography;
const {Column, ColumnGroup} = Table;

export const Container = styled.main`
  height: 100vh;
`;

export const ContainerInside = styled(Content)`
  margin: 24px;
  border: 1px solid #dddfe0;
`;

export const StyleTable = styled(Table)`
  color: red;
`;

export const StyleColumn = styled(Column)``

export const StyleColumnGroup = styled(ColumnGroup)``
