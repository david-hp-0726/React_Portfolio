import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function SkillBox({ title, items }) {
  return (
    <div className="skillBox">
      <h1 className="skillName">{title}</h1>
      <div className="skillItems">
        {items.map((item) => {
          return (
            <div className="skillItem">
              <CheckCircleOutlineIcon className="checkmark" />
              <p>{item}</p>
            </div>
          );
        })}
        {items.length % 2 == 0 ? null : <div className="skillItem"></div>}
      </div>
    </div>
  );
}

export default SkillBox;
