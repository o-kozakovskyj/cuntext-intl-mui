import { useIntl } from "react-intl";
import { Typography } from "@mui/material";

export default function GreetingBox() {
  const intl = useIntl();
  const greeting = intl.formatMessage({ id: "greeting" });

  return <Typography variant="h4">{greeting}</Typography>;
}
