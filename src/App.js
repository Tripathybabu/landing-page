import "./App.css";
import image from "./Image/Screenshot 2023-11-20 155941.png";
import image2 from "./Image/Screenshot 2023-11-20 160033.png";
import image3 from "./Image/Screenshot 2023-11-20 160058.png";
import image4 from "./Image/Screenshot 2023-11-20 160107.png";
import image5 from "./Image/Screenshot 2023-11-20 160123.png";
import image6 from "./Image/Screenshot 2023-11-20 160150.png";
import image7 from "./Image/Screenshot 2023-11-20 173015.png";
import image8 from "./Image/Screenshot 2023-11-20 182631.png";
import image9 from "./Image/Screenshot 2023-11-20 182649.png";

function App() {
  return (
    <>
      <header className="header">
        <button className="logo">
          <img src={image} alt="modal" />
        </button>

        <i className="bx bx-menu" id="menu-icon"></i>

        <nav className="navbar ">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#project">Blog</a>
          <a href="#contact">Contact</a>
          <a href="/" className="btn">
            Get Started
          </a>
        </nav>
      </header>

      <section className="home" id="home">
        <div className="home-content">
          <h3>
            Blockchain solutions
            <br />
            and <span style={{ fontWeight: "bold" }}>Cryptocurrecy </span>
            <br />
            Investments
          </h3>

          <span id="element"></span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="button">
            <a
              href="/"
              className="btn"
              style={{ margin: "10px", padding: "10px" }}
            >
              Get Started
            </a>
            <a
              href="/"
              className="btn"
              style={{ margin: "10px", padding: "10px" }}
            >
              {" "}
              Read More
            </a>
          </div>
        </div>

        <div className="home-img">
          <img src={image2} alt="modal" />
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-content">
          <h6 className="heading">Most Trusted Cryptocurrecy platform</h6>

          <p style={{ justifyContent: "center", textAlign: "center" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore e
          </p>
          <p style={{ justifyContent: "center", textAlign: "center" }}>
            Lorem ipsum dolor sit ncididunt ut labore e
          </p>
          <div className="services-container">
            <div className="services-box">
              <i className="bx bx-code-alt"></i>
              <img src={image3} alt="modal" />
              <h3>Easy Transact</h3>
              <p>
                {" "}
                We specialize in creating responsive and user-friendly websites
                and web applications tailored to your business needs. Our web
                development services include front-end and back-end development
                using the latest technologies.
              </p>
              <a href="hhj" className="btn">
                Read More
              </a>
            </div>

            <div className="services-box">
              <i className="bx bxs-paint"></i>
              <img src={image4} alt="modal" />
              <h3>No Fear To loss</h3>
              <p>
                {" "}
                We offer creative and visually appealing website design services
                that capture your brand's essence. Our designs are crafted to
                engage users and enhance your online presence, ensuring a
                seamless user experience.
              </p>
              <a href="l" className="btn">
                Read More
              </a>
            </div>

            <div className="services-box">
              <i className="bx bx-bar-chart-alt"></i>
              <img src={image5} alt="modal" />
              <h3>Fullproof Security</h3>
              <p>
                Our data science services empower businesses with data-driven
                insights. We use advanced analytics and machine learning to
                extract valuable information from your data, helping you make
                informed decisions and gain a competitive edge.
              </p>
              <a href="kjl" className="btn">
                Read More
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <img
                  src={image2}
                  alt="modal"
                  style={{ width: "40vw", height: "70vh" }}
                />
              </div>
              <div style={{ marginLeft: "20px" }}>
                <span style={{ fontSize: "25px" }}>Welcome To Cryptox</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <div className="button">
                  <a
                    href="/"
                    className="btn"
                    style={{ margin: "10px", padding: "10px" }}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
          <span style={{ fontSize: "25px" }}>Why Choose Us</span>
        </div>
      </section>
      <div style={{ display: "flex", marginLeft: "140px" }}>
        <div style={{ flex: 1 }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore e
          </p>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
          <img
            src={image7}
            alt="modal"
            style={{ width: "50%", height: "auto" }}
          />
        </div>
        <div style={{ flex: 1, marginLeft: "100px" }}>
          <img
            src={image6}
            alt="modal"
            style={{ width: "80%", height: "400px" }}
          />
        </div>
      </div>

      <section className="services" id="services">
        <h2 className="heading">
          <span style={{ fontSize: "28px" }}>Our Services</span>
        </h2>
        <h6 className="heading">What Service We Offer</h6>
        <br />

        <p style={{ justifyContent: "center", textAlign: "center" }}>
          Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt ut
        </p>
        <p style={{ justifyContent: "center", textAlign: "center" }}>
          Lorem ipsum dolor sit ncididunt ut labore e
        </p>
        <br />
        <div className="services-container">
          <div className="services-box">
            <i className="bx bx-code-alt"></i>
            <img src={image3} alt="modal" />
            <h3>Easy Transact</h3>
            <p>
              {" "}
              We specialize in creating responsive and user-friendly websites
              and web applications tailored to your business needs. Our web
              development services include front-end and back-end development
              using the latest technologies.
            </p>
            <a href="hhj" className="btn">
              Read More
            </a>
          </div>

          <div className="services-box">
            <i className="bx bxs-paint"></i>
            <img src={image4} alt="modal" />
            <h3>No Fear To loss</h3>
            <p>
              {" "}
              We offer creative and visually appealing website design services
              that capture your brand's essence. Our designs are crafted to
              engage users and enhance your online presence, ensuring a seamless
              user experience.
            </p>
            <a href="l" className="btn">
              Read More
            </a>
          </div>

          <div className="services-box">
            <i className="bx bx-bar-chart-alt"></i>
            <img src={image5} alt="modal" />
            <h3>Fullproof Security</h3>
            <p>
              Our data science services empower businesses with data-driven
              insights. We use advanced analytics and machine learning to
              extract valuable information from your data, helping you make
              informed decisions and gain a competitive edge.
            </p>
            <a href="kjl" className="btn">
              Read More
            </a>
          </div>

          <div className="services-box">
            <i className="bx bx-code-alt"></i>
            <img src={image3} alt="modal" />
            <h3>Easy Transact</h3>
            <p>
              {" "}
              We specialize in creating responsive and user-friendly websites
              and web applications tailored to your business needs. Our web
              development services include front-end and back-end development
              using the latest technologies.
            </p>
            <a href="hhj" className="btn">
              Read More
            </a>
          </div>

          <div className="services-box">
            <i className="bx bxs-paint"></i>
            <img src={image4} alt="modal" />
            <h3>No Fear To loss</h3>
            <p>
              {" "}
              We offer creative and visually appealing website design services
              that capture your brand's essence. Our designs are crafted to
              engage users and enhance your online presence, ensuring a seamless
              user experience.
            </p>
            <a href="l" className="btn">
              Read More
            </a>
          </div>

          <div className="services-box">
            <i className="bx bx-bar-chart-alt"></i>
            <img src={image5} alt="modal" />
            <h3>Fullproof Security</h3>
            <p>
              Our data science services empower businesses with data-driven
              insights. We use advanced analytics and machine learning to
              extract valuable information from your data, helping you make
              informed decisions and gain a competitive edge.
            </p>
            <a href="kjl" className="btn">
              Read More
            </a>
          </div>
        </div>
        <br />
        <h6 className="heading" style={{ color: "yellow" }}>
          $20 Trillion
        </h6>
        <br />
        <h6 className="heading">
          People From All Around The World Have Purchaased Our Tokens
        </h6>
        <p style={{ justifyContent: "center", textAlign: "center" }}>
          Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt ut
        </p>
        <p style={{ justifyContent: "center", textAlign: "center" }}>
          Lorem ipsum dolor sit ncididunt ut labore e
        </p>
        <br />
      </section>

      <div id="contact" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
  <img src={image8} alt="modal" />
</div>
<br />
<div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
  <img src={image9} alt="modal" />
</div>

      <footer className="footer">
        <p>&copy; 2023 Tripathybabu. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
