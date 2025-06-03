import { useIntl } from "react-intl";

export default function About() {
  const intl = useIntl();
  return <h1>{intl.formatMessage({ id: "about" })}</h1>;
}
