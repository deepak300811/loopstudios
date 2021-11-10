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
            <a href="https://www.linkedin.com/in/deepak810kumar/" target="__blank"><i className="fab fa-linkedin"></i></a>      
                  <div className="hover-underline"></div>
                </div>
              </li>
              <li>
                <div>
                <a href="https://www.instagram.com/deepak810k/" target="__blank">        <i className="fab fa-instagram"></i> </a>

                  <div className="hover-underline"></div>
                </div>
              </li>
              <li>
                <div>
                <a href="https://twitter.com/deekumar810" target="__blank">     <i className="fab fa-twitter"></i> </a>

                  <div className="hover-underline"></div>
                </div>
              </li>
              <li>
                <div>
                <a href="https://www.facebook.com/deekumar810" target="__blank">     <i className="fab fa-facebook-square"></i> </a>
                  <div className="hover-underline"></div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <p className="copyright">@ Deepak Kumar (deepak300811@gmail.com)</p>{" "}
          </div>
        </section>
      </footer>
    </div>
  </>
);
export default Footer;
