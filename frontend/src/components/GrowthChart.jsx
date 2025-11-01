import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Apr 2025", value: 0 },
  { month: "May 2025", value: 0 },
  { month: "Jun 2025", value: 0 },
  { month: "Jul 2025", value: 0 },
  { month: "Aug 2025", value: 0 },
  { month: "Sep 2025", value: 0 },
  { month: "Oct 2025", value: 320 },
];

const GrowthChart = () => {
  return (
    <div className="w-full h-80 rounded-xl p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
         
          <XAxis dataKey="month" stroke="#9be7e3" />
          <YAxis stroke="#9be7e3" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#062025",
              border: "1px solid #00ffff",
              borderRadius: "10px",
            }}
            labelStyle={{ color: "#00ffff" }}
            itemStyle={{ color: "#9be7e3" }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#5eead4" 
            strokeWidth={3}
            dot={{ r: 5, fill: "#5eead4", strokeWidth: 2 }}
            activeDot={{ r: 7, fill: "#67e8f9" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GrowthChart;
