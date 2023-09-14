"use client";
import styles from "./page.module.css";
import { Button, Typography } from "@mui/material";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <Navbar title="My Website" />
        <div>
          <Slider />{" "}
        </div>
      </main>
    </div>
  );
}

// import { useTranslations } from "next-intl";
// import Link from "next-intl/link";
// import AlertMessage from "./AlertMessage";

// export default function Home() {
//   const t = useTranslations("Index");

//   return (
//     <div>
//       <div>
//         <Link href="/" locale="en">
//           In english
//         </Link>{" "}
//         |{" "}
//         <Link href="/" locale="fi">
//           In Finnish
//         </Link>
//         <br />
//         <br />
//       </div>
//       <div>
//         <p>{t("title")}</p>
//         <p>{t("subtitle")}</p>
//       </div>
//       <div>
//         <br />
//         <AlertMessage message={t("alertMessage")} />
//       </div>
//     </div>
//   );
// }
