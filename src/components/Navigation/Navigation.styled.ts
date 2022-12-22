import styled from "@emotion/styled";
import { Link, Box } from "@mui/material";

export const NavWrapper = styled(Box)`
  height: 100%;
` as typeof Box;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    background-color: #ebf3fa;

    .MuiTypography-root {
      font-weight: 600;
    }

    .MuiSvgIcon-root {
      color: #2a4e96;
    }
  }

  .MuiTypography-root {
    font-size: 0.875rem;
  }

  .MuiSvgIcon-root {
    color: #afcdfb;
  }

  .MuiListItemIcon-root {
    min-width: 35px;
  }
` as typeof Link;

export default LinkStyled;
