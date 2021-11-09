import "./styles.css";

const Overview = () => {
  return (
    <>
      <div className="container overview-container margin-auto">
        <section className="img-section">
          <img src="./assets/image-interactive.jpg" alt="img-interactive" />
          <div className="overview-text">
            <h1 className="main-heading">The Leader In Interactive VR</h1>
            <p>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.{" "}
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Overview;
