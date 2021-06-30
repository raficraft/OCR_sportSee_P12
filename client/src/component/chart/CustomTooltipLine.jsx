import React from "react";
import PropTypes from "prop-types";

/**
 * Custom Tooltips for LineChart Component
 *
 * @param {object} props
 * @returns {ReactElement}
 */

const CustomTooltipLine = (props) => {
  const { payload, active } = props;

  if (payload && active) {
    return (
      <div className="tooltipsLine">
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};

CustomTooltipLine.propTypes = {
  payload: PropTypes.array,
  active: PropTypes.bool,
};

export default CustomTooltipLine;
