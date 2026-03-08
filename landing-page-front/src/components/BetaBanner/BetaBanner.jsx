import React, { useState, useEffect } from "react";
import "./BetaBanner.css";

const BetaBanner = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const dismissed = localStorage.getItem("betaBannerDismissed");

    if (dismissed === "true") {
      setVisible(false);
    } else {
      document.body.classList.add("beta-active");
    }

    return () => {
      document.body.classList.remove("beta-active");
    };
  }, []);

  const handleClose = () => {
    localStorage.setItem("betaBannerDismissed", "true");
    document.body.classList.remove("beta-active");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="beta-banner">
      <div className="beta-banner-content">
        <span>
          🚧 LinkyJob est actuellement en phase <strong>bêta</strong>.
          Certaines fonctionnalités peuvent évoluer.
        </span>
        <button className="beta-close" onClick={handleClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default BetaBanner;