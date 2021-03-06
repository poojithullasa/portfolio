import React from "react";
import "../css/Projects.css";

function Projects() {
  return (
    <div style={{ margin: "80px auto 80px auto" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ paddingBottom: "15px" }}>
          <b>
            <i>Have a look at my Projects</i>
          </b>
        </h1>
      </div>
      <div className="flexwrap">
        <div className="project">
          <h3>Front-end for Google Search </h3>
          <hr />
          <p>
            This individual project is to make a Google Search, Advance Search
            and Image Search similiar to the original one by using only html and
            css with functioning of the search bar
          </p>
          <hr />
          <div className="link">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://poojithullasa.github.io/gsearch/"
            >
              Try Demo
            </a>
          </div>
          <div className="link">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/poojithullasa/gsearch"
            >
              Github Repo
            </a>
          </div>
        </div>
        <div className="project">
          <h3>Online Shopping Search Filter </h3>
          <hr />
          <p>
            This individual project is to make a shopping site with search
            funtionality along with group by using only html css and javascript.
          </p>
          <hr />
          <div class="link">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://poojithullasa.github.io/shopping/"
            >
              Try Demo
            </a>
          </div>
          <div class="link">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/poojithullasa/shopping"
            >
              Github Repo
            </a>
          </div>
        </div>
        <div className="project">
          <h3>Portfolio</h3>
          <hr />
          <p>
            This individual project is to make a Portfolio using reactjs.
            Currently you are viewing the live demo of my Portfolio.
          </p>
          <hr />
          <div class="link">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://poojithullasa.github.io/portfolio/"
            >
              Try Demo
            </a>
          </div>
          <div class="link">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/poojithullasa/portfolio"
            >
              Github Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
