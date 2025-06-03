import { IntlProvider } from "react-intl";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import messages from "./i18n/messages";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import { LanguageContext } from "./context/LanguageContext";
import { CustomThemeProvider } from "./context/ThemeContext";
import Feature from "./pages/Feature";


const supportedLocales = ["en", "uk"];

function InnerApp() {
  const { locale } = useParams();

  if (!supportedLocales.includes(locale)) {
    return <Navigate to="/en" replace />;
  }

  return (
    <LanguageContext.Provider value={{ locale }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <CustomThemeProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="feature" element={<Feature />} />
          </Routes>
        </CustomThemeProvider>
      </IntlProvider>
    </LanguageContext.Provider>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:locale/*" element={<InnerApp />} />
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </Router>
  );
}
