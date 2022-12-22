import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Navigate, Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

export interface IMainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<IMainLayoutProps> = () => {
  return (
    <Grid container minHeight="100vh">
      <Grid xs={12} lg={2}>
        <Navigation />
      </Grid>
      <Grid xs={12} lg={10}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default MainLayout;
