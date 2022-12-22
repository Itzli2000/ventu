import { Box } from "@mui/system";
import logo from "../../assets/logo.png";

const Navigation = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <img src={logo} />
    </Box>
  );
};

export default Navigation;
