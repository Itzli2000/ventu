import {
  Avatar,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { DateTime } from "luxon";
import { useNavigate } from "react-router-dom";
import { colorArray } from "../../constants";
import { invoices } from "../../constants/invoices";
import { currencyFormatter } from "../../utils";
import { renderCargoStatus, renderPaymentStatus } from "./components/Chips";
import { Title } from "./Receivables.styled";

const Receivables = () => {
  const navigate = useNavigate();
  return (
    <Box py={1} px={2} sx={{ backgroundColor: "#fbf5f5" }}>
      <Grid2 container>
        <Grid2
          xs={12}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Title>Receivables</Title>
          <Button variant="contained" onClick={() => navigate("/")}>
            + New Invoice
          </Button>
        </Grid2>
        <Grid2 xs={5} my={2}>
          <TextField
            size="small"
            fullWidth
            label="Search"
            variant="outlined"
            sx={{ backgroundColor: "#ffffff" }}
          />
        </Grid2>
        <Grid2 xs={12}>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Client</TableCell>
                  <TableCell align="center">Payment Status</TableCell>
                  <TableCell align="center">Cargo Status</TableCell>
                  <TableCell align="center">Date</TableCell>
                  <TableCell align="center">Amount</TableCell>
                  <TableCell align="center">Type of Payment</TableCell>
                  <TableCell align="center">Installments Payed</TableCell>
                  <TableCell align="center">Payments Due Date</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{ bgcolor: "#ffffff" }}>
                {invoices.map((row, index) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ textAlign: "center" }}
                    >
                      <Avatar
                        component="span"
                        sx={{
                          margin: "auto",
                          backgroundColor: colorArray[index],
                          width: 24,
                          height: 24,
                          fontSize: "0.8rem",
                        }}
                      >
                        {row.name
                          .split(" ")
                          .map((name) => name[0])
                          .join("")
                          .slice(0, 2)}
                      </Avatar>
                      {row.name}
                    </TableCell>
                    <TableCell align="center">
                      {renderPaymentStatus(row.paymentStatus)}
                    </TableCell>
                    <TableCell align="center">
                      {renderCargoStatus(row.cargoStatus)}
                    </TableCell>
                    <TableCell align="center">
                      {DateTime.fromISO(row.date).toLocaleString(
                        DateTime.DATE_MED,
                        { locale: "en" }
                      )}
                    </TableCell>
                    <TableCell align="center">
                      {currencyFormatter.format(row.amount)}
                    </TableCell>
                    <TableCell align="center">{row.typeOfPayment}</TableCell>
                    <TableCell align="center">
                      {row.installmentsPayed}/10
                    </TableCell>
                    <TableCell align="center">
                      {DateTime.fromISO(row.dueDate).toLocaleString(
                        DateTime.DATE_MED,
                        { locale: "en" }
                      )}
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="text"
                        size="small"
                        onClick={() => navigate("/")}
                      >
                        Authorize credit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Receivables;
