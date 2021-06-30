import React from "react";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import useFetch from "../../Hooks/useFetch";
import PropTypes from "prop-types";

/**
 * @param {string} props
 * @returns {ReactELement} RadarChart component
 */

const RadarComponent = (props) => {
  const endPoints = props.url;
  const { data, loading } = useFetch(
    `http://localhost:5000${endPoints}/performance`,
    "radar"
  );

  if (loading) return <div>...loading</div>;

  //Resize radar to match screen resolution

  let radarSize = "70%";
  if (window.matchMedia("(max-width: 1024px)").matches) {
    radarSize = "60%";
  }

  return (
    <div className="squareContainer squareContainer-radar">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius={radarSize} data={data.data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            tickLine={false}
            tick={{ fontSize: 12 }}
          />

          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

RadarComponent.propTypes = {
  props: PropTypes.string,
};

export default RadarComponent;
