import React, { useState, useRef } from "react";
import { Select, MenuItem, Box } from "@mui/material";

function Dropdown() {
  const [language, setLanguage] = useState("english");
  const [currency, setCurrency] = useState("USD $");
  const languageSelectRef = useRef(null);
  const currencySelectRef = useRef(null);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleLanguageClick = () => {
    languageSelectRef.current.click();
  };

  const handleCurrencyClick = () => {
    currencySelectRef.current.click();
  };

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "row",
        marginLeft:10
      }}
    >
      <div onClick={handleLanguageClick} style={{ cursor: "pointer" }}>
      English
      </div>
      <Select
        ref={languageSelectRef}
        value={language}
        onChange={handleLanguageChange}
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
          getContentAnchorEl: null,
          MenuListProps: {
            onClick: (event) => {
              event.stopPropagation();
            },
          },
        }}
        sx={{
          border: "none !important",
          display: "none",
        }}
      >
        <MenuItem value="english">English</MenuItem>
        <MenuItem value="arabic">Arabic</MenuItem>
      </Select>
      <Box
        sx={{
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderLeftWidth: 1,
          borderStyle: "solid",
          borderColor: "#121212",
          marginX: 2,
        }}
      ></Box>
      <div onClick={handleCurrencyClick} style={{ cursor: "pointer" }}>
      USD $
      </div>
      <Select
        ref={currencySelectRef}
        value={currency}
        onChange={handleCurrencyChange}
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
          getContentAnchorEl: null,
          MenuListProps: {
            onClick: (event) => {
              event.stopPropagation();
            },
          },
        }}
        sx={{
          border: "none !important",
          display: "none",
        }}
      >
        <MenuItem value="USD $">USD $</MenuItem>
        <MenuItem value="lIs">lIs</MenuItem>
      </Select>
    </Box>
  );
}

export default Dropdown;
