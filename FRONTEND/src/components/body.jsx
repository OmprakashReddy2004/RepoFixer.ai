import React from "react";
import "../CSS/body.css";
import FloatingLines from "./FloatingLines.jsx";
export default function Body() {
  return (
    <>
      <section className="all">
        <h1>
          <div className="main">
            Connect Your
            <br />
            <span className="sub">Git & AI Debugs</span>Like
            <br />
            Humans
          </div>
        </h1>
        <p className="subhead">
          Your AI agents work directly in your Git repo, reading, debugging, and{" "}
          <br />
          fixing code while you focus on what matters
        </p>
      </section>
    </>
  );
}
