import React from "react";
import { Container, Grid, CssBaseline } from "@mui/material";
import Image from "next/image";

export default function Layout() {
  return (
    <Container>
      <CssBaseline />
      <Grid container spacing={2} style={{ marginTop: 60 }}>
        <Grid item xs={12} sm={6}>
          <div style={{ width: "100%", overflow: "hidden" }}>
            <Image
              src="/assets/img/section.svg"
              alt="Long Image"
              layout="responsive"
              width={800}
              height={1200}
            />
          </div>
        </Grid>

        <Grid item xs={12} sm={6}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <img
              src="/assets/img/section2.svg"
              alt="Image 1"
              style={{ width: "100%", height: "50%" }}
            />
            <img
              src="/assets/img/section3.svg"
              alt="Image 2"
              style={{ width: "100%", height: "50%" }}
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
