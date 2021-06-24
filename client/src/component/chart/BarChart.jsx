import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomTooltipActivity from "./CustomToolActivity.jsx";
import PropTypes from "prop-types";
import useFetch from "../../Hooks/useFetch.jsx";

/**
 * @param {string} props
 * @returns LineChart component
 */

const BarComponent = (props) => {
  const endPoints = props.url;
  const { data, loading } = useFetch(
    `http://localhost:5000${endPoints}/activity `,
    "bar"
  );

  if (loading) return <div>...loading</div>;

  return (
    <div className="fullContainer">
      <header className="barchart">
        <h2>Activité quotidienne</h2>
        <div className="legend">
          <div className="header-text header-text_kg">
            <span></span>
            <p>Poids (kg)</p>
          </div>
          <div className="header-text header-text_cal">
            <span></span>
            <p>Calories brûlées (kCal)</p>
          </div>
        </div>
      </header>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={data.sessions}
          margin={{
            top: 54,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" />
          <YAxis
            yAxisId="kg"
            dataKey="kilogram"
            orientation="right"
            type="number"
            tickLine={false}
            axisLine={false}
            domain={[data.minAndMax[0].minKg, data.minAndMax[0].maxKg]}
          />

          <YAxis
            yAxisId="cal"
            dataKey="calories"
            type="number"
            hide={true}
            domain={[data.minAndMax[1].minCal, data.minAndMax[1].maxCal]}
          />
          <Tooltip
            content={<CustomTooltipActivity />}
            cursor={{ fill: "#e0e0e0" }}
          />
          <Bar
            yAxisId="kg"
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="cal"
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[50, 50, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

BarComponent.propTypes = {
  props: PropTypes.string,
};

export default BarComponent;
