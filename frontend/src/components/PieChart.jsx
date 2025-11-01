import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data
const data = [
  { name: "E-commerce", value: 135 },
  { name: "Social Media", value: 228 },
  { name: "Productivity", value: 662 },
  { name: "Entertainment", value: 15 },
];

//Custom color
const colors = ["blue", "purple", "green", "orange"];

export default function CustomPieChart() {
  return (
    <div
      className="flex items-center justify-between"
      style={{
        width: "100%",
        height: "200px",

        borderRadius: "20px",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            innerRadius="50%"
            outerRadius="80%"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
                stroke="#0f172a"
                strokeWidth={2}
              />
            ))}
          </Pie>

        </PieChart>
      </ResponsiveContainer>
      <div className="flex-col w-full">
        {data.map((d, index) => {
          return (
            <div className="flex items-center justify- gap-6">
              <div className="w-3 h-3 rounded-full"  style={{ backgroundColor: colors[index] }}></div>
              <p className="text-white font-semibold">{d.name}</p>
            </div>
          );
        })}
      </div> 
    </div>
  );
}
