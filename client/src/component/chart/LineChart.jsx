import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useFetch from "../../Hooks/useFetch";
import CustomTooltipLine from "./CustomTooltipLine";
import PropTypes from "prop-types";

/**
 * @param {string} props
 * @returns LineChart component
 */

const LineComponent = (props) => {
  const endPoints = props.url;
  const { data, loading } = useFetch(
    `http://localhost:5000${endPoints}/average-sessions`,
    "linear"
  );

  if (loading) return <div>...loading</div>;

  return (
    <div className="squareContainer squareContainer_line">
      <h2 className="titleLine">
        Durée moyenne des <br></br> sessions
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={250}
          height={186}
          data={data.sessions}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="day"
            stroke="rgba(255,255,255,0.4)"
            tickLine={false}
            axisLine={false}
            strokeDashArray="4"
            tick={{ fontSize: 12 }}
          />
          <YAxis hide={true} height={100} padding={{ top: 80, bottom: 20 }} />
          <Tooltip
            content={<CustomTooltipLine />}
            contentStyle={{ backgroundColor: "#fff" }}
            cursor={{
              stroke: "rgba(0, 0, 0, 0.1)",
              strokeWidth: 50,
            }}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#fff"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: "rgba(255, 255, 255, 0.2)",
              strokeWidth: 10,
              r: 5,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

LineComponent.propTypes = {
  props: PropTypes.string,
};

export default LineComponent;
