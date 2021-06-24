import React from "react";

import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import useFetch from "../../Hooks/useFetch";
import PropTypes from "prop-types";

/**
 *
 * @param {String} url
 * @param {number} score
 * @returns
 */

const RadialComponent = ({ url, score }) => {
  const endPoints = url;
  const { data, loading } = useFetch(
    `http://localhost:5000${endPoints}`,
    "pie"
  );

  if (loading) return <div>...loading</div>;

  return (
    <div className="squareContainer squareContainer-radial">
      <div className="centerInfo">
        <div className="centerInfo-content">
          <span className="score">{data[0].todayScore}%</span>
          <span className="scoreText">
            <br /> de votre <br />
            objectif
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          barSize={16}
          data={data}
          startAngle={90}
          endAngle={450}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />

          <RadialBar dataKey="todayScore" cornerRadius={50} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

RadialComponent.propTypes = {
  props: PropTypes.string,
  score: PropTypes.number,
};

export default RadialComponent;
