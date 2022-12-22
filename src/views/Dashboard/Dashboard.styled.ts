import styled from "@emotion/styled";
import { Typography, IconButton, Card } from "@mui/material";

export const Title = styled(Typography)`
  font-size: 1.75rem;
  color: #1a237e;
` as typeof Typography;

export const ActionButton = styled(IconButton)`
  background-color: #ebf3fa;
  margin-right: 1.5rem;
` as typeof IconButton;

export const CustomCard = styled(Card)`
  min-height: 120px;
  display: flex;
  align-items: center;
  border-width: 1px;
  border-style: solid;
` as typeof Card;
