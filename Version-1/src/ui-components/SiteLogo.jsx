import React from "react";

export const SiteLogo = () => {
  return (
    <React.Fragment>
      <div className="site-logo">
        <h1 className="web-element">
          <span className="special-char">&lt;</span>
          <span className="element-text">bpe</span>
          <span className="special-char">&gt;</span>
        </h1>
        <h1 className="web-element">
          <span className="web-text">WEB</span>
        </h1>
        <h1 className="web-element">
          <span className="special-char">&lt;/</span>
          <span className="element-text">Dev</span>
          <span className="special-char">&gt;</span>
        </h1>
      </div>
    </React.Fragment>
  );
};

export default SiteLogo;
