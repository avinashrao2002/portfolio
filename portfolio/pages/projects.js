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
              <h1 style={{ marginTop: "50%" }}>Projects</h1>
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
                          marginBottom: 0,
                          fontFamily:
                            "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
                        }}
                      >
                        Taskme is a productivity app that aids users with task
                        management and event planning. I built the frontend with
                        React JS and implemented a Google Firebase database to
                        store user information and make the app responsive in
                        real-time. Additionally, I deployed Taskme on Netlify
                        and used Electron to convert it into a desktop app that
                        syncs account data across multiple platforms.
                      </p>
                      <p
                        className={cardStyles.card__text}
                        style={{ marginBottom: 0 }}
                      >
                        <i className="fas fa-upload"></i> Deployed
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
                          marginBottom: 0,
                          fontFamily:
                            "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
                        }}
                      >
                        Berkeats is a restaurant search API for the city of
                        Berkeley. I used Node.js, Express and GraphQL to build a
                        no-REST backend and integrated a MongoDB database
                        through the Mongoose ORM. On the frontend, I used
                        React.js and ApolloClient to make restaurant data update
                        in real-time with relation to the query in the search
                        bar.
                      </p>
                      <p
                        className={cardStyles.card__text}
                        style={{ marginBottom: 0 }}
                      >
                        <i className="fas fa-upload"></i> Deployed
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
                          marginBottom: 0,
                          fontFamily:
                            "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
                        }}
                      >
                        Gitlet is a Git-esque version control system developed
                        purely with Java. I built this project for my Data
                        Structures & Algorithms course with little starter code.
                        It works exactly like git, and has functionality for the
                        commands init, add, rm, commit, log, branch, reset,
                        merge, and several other commands. It also has several
                        unique commands like "find" which searches for and
                        returns the first commit with the same message.
                        Additionally, I wrote and implemented a breadth-first
                        search algorithm for optimized performance.
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
                          marginBottom: 0,
                          fontFamily:
                            "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
                        }}
                      >
                        The Apptivist is multi-platform social media startup
                        that connects activists and small businesses. I
                        primarily worked on the web app and developed the
                        frontend with React & Bootstrap. I also integrated a
                        No-SQL Firebase database to store user/event
                        information. Additionally, I implemented several APIs,
                        including Algolia full-text search. The project was
                        accepted to the selective Berkeley SkyDeck startup
                        incubator under the HotDesk program (Top 5%).
                      </p>
                      <p
                        className={cardStyles.card__text}
                        style={{ marginBottom: 0 }}
                      >
                        <i className="fas fa-upload"></i> Deployed
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
          <footer className={styles.footer} style={{ marginTop: "45%" }}>
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
