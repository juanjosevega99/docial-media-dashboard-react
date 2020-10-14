import React from "react";
import "./card-small.css";

export default function CardSmall({ growth, pageViews, icon }) {
  return (
    <div className="card-small">
      <p className="card-small-views">Page Views</p>
      <p className="card-small-icon">
        <img src={icon} />
      </p>
      <p className="card-small-number">{pageViews}</p>
      <p className="card-small-percentage">
        <span>
          <img src="images/icon-up.svg" />
          {growth}%
        </span>
      </p>
    </div>
  );
}
