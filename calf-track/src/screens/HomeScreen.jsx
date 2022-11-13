import React from 'react';
import NavBar from '../components/NavBar';

export default function HomeScreen() {
  return (
    <div>
      <NavBar />
      <section id="home">
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-offset-3 col-md-6 col-sm-12">
              <div class="home-info">
                <h3>Rastreo al instante</h3>
                <h1>CONOCE TU GANADO</h1>
                <form action="" method="get" class="online-form">
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="CODIGO"
                    required=""
                  />
                  <button type="submit" class="form-control">
                    BUSCAR
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="feature" data-stellar-background-ratio="0.5">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <div class="section-title">
                <h1>What you get</h1>
              </div>
            </div>

            <div class="col-md-6 col-sm-6">
              <ul class="nav nav-tabs" role="tablist">
                <li class="active">
                  <a
                    href="#tab01"
                    aria-controls="tab01"
                    role="tab"
                    data-toggle="tab"
                  >
                    Responsive
                  </a>
                </li>

                <li>
                  <a
                    href="#tab02"
                    aria-controls="tab02"
                    role="tab"
                    data-toggle="tab"
                  >
                    Mobile
                  </a>
                </li>

                <li>
                  <a
                    href="#tab03"
                    aria-controls="tab03"
                    role="tab"
                    data-toggle="tab"
                  >
                    Support
                  </a>
                </li>
              </ul>

              <div class="tab-content">
                <div class="tab-pane active" id="tab01" role="tabpanel">
                  <div class="tab-pane-item">
                    <h2>Minimal Design</h2>
                    <p>
                      Nam feugiat a ante sollicitudin luctus. Quisque eget
                      placerat massa. Ut quis ligula ornare, pellentesque velit
                      eget, vestibulum est. Donec pretium tristique elit eget
                      sodales. Pellentesque posuere.
                    </p>
                  </div>
                  <div class="tab-pane-item">
                    <h2>Easy to use</h2>
                    <p>
                      Aliquam massa massa, consectetur non mattis fringilla,
                      sodales ac turpis. Morbi ac felis sagittis, faucibus
                      mauris vitae, placerat mauris.
                    </p>
                  </div>
                </div>

                <div class="tab-pane" id="tab02" role="tabpanel">
                  <div class="tab-pane-item">
                    <h2>Compatible Browsers</h2>
                    <p>
                      Nam maximus elit a metus luctus, a faucibus magna mattis.
                      Ut malesuada viverra iaculis. Nunc euismod sit amet neque
                      a tincidunt.
                    </p>
                  </div>
                  <div class="tab-pane-item">
                    <h2>User Friendly</h2>
                    <p>
                      Maecenas maximus velit lorem, quis pharetra turpis
                      fringilla id. Vestibulum tempor facilisis efficitur. Sed
                      nec nisi sit amet nibh pellentesque elementum.
                    </p>
                  </div>
                  <div class="tab-pane-item">
                    <h2>HTML5 & CSS3</h2>
                    <p>
                      In viverra ipsum ornare sapien rhoncus ullamcorper.
                      Vivamus vitae risus ac mi vehicula sagittis. Nulla dictum
                      magna sit amet pharetra aliquam.
                    </p>
                  </div>
                </div>

                <div class="tab-pane" id="tab03" role="tabpanel">
                  <div class="tab-pane-item">
                    <h2>Quick Support</h2>
                    <p>
                      Mauris rutrum est at fringilla pulvinar. Nam ligula urna,
                      lobortis non scelerisque vel, molestie eu massa. Nullam
                      mattis elit at tortor accumsan.
                    </p>
                  </div>
                  <div class="tab-pane-item">
                    <h2>Managed Stuffs</h2>
                    <p>
                      Quisque ullamcorper sem quis sapien cursus efficitur. Sed
                      id sodales ipsum. Morbi eleifend tempus erat sit amet
                      vehicula. Nulla at posuere tellus, non mattis erat. Nulla
                      id massa gravida.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-sm-6">
              <div class="feature-image">
                <img
                  src="images/feature-mockup.png"
                  class="img-responsive"
                  alt="Thin Laptop"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" data-stellar-background-ratio="0.5">
        <div class="container">
          <div class="row">
            <div class="col-md-offset-1 col-md-10 col-sm-12">
              <form id="contact-form" role="form" action="" method="post">
                <div class="section-title">
                  <h1>Say hello to us</h1>
                </div>

                <div class="col-md-4 col-sm-4">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Full name"
                    name="name"
                    required=""
                  />
                </div>
                <div class="col-md-4 col-sm-4">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email address"
                    name="email"
                    required=""
                  />
                </div>
                <div class="col-md-4 col-sm-4">
                  <input
                    type="submit"
                    class="form-control"
                    name="send message"
                    value="Send Message"
                  />
                </div>
                <div class="col-md-12 col-sm-12">
                  <textarea
                    class="form-control"
                    rows="8"
                    placeholder="Your message"
                    name="message"
                    required=""
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" data-stellar-background-ratio="0.5">
        <div class="container">
          <div class="row">
            <div class="copyright-text col-md-12 col-sm-12">
              <div class="col-md-6 col-sm-6">
                <p>
                  Copyright &copy; 2018 Company Name - Design:
                  <a rel="nofollow" href="http://tooplate.com">
                    Tooplate
                  </a>
                </p>
              </div>

              <div class="col-md-6 col-sm-6">
                <ul class="social-icon">
                  <li>
                    <a
                      href="#"
                      class="fa fa-facebook-square"
                      attr="facebook icon"
                    ></a>
                  </li>
                  <li>
                    <a href="#" class="fa fa-twitter"></a>
                  </li>
                  <li>
                    <a href="#" class="fa fa-instagram"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
