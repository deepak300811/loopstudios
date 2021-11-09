import "./styles.css";
import Brand from "../hero-section/Brand";
import NavigationContainer from "../hero-section/NavigationContainer";
const Footer = () => (
  <>
    <div className="footer-container">
      <footer className="container margin-auto">
        <section className="brand-navigation">
          <Brand />
          <div className="footer-navigation">
            <NavigationContainer />
          </div>
        </section>
        <section className="socials-copyright">
          <div>
            <ul className="navigation-items icon" id="nav-socials">
              <li>
                <div>
                  <i className="fab fa-facebook-square "></i>
                  <div className="hover-underline"></div>{" "}
                </div>
              </li>
              <li>
                <div>
                  <i className="fab fa-twitter "></i>

                  <div className="hover-underline"></div>
                </div>
              </li>
              <li>
                <div>
                  <i className="fab fa-pinterest "></i>

                  <div className="hover-underline"></div>
                </div>
              </li>
              <li>
                <div>
                  <i className="fab fa-instagram "></i>
                  <div className="hover-underline"></div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <p className="copyright">
              &copy; 2021 Loopstudios. All rights reserved.{" "}
            </p>{" "}
          </div>
        </section>
      </footer>
    </div>
  </>
);
export default Footer;
