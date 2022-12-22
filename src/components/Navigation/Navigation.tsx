import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import * as NavigationIcons from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { Box } from "@mui/system";
import logo from "../../assets/logo.png";
import { navigationItems } from "../../constants";
import LinkStyled, { NavWrapper } from "./Navigation.styled";

const Navigation = () => {
  const Icon = ({ name, ...rest }: any) => {
    const IconComponent: React.FC = NavigationIcons[name as never];
    return IconComponent ? <IconComponent {...rest} /> : null;
  };

  return (
    <NavWrapper sx={{ display: "flex", flexDirection: "column" }}>
      <img src={logo} />
      <List>
        {navigationItems.map((item, index) => {
          return (
            <ListItem key={item.url + index} disablePadding>
              <LinkStyled
                component={RouterLink}
                sx={{ width: "100%" }}
                to={item.url}
              >
                <ListItemButton sx={{ width: "100%" }}>
                  <ListItemIcon>
                    <Icon name={item.icon} />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: "body1",
                    }}
                    primary={item.name}
                  />
                </ListItemButton>
              </LinkStyled>
            </ListItem>
          );
        })}
      </List>
    </NavWrapper>
  );
};

export default Navigation;
