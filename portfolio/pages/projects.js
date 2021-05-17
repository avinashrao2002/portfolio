import React, { Component } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import cardStyles from "../styles/projects.module.css";
import Head from "next/head";
import Image from "next/image";

export default class projects extends Component {
  render() {
    return (
      <>
        <div>
          <Navbar></Navbar>
          <div className={styles.container}>
            <Head>
              <title>Avinash Rao's Portfolio - Projects</title>
              <meta name="description" content="Built With Next.js" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
              <h1>Projects</h1>
              <div className={styles.grid}>
                <div className={cardStyles.grid__item}>
                  <div className={cardStyles.card}>
                    <div className={cardStyles.card__content}>
                      <div style={{ paddingTop: "1rem" }}>
                        <Image
                          src="/images/realelectron.png"
                          width={50}
                          height={50}
                          style={{ display: "inline" }}
                        ></Image>
                        <h1
                          className={cardStyles.card__header + " " + styles.me}
                          style={{
                            display: "inline",
                            marginLeft: 10,
                            fontSize: "1.8rem",
                          }}
                        >
                          Taskme
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
                        React JS/Electron Dev task management app integrated
                        with a firebase backend.
                      </p>
                      <p className={cardStyles.card__text}>
                        <i className="fas fa-upload"></i> Deployed on Netlify
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
                      <a
                        href="https://github.com/avinashrao2002/taskme"
                        target="_blank"
                      >
                        <button className={cardStyles.card__btn}>
                          <i className="fab fa-github"></i> Github{" "}
                          <span>&rarr;</span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className={cardStyles.grid__item}>
                  <div className={cardStyles.card}>
                    <div className={cardStyles.card__content}>
                      <div style={{ paddingTop: "1rem" }}>
                        <Image
                          src="/images/graphql.png"
                          width={50}
                          height={50}
                          style={{ display: "inline" }}
                        ></Image>
                        <h1
                          className={cardStyles.card__header + " " + styles.me}
                          style={{
                            display: "inline",
                            marginLeft: 10,
                            fontSize: "1.8rem",
                          }}
                        >
                          Berkeats
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
                        GraphQL + Express API with Berkeley restaurant data.
                      </p>
                      <p className={cardStyles.card__text}>
                        <i className="fas fa-upload"></i> Deployed on Netlify
                        <br></br>
                        <i class="fas fa-chalkboard-teacher"></i> Presented Live
                        Demo
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
                        <i
                          class="fas fa-database fa-2x"
                          style={{ marginRight: 5, color: "Salmon" }}
                        ></i>
                        <i
                          class="fab fa-node fa-2x"
                          style={{ marginRight: 5 }}
                        ></i>
                      </p>

                      <a
                        href="https://github.com/avinashrao2002/berkeats"
                        target="_blank"
                      >
                        <button className={cardStyles.card__btn}>
                          <i className="fab fa-github"></i> Github{" "}
                          <span>&rarr;</span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className={cardStyles.grid__item}>
                  <div className={cardStyles.card}>
                    <div className={cardStyles.card__content}>
                      <div style={{ paddingTop: "1rem" }}>
                        <Image
                          src="/images/hyper.png"
                          width={50}
                          height={50}
                          style={{ display: "inline" }}
                        ></Image>
                        <h1
                          className={cardStyles.card__header + " " + styles.me}
                          style={{
                            display: "inline",
                            marginLeft: 10,
                            fontSize: "1.8rem",
                          }}
                        >
                          Gitlet
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
                        Git-esque Version Control System, built purely with
                        Java.
                      </p>
                      <p className={cardStyles.card__text}>
                        <i
                          class="fab fa-java fa-2x"
                          style={{ color: "LightSalmon" }}
                        ></i>
                      </p>

                      <a href="https://youtu.be/lDR74pAXIG4" target="_blank">
                        <button
                          className={cardStyles.card__btn}
                          style={{ marginBottom: 10 }}
                        >
                          <i class="fab fa-youtube"></i> Demo{" "}
                          <span>&rarr;</span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={cardStyles.grid__item}>
                  <div className={cardStyles.card}>
                    <div className={cardStyles.card__content}>
                      <div style={{ paddingTop: "1rem" }}>
                        <Image
                          src="/images/Apptivist.png"
                          width={50}
                          height={50}
                          style={{ display: "inline" }}
                        ></Image>
                        <h1
                          className={cardStyles.card__header + " " + styles.me}
                          style={{
                            display: "inline",
                            marginLeft: 10,
                            fontSize: "1.8rem",
                          }}
                        >
                          The Apptivist (Dormtalk)
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
                        The Apptivist is multi-platform social media startup
                        that connects activists with a community of small
                        businesses, non-profit organizations, and other
                        like-minded individuals.
                      </p>
                      <p className={cardStyles.card__text}>
                        <i className="fas fa-upload"></i> Deployed on Netlify
                        <br></br>
                        <i class="fas fa-trophy"></i> Accepted to Berkeley
                        SkyDeck Incubator
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
                      <a
                        href="https://github.com/avinashrao2002/Apptivist"
                        target="_blank"
                      >
                        <button className={cardStyles.card__btn}>
                          <i className="fab fa-github"></i> Github{" "}
                          <span>&rarr;</span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
          <footer className={styles.footer} style={{ marginTop: 400 }}>
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
}
