import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
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
            borderRadius={9999}
          ></Image>
          <h1
            style={{ marginLeft: 80, marginTop: 40 }}
            className={styles.title + " " + styles.me}
          >
            Avinash Rao
          </h1>
        </div>
        <p className={styles.description}>
          <code className={styles.code}>public static</code>
        </p>
        <div class="social-buttons">
          <a
            href="#"
            class="social-buttons__button social-button social-button--facebook"
            aria-label="Facebook"
          >
            <span class="social-button__inner">
              <i class="fab fa-facebook-f"></i>
            </span>
          </a>
          <a
            href="#"
            class="social-buttons__button social-button social-button--linkedin"
            aria-label="LinkedIn"
          >
            <span class="social-button__inner">
              <i class="fab fa-linkedin-in"></i>
            </span>
          </a>
          <a
            href="#"
            class="social-buttons__button social-button social-button--snapchat"
            aria-label="SnapChat"
          >
            <span class="social-button__inner">
              <i class="fab fa-snapchat-ghost"></i>
            </span>
          </a>
          <a
            href="#"
            class="social-buttons__button social-button social-button--github"
            aria-label="GitHub"
          >
            <span class="social-button__inner">
              <i class="fab fa-github"></i>
            </span>
          </a>
          <a
            href="#"
            class="social-buttons__button social-button social-button--codepen"
            aria-label="CodePen"
          >
            <span class="social-button__inner">
              <i class="fab fa-codepen"></i>
            </span>
          </a>
        </div>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
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
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
