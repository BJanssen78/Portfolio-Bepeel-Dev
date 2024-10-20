import { useState } from "react";
import { useNavigate } from "react-router-dom";
import flagNL from "../images/flag-NL.png";
import flagEN from "../images/flag-EN.png";

const LangSwitch = () => {
  const navigate = useNavigate();
  const [hoveredFlag, setHoveredFlag] = useState(null); // Track hover state

  const changeLang = (lang) => {
    localStorage.setItem("lang", lang);
    navigate(`/${lang}`);
  };

  const getIconStyle = (lang) => ({
    width: "20px",
    height: "20px",
    cursor: "pointer",
    margin: "0 5px",
    transition: "transform 0.3s ease",
    transform: hoveredFlag === lang ? "scale(1.2)" : "scale(1)",
  });

  return (
    <div className="language-switch">
      <a
        onMouseEnter={() => setHoveredFlag("nl")}
        onMouseLeave={() => setHoveredFlag(null)}
        onClick={() => changeLang("nl")}
      >
        <img src={flagNL} alt="dutch flag icon" style={getIconStyle("nl")} />
      </a>
      <a
        onMouseEnter={() => setHoveredFlag("en")}
        onMouseLeave={() => setHoveredFlag(null)}
        onClick={() => changeLang("en")}
      >
        <img src={flagEN} alt="english flag icon" style={getIconStyle("en")} />
      </a>
    </div>
  );
};

export default LangSwitch;
