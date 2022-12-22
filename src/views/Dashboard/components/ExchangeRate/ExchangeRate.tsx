import { Box, IconButton, Paper, TextField, Typography } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import { useEffect, useState } from "react";
import { dollarValue } from "../../../../constants";
import SwapVertIcon from "@mui/icons-material/SwapVert";

const ExchangeRate = () => {
  const [convertCurrency, setConvertCurrency] = useState(3);
  const [mxp, setMxp] = useState(convertCurrency * dollarValue);

  useEffect(() => {
    setMxp(convertCurrency * dollarValue);
  }, [convertCurrency]);

  return (
    <Paper sx={{ padding: "2.5rem 2rem" }}>
      <Typography mb={2}>Exchange Rate</Typography>
      <Grid container xs spacing={2}>
        <Grid xs={10}>
          <TextField
            id="convertCurrency"
            label="Convert"
            variant="outlined"
            size="small"
            fullWidth
            onChange={(e) =>
              setConvertCurrency(parseFloat(e.target.value) || 0)
            }
            helperText={
              convertCurrency
                ? `${convertCurrency.toFixed(2)} US Dollars`
                : "Enter an amount to convert"
            }
            defaultValue={convertCurrency}
          />
          <Box
            mt={3}
            sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <TextField
              id="USDValue"
              label="USD - US Dollar"
              variant="outlined"
              size="small"
              fullWidth
              value={convertCurrency}
            />
            <TextField
              id="MXPValue"
              label="MXP - Mexican Peso"
              variant="outlined"
              size="small"
              fullWidth
              value={mxp.toFixed(2)}
            />
            <div>
              {convertCurrency ? (
                <Typography
                  variant="h5"
                  sx={{ color: "#1A237E", fontWeight: 400 }}
                  mb={1}
                >
                  {`${convertCurrency.toFixed(2)} USD = `}
                  <Typography
                    component="span"
                    variant="h5"
                    sx={{ fontWeight: 600 }}
                  >{`${mxp.toFixed(2)} MXN`}</Typography>
                </Typography>
              ) : null}
              <Typography>
                1 USD = {dollarValue.toFixed(2)} MXN{"   "}|{"   "}1 MXN ={" "}
                {(1 / dollarValue).toFixed(4)} USD
              </Typography>
            </div>
          </Box>
        </Grid>
        <Grid
          xs={2}
          sx={{ display: "flex" }}
          justifyContent="center"
          alignItems="center"
        >
          <IconButton sx={{ border: "1px solid #3949AB" }}>
            <SwapVertIcon sx={{ color: "#3949AB" }} />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ExchangeRate;
