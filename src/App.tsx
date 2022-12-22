import { createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/system";
import { useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Dashboard from "./views/Dashboard/Dashboard";
import Receivables from "./views/Receivables/Receivables";

const App = () => {
  const theme = useMemo(() => createTheme({}), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/receivables" element={<Receivables />} />
          <Route path="*" element={<Dashboard />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
