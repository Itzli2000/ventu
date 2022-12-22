import NotificationsIcon from "@mui/icons-material/Notifications";
import { Typography } from "@mui/material";
import { DateTime } from "luxon";
import { dollarValue } from "../../constants";
import HeaderWrapper, {
  NotificationBadge,
  NotificationsContainer,
} from "./Header.styled";

const Header = () => {
  return (
    <HeaderWrapper p={1}>
      <Typography>1 USD = {(1 * dollarValue).toFixed(2)} MXN</Typography>
      <NotificationsContainer>
        <Typography>
          {DateTime.now().toLocaleString(DateTime.DATE_MED, { locale: "en" })}
        </Typography>
        <NotificationBadge badgeContent={1} color="error">
          <NotificationsIcon color="action" />
        </NotificationBadge>
      </NotificationsContainer>
    </HeaderWrapper>
  );
};

export default Header;
