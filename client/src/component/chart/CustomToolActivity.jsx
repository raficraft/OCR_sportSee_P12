import React from "react";
import PropTypes from "prop-types";

/**
 * Custom Tooltips for BarChart Component
 *
 * @param {object} props
 * @returns {ReactElement}
 */

const CustomTooltipActivity = (props) => {
  const { payload, active } = props;

  if (payload && active) {
    return (
      <div className="tooltipsBar">
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}cal`}</p>
      </div>
    );
  }

  return null;
};

CustomTooltipActivity.propTypes = {
  payload: PropTypes.array,
  active: PropTypes.bool,
};

export default CustomTooltipActivity;
