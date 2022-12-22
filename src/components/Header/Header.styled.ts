import styled from "@emotion/styled";
import { Badge, Box } from "@mui/material";

export const NotificationsContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 1rem;
` as typeof Box;

export const NotificationBadge = styled(Badge)`
  span {
    width: 10px;
    height: 10px;
    min-width: unset;
    min-height: unset;
    font-size: 8px;
    padding: 2px;
    transform: translate(20%, -20%);
  }
` as typeof Badge;

const HeaderWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffffff;
` as typeof Box;

export default HeaderWrapper;
