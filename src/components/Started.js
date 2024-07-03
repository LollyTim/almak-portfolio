import TypingAnimation from "./TypingAnimation";

const Started = () => {
  return (
    <div className="section started" id="section-started">
      <div className="centrize full-width">
        <div className="vertical-center">
          {/* title */}
          <h1 className="h-title">
            Amal
            <br />
            Haraka
          </h1>
          {/* content started */}
          <div className="started-content">
            {/* subtitle */}
            <div className="h-subtitles">
              <div className="h-subtitle typing-subtitle">
                {/* <TypingAnimation /> */}
                Research
              </div>
              <span className="typed-subtitle" />
            </div>
            {/* text */}
            <div className="h-text">
              Conducting in-depth research in various fields with a
              specialization in medical research.
            </div>
            {/* button */}
            <a href="#" className="btn">
              <span className="animated-button">
                <span>Contact Me</span>
              </span>
              <i className="icon fas fa-chevron-right" />
            </a>
            {/* mosue button */}
            <a href="#" className="btn mouse-btn" style={{ display: "none" }}>
              <i className="icon fas fa-chevron-down" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Started;
