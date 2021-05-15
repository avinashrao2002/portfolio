import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
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
        <main className={styles.main}>
          <div className={styles.me}>
            <Image
              src="/images/profile.jpg"
              className={styles.me + " " + styles.pfp}
              width={200}
              height={190}
              style={{ position: "absolute" }}
            ></Image>
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
                Hey, I'm Avinash! I'm an EECS student at U.C. Berkeley who went
                to josh hugs class and also he streamed on twitch
                (twitch.tv/joshhug)
              </code>
            </p>
          </div>
          <div class="social-buttons">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/avinash-rao-4549a118a/"
              class="social-buttons__button social-button social-button--linkedin"
              aria-label="LinkedIn"
            >
              <span class="social-button__inner">
                <i class="fab fa-linkedin-in"></i>
              </span>
            </a>

            <a
              target="_blank"
              href="https://github.com/avinashrao2002"
              class="social-buttons__button social-button social-button--github"
              aria-label="GitHub"
            >
              <span class="social-button__inner">
                <i class="fab fa-github"></i>
              </span>
            </a>
            <a
              target="_blank"
              href="mailto:avinashrao2002@gmail.com"
              class="social-buttons__button social-button social-button--codepen"
              aria-label="Email"
            >
              <span class="social-button__inner">
                <i class="fas fa-envelope"></i>
              </span>
            </a>
          </div>
        </main>

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
