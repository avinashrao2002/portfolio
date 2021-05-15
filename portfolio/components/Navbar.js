import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <div
        style={{
          width: "100%",
          position: "fixed",
          zIndex: 99,
        }}
      >
        <header className="header">
          <h1 className="logo">
            <Link href="/">
              <a>Avinash Rao</a>
            </Link>
          </h1>
          <ul className="main-nav">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <Link href="/resume">
                <a>Resume</a>
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
}
