import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import cardStyles from "../styles/projects.module.css";
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
            <meta name="description" content="Built With Next.js" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.main}>
            <h1 style={{ marginTop: "45vh" }}>Experience</h1>
            <div className={styles.grid} style={{ maxWidth: "200%" }}>
              <div
                className={cardStyles.grid__item}
                style={{ width: "150vh", marginTop: 40 }}
              >
                <div className={cardStyles.card}>
                  <div className={cardStyles.card__content}>
                    <div style={{ paddingTop: "1rem" }}>
                      <img
                        src="/images/calhacks.png"
                        width={50}
                        height={50}
                        style={{ display: "inline", borderRadius: 6 }}
                      ></img>
                      <h1
                        className={cardStyles.card__header + " " + styles.me}
                        style={{
                          display: "inline",
                          marginLeft: 10,
                          fontSize: "1.8rem",
                        }}
                      >
                        Calhacks Cubstart -
                        <p
                          className={styles.code}
                          style={{
                            display: "inline",
                            fontSize: "1.4rem",
                            fontWeight: "lighter",
                          }}
                        >
                          Academic TA/WebDev Mentor
                        </p>
                      </h1>
                    </div>
                    <hr></hr>
                    <p
                      className={cardStyles.card__text}
                      style={{
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
                      }}
                    >
                      React JS/Electron Dev task management app integrated with
                      a firebase backend.
                    </p>
                    <p className={cardStyles.card__text}>
                      <i
                        class="fab fa-js-square fa-2x"
                        style={{ marginRight: 5, color: "Gold" }}
                      ></i>
                      <i
                        class="fab fa-react fa-2x"
                        style={{ marginRight: 5, color: "Dodgerblue" }}
                      ></i>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={cardStyles.grid__item}
                style={{ width: "150vh", marginTop: 40 }}
              >
                <div className={cardStyles.card}>
                  <div className={cardStyles.card__content}>
                    <div style={{ paddingTop: "1rem" }}>
                      <img
                        src="/images/okc.png"
                        width={50}
                        height={50}
                        style={{ display: "inline", borderRadius: 6 }}
                      ></img>
                      <h1
                        className={cardStyles.card__header + " " + styles.me}
                        style={{
                          display: "inline",
                          marginLeft: 10,
                          fontSize: "1.8rem",
                        }}
                      >
                        OKC Data Solutions{" "}
                        <p
                          className={cardStyles.card__text}
                          style={{
                            display: "inline",
                            fontSize: "1.2rem",
                          }}
                        >
                          Software Engineering Intern
                        </p>
                      </h1>
                    </div>
                    <hr></hr>
                    <p
                      className={cardStyles.card__text}
                      style={{
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
                      }}
                    >
                      React JS/Electron Dev task management app integrated with
                      a firebase backend.
                    </p>
                    <p className={cardStyles.card__text}>
                      <i
                        class="fab fa-js-square fa-2x"
                        style={{ marginRight: 5, color: "Gold" }}
                      ></i>
                      <i
                        class="fab fa-react fa-2x"
                        style={{ marginRight: 5, color: "Dodgerblue" }}
                      ></i>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={cardStyles.grid__item}
                style={{ width: "150vh", marginTop: 40 }}
              >
                <div className={cardStyles.card}>
                  <div className={cardStyles.card__content}>
                    <div style={{ paddingTop: "1rem" }}>
                      <img
                        src="/images/skydeck.png"
                        width={50}
                        height={50}
                        style={{ display: "inline", borderRadius: 6 }}
                      ></img>
                      <h1
                        className={cardStyles.card__header + " " + styles.me}
                        style={{
                          display: "inline",
                          marginLeft: 10,
                          fontSize: "1.8rem",
                        }}
                      >
                        Berkeley SkyDeck
                      </h1>
                    </div>
                    <hr></hr>
                    <p
                      className={cardStyles.card__text}
                      style={{
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
                      }}
                    >
                      React JS/Electron Dev task management app integrated with
                      a firebase backend.
                    </p>
                    <p className={cardStyles.card__text}>
                      <i
                        class="fab fa-js-square fa-2x"
                        style={{ marginRight: 5, color: "Gold" }}
                      ></i>
                      <i
                        class="fab fa-react fa-2x"
                        style={{ marginRight: 5, color: "Dodgerblue" }}
                      ></i>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={cardStyles.grid__item}
                style={{ width: "150vh", marginTop: 40 }}
              >
                <div className={cardStyles.card}>
                  <div className={cardStyles.card__content}>
                    <div style={{ paddingTop: "1rem" }}>
                      <img
                        src="/images/skydeck.png"
                        width={50}
                        height={50}
                        style={{ display: "inline", borderRadius: 6 }}
                      ></img>
                      <h1
                        className={cardStyles.card__header + " " + styles.me}
                        style={{
                          display: "inline",
                          marginLeft: 10,
                          fontSize: "1.8rem",
                        }}
                      >
                        Berkeley SkyDeck
                      </h1>
                    </div>
                    <hr></hr>
                    <p
                      className={cardStyles.card__text}
                      style={{
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
                      }}
                    >
                      React JS/Electron Dev task management app integrated with
                      a firebase backend.
                    </p>
                    <p className={cardStyles.card__text}>
                      <i
                        class="fab fa-js-square fa-2x"
                        style={{ marginRight: 5, color: "Gold" }}
                      ></i>
                      <i
                        class="fab fa-react fa-2x"
                        style={{ marginRight: 5, color: "Dodgerblue" }}
                      ></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <footer className={styles.footer} style={{ marginTop: 700 }}>
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
