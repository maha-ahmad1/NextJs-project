import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import { styled } from "@mui/system";
import Image from "next/image";
const sections = ["Home", "Products", "Categories", "Offers", "Contact Us"];

const SectionsStyle = styled(Toolbar)({
  marginTop: 10,
  display: "flex",
  justifyContent: "space-between",
});

const IconStyle = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

export default function Section() {
  return (
    <SectionsStyle>
      <div style={{ padding: "0 0 0 40px" }}> 
        {sections?.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={"#"}
            sx={{
              p: 3,
              flexShrink: 0,
              color: "gray",
              textDecoration: "none",
              fontSize: 16,
            }}
          >
            {section}
          </Link>
        ))}
      </div>
      <IconStyle style={{ padding: "0 50px" }}>
      <div style={{ padding: "0 20px" }}>
          <Image
            src="/assets/img/icon2.svg"
            alt="icon2"
            height={20}
            width={20}
          />
        </div>
      <div style={{ padding: "0 20px" }}>
          <Image
            src="/assets/img/icon1.svg"
            alt="icon1"
            height={20}
            width={20}
          />
        </div>
        <div style={{ padding: "0 20px" }}>
          <Image
            src="/assets/img/icon3.svg"
            alt="icon3"
            height={20}
            width={20}
          />
        </div>
        <div style={{ padding: "0 20px" }}>
          <Image
            src="/assets/img/icon4.svg"
            alt="icon4"
            height={20}
            width={20}
          />
        </div>
        <div style={{ padding: "0 20px" }}>
          <Image
            src="/assets/img/icon5.svg"
            alt="icon4"
            height={20}
            width={20}
          />
        </div>
      </IconStyle>
    </SectionsStyle>
  );
}
