import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/system";
import Chart from "./components/Chart/Chart";
import ExchangeRate from "./components/ExchangeRate/ExchangeRate";
import { ActionButton, CustomCard, Title } from "./Dashboard.styled";

const Dashboard = () => {
  return (
    <Box py={1} px={2}>
      <Title>Hi, Santiago.</Title>
      <Grid container spacing={2} alignItems="stretch">
        <Grid xs={12} lg={6}>
          <Grid xs={12}>
            <Card sx={{ padding: "1rem" }}>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0 0 0.5rem 0",
                }}
              >
                <Typography>Account Balance</Typography>
                <Button size="small" variant="outlined">
                  Cashout
                </Button>
              </CardContent>
              <CardActions>
                <Typography
                  variant="h4"
                  sx={{ color: "#1A237E", fontWeight: 700 }}
                >
                  $4,250,000
                </Typography>
              </CardActions>
            </Card>
          </Grid>
          <Grid xs={12}>
            <CustomCard sx={{ borderColor: "warning.main" }}>
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                <ActionButton
                  size="large"
                  color="warning"
                  aria-label="newPayment"
                >
                  <CurrencyExchangeIcon />
                </ActionButton>
                <Typography
                  variant="h6"
                  sx={{ color: "#1A237E", fontWeight: 500 }}
                >
                  Make New Payment
                </Typography>
              </CardContent>
            </CustomCard>
          </Grid>
          <Grid xs={12}>
            <CustomCard sx={{ borderColor: "success.main" }}>
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                <ActionButton
                  size="large"
                  color="success"
                  aria-label="newPayment"
                >
                  <RequestQuoteIcon />
                </ActionButton>
                <Typography
                  variant="h6"
                  sx={{ color: "#1A237E", fontWeight: 500 }}
                >
                  Make New Invoice
                </Typography>
              </CardContent>
            </CustomCard>
          </Grid>
          <Grid xs={12}>
            <Chart
              title="my title"
              action={() => console.log("action")}
              color={0}
            />
          </Grid>
        </Grid>
        <Grid xs={12} lg={6}>
          <Grid xs={12}>
            <ExchangeRate />
          </Grid>
          <Grid xs={12}>
            <Chart title="my title" action={() => console.log("action")} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
