import styles from "./page.module.css";
import { Button, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Layout from "../components/Layout";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <Navbar/>
        <div>
          <Slider />
          <Categories />
        </div>
        <div>
          <Layout />
        </div>
      </main>
    </div>
  );
}
