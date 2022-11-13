import React from 'react';

export default function NavBar(props) {
  const { types } = props;
  return (
    <section
      class="navbar custom-navbar navbar-fixed-top top-nav-collapse"
      role="navigation"
    >
      <div class="container">
        <div class="navbar-header">
          <button
            class="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span class="icon icon-bar"></span>
            <span class="icon icon-bar"></span>
            <span class="icon icon-bar"></span>
          </button>

          <a href="index.html" class="navbar-brand">
            COW TRACK
          </a>
        </div>

        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li>
              <a href="/" class="smoothScroll">
                Home
              </a>
            </li>
            <li>
              <a href="#feature" class="smoothScroll">
                Features
              </a>
            </li>
            <li>
              <a href="/about" class="smoothScroll">
                About us
              </a>
            </li>
            <li>
              <a href="#pricing" class="smoothScroll">
                Pricing
              </a>
            </li>
            <li>
              <a href="#contact" class="smoothScroll">
                Contact
              </a>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="#">
                Say hello - <span>info@soft.co</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
