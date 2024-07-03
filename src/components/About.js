const About = () => {
  return (
    <div className="section about" id="section-about">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">About Me</div>
          <div className="subtitle">My story</div>
        </div>
        {/* text */}
        <div className="cols">
          <div className="col col-full">
            <div className="single-post-text">
              <p>
                I'm a curious researcher with a passion for diving deep into
                complex questions across various fields. My expertise lies in
                medical research, where I strive to contribute to advancements
                that improve lives.
              </p>
            </div>
          </div>
        </div>
        {/* info list */}
        <div className="info-list">
          <ul>
            <li>
              <strong>Residence:</strong> California
            </li>
            <li>
              <strong>Freelance:</strong> Available
            </li>
            <li>
              <strong>Address:</strong> San Diego
            </li>
            <li>
              <strong>Phone:</strong> +1 256 254 84 56
            </li>
            <li>
              <strong>E-mail:</strong> me@amalharaka.com
            </li>
          </ul>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
