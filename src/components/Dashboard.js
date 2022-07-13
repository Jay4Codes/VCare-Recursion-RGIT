import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";
import Footer from "./Footer";
import Header from "./Header";

function Dashboard() {
  const data = [
    {
      name: "Quiz 1",
      Score: 3,
    },
    {
      name: "Quiz 2",
      Score: 3,
    },
    {
      name: "Quiz 3",
      Score: 2,
    },
    {
      name: "Quiz 4",
      Score: 1,
    },
    {
      name: "Quiz 5",
      Score: 1,
    },
    {
      name: "Quiz 6",
      Score: 1,
    },
    {
      name: "Quiz 7",
      Score: 2,
    },
  ];
  const barColors = ["#92A3FD", "#C58BF2"];
  return (
    <div>
      <Header />
      <div className="chartss section-lg">
        <BarChart
          width={700}
          height={300}
          data={data}
          barCategoryGap={15}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          padding={{
            right: 30,
            left: 20,
          }}
        >
          <defs>
            <linearGradient
              id="colorUv"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="100%"
              spreadMethod="reflect"
            >
              <stop offset="0" stopColor="#C58BF2" />
              <stop offset="1" stopColor="#EEA4CE" />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name" />
          <YAxis dataKey="Score" />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="Score"
            /*fill="url(#colorUv)"*/ radius={[20, 20, 20, 20]}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={barColors[index % 2]} />
            ))}
          </Bar>
        </BarChart>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
