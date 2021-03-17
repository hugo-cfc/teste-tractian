import React from "react";

import { CardProps } from "antd";

import { StyledCard, StyledMeta } from "./style";

interface OnlyProps extends CardProps {
  titleMeta: string | undefined;
  descriptionMeta: string;
}

export default function CardAsset({ ...props }: OnlyProps) {
  return (
    <>
      <StyledCard {...props} hoverable>
        <StyledMeta title={props.titleMeta} />
        {props.children}
      </StyledCard>
    </>
  );
}
