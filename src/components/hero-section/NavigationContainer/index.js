import './styles.css'
const NavigationContainer = () => {
  return (
    <div className="navigation-items-container">
      <ul className="navigation-items">
        <li>
          <div>
            About <div className="hover-underline"></div>{" "}
          </div>
        </li>
        <li>
          <div>
            {" "}
            Careers<div className="hover-underline"></div>
          </div>
        </li>
        <li>
          <div>
            Events<div className="hover-underline"></div>
          </div>
        </li>
        <li>
          <div>
            Products<div className="hover-underline"></div>
          </div>
        </li>
        <li>
          <div>
            Support<div className="hover-underline"></div>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default NavigationContainer;
