import React from "react";
import {
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
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
import "./Dashboard.css";

function Dashboard() {
  const data = [
    {
      name: "Bengaluru",
      PrisonCount: 4718,
    },
    {
      name: "Mysuru",
      PrisonCount: 864,
    },
    {
      name: "Shivamogga",
      PrisonCount: 659,
    },
    {
      name: "Belagavi",
      PrisonCount: 921,
    },
    {
      name: "Dharwad",
      PrisonCount: 549,
    },
    {
      name: "Vijayapura",
      PrisonCount: 612,
    },
    {
      name: "Kalaburagi",
      PrisonCount: 1054,
    },
    {
      name: "Ballari",
      PrisonCount: 521,
    },
  ];

  const pdata = [
    {
      name: "January",
      Bengaluru: 840,
      Vijayapura: 120,
    },
    {
      name: "February",
      Bengaluru: 757,
      Vijayapura: 88,
    },
    {
      name: "March",
      Bengaluru: 719,
      Vijayapura: 168,
    },
    {
      name: "April",
      Bengaluru: 666,
      Vijayapura: 218,
    },
    {
      name: "May",
      Bengaluru: 648,
      Vijayapura: 326,
    },
    {
      name: "June",
      Bengaluru: 488,
      Vijayapura: 560,
    },
  ];

  const barColors = ["#92A3FD", "#C58BF2"];
  return (
    <div className="dashboard">
      <Header />
      <h3 className="text-center">Prison Count in Karnataka as of 2022</h3>
      <div className="charts section-lg">
        <BarChart
          width={1200}
          height={600}
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
          <YAxis dataKey="PrisonCount" />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="PrisonCount"
            /*fill="url(#colorUv)"*/ radius={[20, 20, 20, 20]}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={barColors[index % 2]} />
            ))}
          </Bar>
        </BarChart>
      </div>
      <h3 className="text-center">Convictions in Bengaluru vs Vijayapura</h3>
      <div className="charts section-lg">
        <ResponsiveContainer width="800%" aspect={3}>
          <LineChart data={pdata} margin={{ right: 100, left: 80 }}>
            <CartesianGrid />
            <XAxis dataKey="name" interval={"preserveStartEnd"} />
            <YAxis></YAxis>
            <Legend />
            <Tooltip />
            <Line dataKey="Bengaluru" stroke="black" activeDot={{ r: 8 }} />
            <Line dataKey="Vijayapura" stroke="red" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
