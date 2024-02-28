// YourComponent.tsx

import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function Stats() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const processedData = data.map(item => ({
    ...item,
    fill: item.name === "Page G" ? "red" : "#82ca9d"
  }));

  return (
    <ResponsiveContainer width="100%" minHeight="80vh">
      <BarChart
        data={processedData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        layout="vertical"
      >
        <Legend />
        <CartesianGrid strokeDasharray="3" />
        <YAxis
          type="category"
          dataKey="name"
          textAnchor="end"
          interval={0}
        />
        <XAxis type="number" />
        <Tooltip />
        <Bar
          dataKey="uv"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
          // layout="vertical"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
