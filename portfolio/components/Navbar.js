import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div
        style={{
          width: "100%",
          maxWidth: "100%",
          position: "fixed",
          zIndex: 99,
        }}
      >
        <header className="header" style={{ maxWidth: "100%" }}>
          <h1 className="logo">
            <Link href="/">
              <a>Avinash Rao</a>
            </Link>
          </h1>
          <ul className="main-nav">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/experience">
                <a>Experience</a>
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
}
