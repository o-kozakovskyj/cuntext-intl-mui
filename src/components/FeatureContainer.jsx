import { useIntl } from "react-intl";
import { Box, Typography } from "@mui/material";

export default function FeatureContainer() {
  const intl = useIntl();

  const currentDate = new Date();
  const itemCount = 1;

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        {intl.formatMessage({ id: "title" })}
      </Typography>

      <Typography>
        {intl.formatMessage({ id: "welcome" }, { name: "Bob" })}
      </Typography>

      <Typography>
        {intl.formatMessage({ id: "items" }, { count: itemCount })}
      </Typography>

      <Typography>
        {intl.formatMessage({ id: "price" })}:{" "}
        {intl.formatNumber(49.99, {
          style: "currency",
          currency: "USD",
        })}
      </Typography>

      <Typography>
        {intl.formatMessage({ id: "date" })}:{" "}
        {intl.formatDate(currentDate)}
      </Typography>

      <Typography>
        {intl.formatMessage({ id: "time" })}:{" "}
        {intl.formatTime(currentDate)}
      </Typography>

    </Box>
  );
}
