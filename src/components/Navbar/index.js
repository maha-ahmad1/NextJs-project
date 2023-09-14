"use client";
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Logo from "../Logo";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import InputAdornment from "@mui/material/InputAdornment";
import Select from "../Dropdown";
import Section from "../Section";

const HeaderToolbar = styled(Toolbar)({
  flexDirection: "column",
  alignItems: "center",
  "@media (min-width: 768px)": {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const SearchForm = styled("form")({
  width: "60%",
  marginTop: "10px",
  textAlign: "center",
  "@media (min-width: 768px)": {
    marginTop: 0,
  },
});

function Header() {
  return (
    <>
      <HeaderToolbar
        sx={{
          borderBottom: 1,
          borderColor: "#d1cbcb",
          marginTop: -10,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Logo />
          <Typography
            component="h1"
            color="inherit"
            align="start"
            noWrap
            sx={{ marginLeft: 2, fontSize: 25, fontWeight: "bold" }}
          >
            K STORE
          </Typography>
        </div>
        <SearchForm>
          <TextField
            align="center"
            id="search-bar"
            className="text"
            variant="outlined"
            placeholder="Search Anything"
            size="small"
            InputProps={{
              sx: { borderRadius: "20px", width: "150%", color: "#554AF0" },
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon style={{ fill: "#554AF0" }} />
                </InputAdornment>
              ),
            }}
          />
        </SearchForm>
        <Select />
      </HeaderToolbar>
      <Section />
    </>
  );
}

export default Header;
