import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faVuejs,
  faAngular,
  faNodeJs,
  faAndroid,
  faApple,
  faSketch,
  faFigma,
  faGoogle,
  faAws,
  faDocker,
  faJenkins,
  faLinux,
  faBootstrap,
  faSass,
  faLess,
  faPhp,
  faPython,
  faJava,
  faRust,
  faWordpress,
  faInvision,
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
  faGitAlt,
 
} from "@fortawesome/free-brands-svg-icons";
import {
  faPaintBrush,
  faMobileAlt,
  faDatabase,
  faCloud,
  faBullhorn,
  faChartLine,
  faShieldAlt,
  faNetworkWired,
  faQuestionCircle,
  faExclamationTriangle,
  faAngleDoubleDown,
} from "@fortawesome/free-solid-svg-icons";

const TechnologyUsed = () => {
  const [activeFilter, setActiveFilter] = useState("web");

  // const technologies = [
  //   { id: 1, category: "web", icon: faHtml5, name: "HTML5" },
  //   { id: 2, category: "web", icon: faCss3Alt, name: "CSS3" },
  //   { id: 3, category: "web", icon: faJsSquare, name: "JavaScript" },
  //   { id: 4, category: "web", icon: faReact, name: "React.js" },
  //   { id: 5, category: "web", icon: faVuejs, name: "Vue.js" },
  //   { id: 6, category: "web", icon: faAngular, name: "Angular" },
  //   { id: 7, category: "web", icon: faNodeJs, name: "Node.js" },
  //   { id: 8, category: "mobile", icon: faReact, name: "React Native" },
  //   { id: 9, category: "mobile", icon: faAndroid, name: "Android" },
  //   { id: 10, category: "mobile", icon: faApple, name: "iOS" },
  //   { id: 11, category: "mobile", icon: faMobileAlt, name: "Flutter" },
  //   {
  //     id: 12,
  //     category: "graphics",
  //     icon: faPaintBrush,
  //     name: "Adobe Photoshop",
  //   },
  //   { id: 13, category: "graphics", icon: faSketch, name: "Sketch" },
  //   { id: 14, category: "graphics", icon: faFigma, name: "Figma" },
  //   { id: 15, category: "graphics", icon: faPaintBrush, name: "Canva" },
  //   {
  //     id: 16,
  //     category: "marketing",
  //     icon: faBullhorn,
  //     name: "SEO Optimization",
  //   },
  //   { id: 17, category: "marketing", icon: faGoogle, name: "Google Ads" },
  //   {
  //     id: 18,
  //     category: "marketing",
  //     icon: faChartLine,
  //     name: "Google Analytics",
  //   },
  //   {
  //     id: 19,
  //     category: "marketing",
  //     icon: faBullhorn,
  //     name: "Social Media Marketing",
  //   },
  //   { id: 20, category: "database", icon: faDatabase, name: "MongoDB" },
  //   { id: 21, category: "database", icon: faDatabase, name: "MySQL" },
  //   { id: 22, category: "database", icon: faDatabase, name: "PostgreSQL" },
  //   { id: 23, category: "database", icon: faDatabase, name: "Firebase" },
  //   { id: 24, category: "cloud", icon: faAws, name: "AWS" },
  //   { id: 25, category: "cloud", icon: faCloud, name: "Azure" },
  //   { id: 26, category: "cloud", icon: faGoogle, name: "Google Cloud" },
  //   { id: 27, category: "cloud", icon: faCloud, name: "DigitalOcean" },
  //   { id: 28, category: "devops", icon: faDocker, name: "Docker" },
  //   { id: 29, category: "devops", icon: faJenkins, name: "Jenkins" },
  //   { id: 30, category: "devops", icon: faLinux, name: "Linux" },
  //   { id: 31, category: "devops", icon: faNetworkWired, name: "Terraform" },
  //   { id: 32, category: "security", icon: faShieldAlt, name: "Cybersecurity" },
  //   {
  //     id: 33,
  //     category: "security",
  //     icon: faShieldAlt,
  //     name: "Penetration Testing",
  //   },
  //   {
  //     id: 34,
  //     category: "security",
  //     icon: faShieldAlt,
  //     name: "Firewall Management",
  //   },
  // ];


  const technologies = [
    { id: 1, category: "web", icon: faHtml5, name: "HTML5" },
    { id: 2, category: "web", icon: faCss3Alt, name: "CSS3" },
    { id: 3, category: "web", icon: faJsSquare, name: "JavaScript" },
    { id: 4, category: "web", icon: faReact, name: "React.js" },
    { id: 5, category: "web", icon: faVuejs, name: "Vue.js" },
    { id: 6, category: "web", icon: faAngular, name: "Angular" },
    { id: 7, category: "web", icon: faNodeJs, name: "Node.js" },
    { id: 8, category: "web", icon: faBootstrap, name: "Bootstrap" },
    { id: 9, category: "web", icon: faSass, name: "Sass" },
    { id: 10, category: "web", icon: faLess, name: "Less" },
    { id: 11, category: "web", icon: faPhp, name: "PHP" },
    { id: 12, category: "web", icon: faPython, name: "Python" },
    { id: 13, category: "web", icon: faJava, name: "Java" },
    { id: 15, category: "web", icon: faGoogle, name: "Go" },
    { id: 17, category: "web", icon: faWordpress, name: "WordPress" },
    { id: 20, category: "mobile", icon: faReact, name: "React Native" },
    { id: 21, category: "mobile", icon: faAndroid, name: "Android" },
    { id: 22, category: "mobile", icon: faApple, name: "iOS" },
    { id: 23, category: "mobile", icon: faMobileAlt, name: "Flutter" },
    { id: 24, category: "mobile", icon: faQuestionCircle, name: "Ionic" },
    { id: 25, category: "mobile", icon: faExclamationTriangle, name: "Xamarin" },
    { id: 26, category: "graphics", icon: faPaintBrush, name: "Adobe Photoshop" },
    { id: 27, category: "graphics", icon: faSketch, name: "Sketch" },
    { id: 28, category: "graphics", icon: faFigma, name: "Figma" },
    { id: 29, category: "graphics", icon: faPaintBrush, name: "Canva" },
    { id: 30, category: "graphics", icon: faInvision, name: "InVision" },
    { id: 31, category: "graphics", icon: faAngleDoubleDown, name: "Adobe XD" },
    { id: 32, category: "marketing", icon: faBullhorn, name: "SEO Optimization" },
    { id: 33, category: "marketing", icon: faGoogle, name: "Google Ads" },
    { id: 34, category: "marketing", icon: faChartLine, name: "Google Analytics" },
    { id: 35, category: "marketing", icon: faFacebook, name: "Facebook Ads" },
    { id: 36, category: "marketing", icon: faTwitter, name: "Twitter Ads" },
    { id: 37, category: "marketing", icon: faLinkedin, name: "LinkedIn Ads" },
    { id: 38, category: "database", icon: faDatabase, name: "MongoDB" },
    { id: 39, category: "database", icon: faDatabase, name: "MySQL" },
    { id: 40, category: "database", icon: faDatabase, name: "PostgreSQL" },
    { id: 41, category: "database", icon: faDatabase, name: "Firebase" },
    { id: 42, category: "database", icon: faDatabase, name: "Redis" },
    { id: 43, category: "database", icon: faDatabase, name: "Cassandra" },
    { id: 44, category: "cloud", icon: faAws, name: "AWS" },
    { id: 45, category: "cloud", icon: faCloud, name: "Azure" },
    { id: 46, category: "cloud", icon: faGoogle, name: "Google Cloud" },
    { id: 47, category: "cloud", icon: faCloud, name: "DigitalOcean" },
    { id: 48, category: "cloud", icon: faCloud, name: "Heroku" },
    { id: 49, category: "cloud", icon: faCloud, name: "Linode" },
    { id: 50, category: "devops", icon: faDocker, name: "Docker" },
    { id: 51, category: "devops", icon: faJenkins, name: "Jenkins" },
    { id: 52, category: "devops", icon: faLinux, name: "Linux" },
    { id: 53, category: "devops", icon: faNetworkWired, name: "Terraform" },
    { id: 56, category: "devops", icon: faGitAlt, name: "Git" },
    { id: 57, category: "devops", icon: faGithub, name: "GitHub" },
    { id: 59, category: "security", icon: faShieldAlt, name: "Cybersecurity" },
    { id: 60, category: "security", icon: faShieldAlt, name: "Penetration Testing" },
    { id: 61, category: "security", icon: faShieldAlt, name: "Firewall Management" },
    { id: 62, category: "security", icon: faShieldAlt, name: "Encryption" },
    { id: 63, category: "security", icon: faShieldAlt, name: "VPN" },
  ];
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredTechnologies = technologies.filter(
    (item) => item.category === activeFilter
  );

  return (
    <section style={{ padding: "60px 0", textAlign: "center", background: "#051242" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div className="section-title">
          <span className="text-light">Working Process</span>
          <h2 className="text-light">Technology We Use</h2>
        </div>

        {/* Filter Buttons */}
        <div
          style={{
            marginBottom: "20px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          {[
            { name: "Web Development", filter: "web" },
            { name: "Mobile Apps", filter: "mobile" },
            { name: "Graphics Design", filter: "graphics" },
            { name: "Digital Marketing", filter: "marketing" },
            { name: "Databases", filter: "database" },
            { name: "Cloud & DevOps", filter: "cloud" },
            { name: "Security", filter: "security" },
          ].map((btn) => (
            <button
              key={btn.filter}
              onClick={() => handleFilterClick(btn.filter)}
              style={{
                margin: "10px",
                padding: "6px 10px",
                background: activeFilter === btn.filter ? "#D90731" : "#fff",
                color: activeFilter === btn.filter ? "#fff" : "#051242",
                border: "1px solid rgb(255, 255, 255)",
                borderRadius: "25px",
                cursor: "pointer",
                fontSize: "15px",
                transition: "all 0.3s ease",
                fontWeight: "600",
              }}
            >
              {btn.name}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "30px",
            justifyContent: "center",
          }}
        >
          {filteredTechnologies.map((item) => (
            <div
              key={item.id}
              style={{
                textAlign: "center",
                padding: "20px",
                borderRadius: "10px",
                background: "#F8F2DE",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", // Hexagon shape
                width: "130px",
                height: "153px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 8px 16px rgba(0, 0, 0, 0.3)"; // Enhanced shadow on hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 8px rgba(0, 0, 0, 0.2)"; // Revert to initial shadow
              }}
            >
              <FontAwesomeIcon
                icon={item.icon}
                style={{
                  fontSize: "50px",
                  color: "#D90731",
                  marginBottom: "5px",
                }}
              />
              <h3
                style={{ fontSize: "14px", fontWeight: "bold", color: "#333" }}
              >
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyUsed;
