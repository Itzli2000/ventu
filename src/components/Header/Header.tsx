import NotificationsIcon from "@mui/icons-material/Notifications";
import { Typography } from "@mui/material";
import { DateTime } from "luxon";
import HeaderWrapper, {
  NotificationBadge,
  NotificationsContainer,
} from "./Header.styled";

const Header = () => {
  return (
    <HeaderWrapper p={1}>
      <Typography>1 USD = 20.20 MXN</Typography>
      <NotificationsContainer>
        <Typography>
          {DateTime.now().toLocaleString(DateTime.DATE_MED)}
        </Typography>
        <NotificationBadge badgeContent={1} color="error">
          <NotificationsIcon color="action" />
        </NotificationBadge>
      </NotificationsContainer>
    </HeaderWrapper>
  );
};

export default Header;
