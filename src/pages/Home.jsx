import { useIntl } from "react-intl";

export default function Home() {
  const intl = useIntl();
  return <h1>{intl.formatMessage({ id: "home" })}</h1>;
}
