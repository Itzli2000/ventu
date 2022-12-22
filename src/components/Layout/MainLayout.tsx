import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

export interface IMainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<IMainLayoutProps> = () => {
  return (
    <Grid container minHeight="100vh">
      <Grid xs={12} md={2} display={{ xs: "none", lg: "block" }}>
        <Navigation />
      </Grid>
      <Grid xs={12} md={10} sx={{ backgroundColor: "#efefef" }}>
        <Header />
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default MainLayout;
