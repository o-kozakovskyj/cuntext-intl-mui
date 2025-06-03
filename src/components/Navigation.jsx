
import {
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import { CustomThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext";
import Header from "./Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Feature from "../pages/Feature";

const supportedLocales = ["en", "uk"];

export default function Navigation() {
  const { locale } = useParams();
 
   if (!supportedLocales.includes(locale)) {
     return <Navigate to="/en" replace />;
   }
 
   return (
     <LanguageProvider locale={locale}>
       <CustomThemeProvider>
         <Header />
         <Routes>
           <Route index element={<Home />} />
           <Route path="about" element={<About />} />
           <Route path="feature" element={<Feature />} />
         </Routes>
       </CustomThemeProvider>
     </LanguageProvider>
   );
}