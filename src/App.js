import "./App.css";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

function App() {
  return (
    <div>
      <header id="header">
        <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              Navbar
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Solutions
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="header-container">
          <div className="header-content">
            <h1>
              The Next <br></br>
              <span>Generation</span> <br></br>Payment Method.
            </h1>
            <p>
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </div>
          <div className="header-img">
            <img src="/robot.png" alt="robot" />
          </div>
        </div>
      </header>
      <section id="stats">
        <ul>
          <li>
            3800+ <span>User Active</span>
          </li>
          <li>
            230+ <span>Trusted By Companies</span>
          </li>{" "}
          <li>
            $230M+ <span>Transaction</span>
          </li>
        </ul>
      </section>
      <section id="money">
        <div className="money-container">
          <div className="money-content">
            <h1>You do the business, we’ll handle the money.</h1>
            <p>
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money. But with
              hundreds of credit cards on the market.
            </p>
            <button>Get Started</button>
          </div>
          <div className="money-cards">
            <div className="money-card">
              <img src="/star.png" alt="star" width={50} />
              <h1>Rewards</h1>
              <p>
                The best credit cards offer some tantalizing combinations of
                promotions and prizes
              </p>
            </div>
            <div className="money-card">
              <img src="/shield.png" alt="shield" width={50} />
              <h1>100% Secured</h1>
              <p>
                We take proactive steps make sure your information and
                transactions are secure.
              </p>
            </div>
            <div className="money-card">
              <img src="/send.png" alt="send" width={50} />
              <h1>Balance Transfer</h1>
              <p>
                A balance transfer credit card can save you a lot of money in
                interest charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="checkout">
        <div className="checkout-container">
          <div className="checkout-paypal">
            <img src="/paypal.png" alt="png" />
          </div>
          <div className="paypal-content">
            <h1>Easily control your billing & invoicing.</h1>
            <p>
              Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
              aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
              placerat.
            </p>
          </div>
          <div className="deal-content">
            <h1>Find a better card deal in few easy steps.</h1>
            <p>
              Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
              aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>
            <button>Get Started</button>
          </div>
          <div className="deal-img">
            <img src="/deal.png" alt="png" width={500} />
          </div>
        </div>
      </section>
      <section id="about">
        <div className="about-heading">
          <h1>What people are saying about us</h1>
          <p>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className="about-cards">
          <div className="about-card">
            <img src="/slash.png" alt="slash" className="slash" />
            <p>
              Money is only a tool. It will take you wherever you wish, but it
              will not replace you as the driver.
            </p>
            <img src="/profile.png" alt="profile" className="profile" />
          </div>{" "}
          <div className="about-card">
            <img src="/slash.png" alt="slash" className="slash" />
            <p>
              Money makes your life easier. If you're lucky to have it, you're
              lucky.
            </p>
            <img src="/profile.png" alt="profile" className="profile" />
          </div>{" "}
          <div className="about-card">
            <img src="/slash.png" alt="slash" className="slash" />
            <p>
              It is usually people in the money business, finance, and
              international trade that are really rich.
            </p>
            <img src="/profile.png" alt="profile" className="profile" />
          </div>
        </div>
        <ul>
          <li>
            <img src="/airbnb.png" alt="airbnb" width={200} />
          </li>
          <li>
            <img src="/binance.png" alt="binance" width={200} />
          </li>{" "}
          <li>
            <img src="/coinbase.png" alt="coinbase" width={200} />
          </li>
          <li>
            <img src="/dropbox.png" alt="dropbox" width={200} />
          </li>
        </ul>
      </section>

      <footer>
        <div className="footer-flex">
          <div className="flex">
            {" "}
            <h1>Let’s try our service now!</h1>
            <p>
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
            <button>Get Started</button>
          </div>
        </div>
        <div className="footer-container">
          <div className="social">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
          </div>
          <ul>
            <li>
              <a href="#header">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#prices">Pricing</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
          <h1>Copyright @ 2022 Salman Haider</h1>
        </div>
      </footer>
    </div>
  );
}

export default App;
