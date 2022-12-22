import styled from "@emotion/styled";
import { Link, Box } from "@mui/material";

export const NavWrapper = styled(Box)`
  height: 100%;
` as typeof Box;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;

  .MuiListItemIcon-root {
    min-width: 35px;
  }
` as typeof Link;

export default LinkStyled;
