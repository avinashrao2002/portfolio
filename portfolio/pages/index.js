import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.container}>
        <Head>
          <title>Avinash Rao's Portfolio</title>
          <meta name="description" content="Built With Next.js" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main} style={{ marginTop: 30 }}>
          <div className={styles.me}>
            <img
              src="/images/profile.jpg"
              className={styles.me + " " + styles.pfp}
              width={200}
              height={190}
              style={{
                boxShadow:
                  "0px 5px 50px 0px DodgerBlue, 0px 0px 0px 7px DodgerBlue;",
              }}
            ></img>
            <h1
              style={{ marginLeft: 80, marginTop: 40 }}
              className={styles.title + " " + styles.me}
            >
              Avinash Rao
            </h1>
          </div>
          <div style={{ maxWidth: "54%" }}>
            <p className={styles.description}>
              <code className={styles.code}>
                Hey, I'm Avinash! I'm an EECS student at U.C. Berkeley who's
                interested in Web Development, Backend/Database Engineering, and
                Machine Learning. Check out some of my{" "}
                <Link href="/projects">
                  <a>Projects</a>
                </Link>
              </code>
            </p>
          </div>
          <div className="social-buttons">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/avinash-rao-4549a118a/"
              className="social-buttons__button social-button social-button--linkedin"
              aria-label="LinkedIn"
            >
              <span className="social-button__inner">
                <i className="fab fa-linkedin-in"></i>
              </span>
            </a>

            <a
              target="_blank"
              href="https://github.com/avinashrao2002"
              className="social-buttons__button social-button social-button--github"
              aria-label="GitHub"
            >
              <span className="social-button__inner">
                <i className="fab fa-github"></i>
              </span>
            </a>
            <a
              target="_blank"
              href="mailto:avinashrao2002@gmail.com"
              className="social-buttons__button social-button social-button--codepen"
              aria-label="Email"
            >
              <span className="social-button__inner">
                <i className="fas fa-envelope"></i>
              </span>
            </a>
          </div>
        </main>

        <footer className={styles.footer} style={{ marginTop: "30vh" }}>
          <a
            href="https://github.com/avinashrao2002/portfolio"
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
