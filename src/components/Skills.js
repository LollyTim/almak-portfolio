import { useEffect } from "react";
import { createSkillsDot, dotResize } from "../utils";

export const DesignSkills = () => {
  return (
    <div className="section skills" id="section-skills">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Design Skills</div>
          <div className="subtitle">Creative ability</div>
        </div>
        {/* skills items */}
        <div className="skills percent">
          <ul>
            <li>
              <div className="name">Web Layout</div>
              <div className="single-post-text">
                <p>
                  Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                  Sed fringilla mauris sit amet nibh.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Illustrations</div>
              <div className="single-post-text">
                <p>
                  Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                  Sed fringilla mauris sit amet nibh.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "70%" }}>
                  <span className="percent">70%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Photoshop</div>
              <div className="single-post-text">
                <p>
                  Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                  Sed fringilla mauris sit amet nibh.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "95%" }}>
                  <span className="percent">95%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Graphic Design</div>
              <div className="single-post-text">
                <p>
                  Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                  Sed fringilla mauris sit amet nibh.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "85%" }}>
                  <span className="percent">85%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const LanguagesSkills = () => {
  useEffect(() => {
    dotResize();
    setTimeout(createSkillsDot, 1000);
  }, []);

  return (
    <div className="section skills" id="section-skills-lang">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Language Skills</div>
          <div className="subtitle">Reading and writing</div>
        </div>
        {/* skills items */}
        <div className="skills dotted">
          <ul>
            <li>
              <div className="name">English</div>
              <div className="single-post-text">
                <p>I can confidently read, write, and speak English.</p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Arabic</div>
              <div className="single-post-text">
                <p>I can confidently read, write, and speak Arabic.</p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "70%" }}>
                  <span className="percent">70%</span>
                </div>
              </div>
            </li>
            {/* <li>
              <div className="name">Italian</div>
              <div className="single-post-text">
                <p>
                  Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                  Sed fringilla mauris sit amet nibh.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "55%" }}>
                  <span className="percent">55%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">French</div>
              <div className="single-post-text">
                <p>
                  Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                  Sed fringilla mauris sit amet nibh.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "85%" }}>
                  <span className="percent">85%</span>
                </div>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const CodingSkills = () => {
  return (
    <div className="section skills" id="section-skills-code">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Coding Skills</div>
          <div className="subtitle">Developing on</div>
        </div>
        {/* skills items*/}
        <div className="skills circles">
          <ul>
            <li>
              <div
                className="progress p95"
                style={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {" "}
                {/* p95 = 95% circle fill color */}
                <div className="percentage" />
                <span>95%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>{" "}
              <div
                className="name"
                style={{
                  marginLeft: "30px",
                }}
              >
                R
              </div>
              {/* <div className="single-post-text">
                <p>Etiam sit amet orci eget eros faucibus tincidunt.</p>
              </div> */}
            </li>
            <li>
              <div className="progress p90">
                {" "}
                {/* p90 = 90% circle fill color */}
                <div className="percentage" />
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div
                className="name"
                style={{
                  marginLeft: "10px",
                }}
              >
                Python
              </div>
              {/* <div className="single-post-text">
                <p>Etiam sit amet orci eget eros faucibus tincidunt.</p>
              </div> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
