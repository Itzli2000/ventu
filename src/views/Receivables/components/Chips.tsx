import { Chip } from "@mui/material";

export const renderPaymentStatus = (status: number) => {
  if (status === 0)
    return (
      <Chip
        size="small"
        label="Completed"
        sx={{ backgroundColor: "#4DB6AC", color: "#ffffff" }}
      />
    );
  if (status === 1)
    return (
      <Chip
        size="small"
        label="Processing"
        sx={{ backgroundColor: "#FFA412", color: "#ffffff" }}
      />
    );
  return (
    <Chip
      size="small"
      label="Missing"
      sx={{ backgroundColor: "#EF5350", color: "#ffffff" }}
    />
  );
};

export const renderCargoStatus = (status: number) => {
  if (status === 0)
    return (
      <Chip
        size="small"
        label="Delivered"
        sx={{ backgroundColor: "#2B478B", color: "#ffffff" }}
      />
    );
  if (status === 1)
    return (
      <Chip
        size="small"
        label="Processing"
        sx={{ backgroundColor: "#FFA412", color: "#ffffff" }}
      />
    );
  return (
    <Chip
      size="small"
      label="Missing"
      sx={{ backgroundColor: "#EF5350", color: "#ffffff" }}
    />
  );
};
