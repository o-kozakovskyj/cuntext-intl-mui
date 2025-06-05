import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Select,
  MenuItem,
  FormControl,
  Avatar,
} from "@mui/material";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useIntl } from "react-intl";
import { useCustomTheme } from "../context/ThemeContext";
import { Link } from "react-router";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const languages = [
  { code: "en", flag: "/flags/gb.png" },
  { code: "uk", flag: "/flags/ua.png" },
];

export default function Header() {
  const params = useParams()
  const { locale } = params;
const {setLocale} = useContext(LanguageContext)
  const intl = useIntl();
  const { toggleTheme } = useCustomTheme();
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleLanguageChange = (event) => {
    const newLocale = event.target.value;
    const newPath = location.pathname.replace(`/${locale}`, `/${newLocale}`);
    navigate(newPath);
    setLocale(event.target.value);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: "flex", gap: 4, flexGrow: 1 }}>
          <Button color="inherit" component={Link} to={`/${locale}/`}>
            {intl.formatMessage({ id: "homeNav" })}
          </Button>

          <Button to={`/${locale}/about`} component={Link} color="inherit">
            {intl.formatMessage({ id: "aboutNav" })}
          </Button>

          <Button to={`/${locale}/feature`} component={Link} color="inherit">
            {intl.formatMessage({ id: "featureNav" })}
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <FormControl variant="standard" sx={{ minWidth: 50 }}>
            <Select
              value={locale}
              onChange={handleLanguageChange}
              disableUnderline
              sx={{
                color: "white",
                "& .MuiSelect-select": {
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                },
                "& .MuiSvgIcon-root": { color: "white" },
              }}
            >
              {languages.map((lang) => (
                <MenuItem key={lang.code} value={lang.code}>
                  <Avatar
                    src={lang.flag}
                    sx={{ width: 18, height: 18 }}
                    variant="square"
                    
                  />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button color="inherit" onClick={toggleTheme}>
            {intl.formatMessage({ id: "themeToggle" })}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
