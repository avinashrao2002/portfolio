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
            <h1 style={{ marginTop: 0, paddingTop: 0 }}>Resume</h1>
            <embed
              src="pdfs/Resume_Avinash_Rao.pdf"
              width="800px"
              height="1100px"
            />
          </main>
        </div>
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Built by Avinash Rao with Next.js and
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </>
  );
}
