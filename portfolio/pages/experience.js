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
          <main
            className={styles.main}
            style={{ position: "relative", marginTop: "60vh" }}
          >
            <h1 style={{ marginBottom: 0 }}>Experience</h1>
            <div className={styles.grid} style={{ maxWidth: "200%" }}>
              <div
                className={cardStyles.grid__item}
                style={{ width: "150vh", marginTop: 40 }}
              >
                <div className={cardStyles.card}>
                  <div className={cardStyles.card__content}>
                    <div style={{ paddingTop: ".5rem" }}>
                      <img
                        src="/images/thunderLogo.png"
                        width={50}
                        height={50}
                        style={{ display: "inline", borderRadius: 6 }}
                      ></img>
                      <h1
                        className={cardStyles.card__header + " " + styles.me}
                        style={{
                          display: "inline-block",
                          marginLeft: 20,
                          marginBottom: 3,
                          fontSize: "1.8rem",
                          verticalAlign: "top",
                          marginTop: 0,
                        }}
                      >
                        OKC Thunder Data Solutions<br></br>
                        <p
                          className={cardStyles.card__header + " " + styles.me}
                          style={{
                            marginLeft: 1,
                            marginTop: 0,
                            marginBottom: 0,
                            fontSize: "1.2rem",
                            fontWeight: "normal",
                          }}
                        >
                          Software Engineering Intern
                        </p>
                      </h1>
                    </div>
                    <hr style={{ marginTop: 0 }}></hr>

                    <p
                      className={cardStyles.card__text}
                      style={{
                        marginBottom: 0,
                        fontWeight: "lighter",
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
                      }}
                    >
                      6/2021 - Present
                    </p>
                    <li
                      className={cardStyles.card__text}
                      style={{
                        marginBottom: 0,
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
                      }}
                    >
                      Incoming Software Engineering Intern
                    </li>
                    <p className={cardStyles.card__text}>
                      <i
                        class="fab fa-python fa-2x"
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
                    <div style={{ paddingTop: ".5rem" }}>
                      <img
                        src="/images/skydeck.png"
                        width={50}
                        height={50}
                        style={{ display: "inline", borderRadius: 6 }}
                      ></img>
                      <h1
                        className={cardStyles.card__header + " " + styles.me}
                        style={{
                          display: "inline-block",
                          marginLeft: 20,
                          marginBottom: 3,
                          fontSize: "1.8rem",
                          verticalAlign: "top",
                          marginTop: 0,
                        }}
                      >
                        Berkeley SkyDeck - The Apptivist (Dormtalk)<br></br>
                        <p
                          className={cardStyles.card__header + " " + styles.me}
                          style={{
                            marginLeft: 1,
                            marginTop: 0,
                            marginBottom: 0,
                            fontSize: "1.2rem",
                            fontWeight: "normal",
                          }}
                        >
                          Software Engineer & Co-Founder
                        </p>
                      </h1>
                    </div>
                    <hr style={{ marginTop: 0 }}></hr>
                    <p
                      className={cardStyles.card__text}
                      style={{
                        marginBottom: 0,
                        fontWeight: "lighter",
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
                      }}
                    >
                      8/2020 - 4/2021
                    </p>
                    <li
                      className={cardStyles.card__text}
                      style={{
                        marginBottom: 0,
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
                      }}
                    >
                      Developing and scaling a social networking application for
                      U.C. Berkeley students with React JS, Bootstrap, and
                      Firebase in an Agile environment
                    </li>
                    <li
                      className={cardStyles.card__text}
                      style={{
                        marginBottom: 0,
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
                      }}
                    >
                      Selected to the prestigious Berkeley SkyDeck Hotdesk
                      program (top 5% of startups)
                    </li>
                    <li
                      className={cardStyles.card__text}
                      style={{
                        marginBottom: 0,
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
                      }}
                    >
                      Improved web app backend performance by 80% and deployed a
                      beta version
                    </li>
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
                    <div style={{ paddingTop: ".5rem" }}>
                      <img
                        src="/images/calhacks.png"
                        width={50}
                        height={50}
                        style={{ display: "inline", borderRadius: 6 }}
                      ></img>
                      <h1
                        className={cardStyles.card__header + " " + styles.me}
                        style={{
                          display: "inline-block",
                          marginLeft: 20,
                          marginBottom: 3,
                          fontSize: "1.8rem",
                          verticalAlign: "top",
                          marginTop: 0,
                        }}
                      >
                        Calhacks Cubstart (CS 198-093)<br></br>
                        <p
                          className={cardStyles.card__header + " " + styles.me}
                          style={{
                            marginLeft: 1,
                            marginTop: 0,
                            marginBottom: 0,
                            fontSize: "1.2rem",
                            fontWeight: "normal",
                          }}
                        >
                          Academic TA/Web-Dev Mentor
                        </p>
                      </h1>
                    </div>
                    <hr style={{ marginTop: 0 }}></hr>
                    <p
                      className={cardStyles.card__text}
                      style={{
                        marginBottom: 0,
                        fontWeight: "lighter",
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
                      }}
                    >
                      9/2020 - 4/2021
                    </p>
                    <li
                      className={cardStyles.card__text}
                      style={{
                        marginBottom: 0,
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
                      }}
                    >
                      Hosted weekly office hours and debugged dozens of
                      student-built web apps
                    </li>
                    <li
                      className={cardStyles.card__text}
                      style={{
                        marginBottom: 0,
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
                      }}
                    >
                      Helped students implement APIs, connect Frontend and
                      Backend applications, and resolve other software errors.
                    </li>

                    <p className={cardStyles.card__text}>
                      <i
                        class="fab fa-html5 fa-2x"
                        style={{ marginRight: 5, color: "Salmon" }}
                      ></i>
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
                    <div style={{ paddingTop: ".5rem" }}>
                      <img
                        src="/images/stonyBrook.jpeg"
                        width={50}
                        height={50}
                        style={{ display: "inline", borderRadius: 6 }}
                      ></img>
                      <h1
                        className={cardStyles.card__header + " " + styles.me}
                        style={{
                          display: "inline-block",
                          marginLeft: 20,
                          marginBottom: 3,
                          fontSize: "1.8rem",
                          verticalAlign: "top",
                          marginTop: 0,
                        }}
                      >
                        Stony Brook University<br></br>
                        <p
                          className={cardStyles.card__header + " " + styles.me}
                          style={{
                            marginLeft: 1,
                            marginTop: 0,
                            marginBottom: 0,
                            fontSize: "1.2rem",
                            fontWeight: "normal",
                          }}
                        >
                          Research Intern
                        </p>
                      </h1>
                    </div>
                    <hr style={{ marginTop: 0 }}></hr>
                    <p
                      className={cardStyles.card__text}
                      style={{
                        marginBottom: 0,
                        fontWeight: "lighter",
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
                      }}
                    >
                      6/2019 - 8/2019
                    </p>
                    <li
                      className={cardStyles.card__text}
                      style={{
                        marginBottom: 0,
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
                      }}
                    >
                      Improved and tested circuits and hardware structures for
                      power density, current, and efficiency
                    </li>
                    <li
                      className={cardStyles.card__text}
                      style={{
                        marginBottom: 0,
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
                      }}
                    >
                      Analyzed performance data through Python (Numpy) and used
                      regression/interpolation to make accurate test
                      predictions.
                    </li>
                    <li
                      className={cardStyles.card__text}
                      style={{
                        marginBottom: 0,
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
                      }}
                    >
                      Invited to and published research in the ACS National
                      Convention and APS National Meeting
                    </li>
                    <p className={cardStyles.card__text}>
                      <i
                        class="fab fa-python fa-2x"
                        style={{ marginRight: 5, color: "Dodgerblue" }}
                      ></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <footer className={styles.footer} style={{ marginTop: "70%" }}>
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
