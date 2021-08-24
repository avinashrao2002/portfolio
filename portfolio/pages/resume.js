import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import cardStyles from "../styles/experience.module.css";
import Head from "next/head";
import Image from "next/image";

export default function resume() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className={styles.container}>
          <Head>
            <title>Avinash Rao's Portfolio - Experience</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.main} style={{ position: "relative" }}>
            <embed
              src="pdfs/Resume_Avinash_Rao.pdf"
              width="800px"
              height="1100px"
            />
          </main>
        </div>
      </div>
    </>
  );
}
