import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const BarChartNoPadding = ({ data }) => {
  return (
    <>
      <BarChart width={349} height={400} data={data} barSize={20}>
        <text
          x="200"
          y="30"
          textAnchor="middle"
          fontSize="18px"
          fontWeight="bold"
          fontFamily="Source Sans Pro"
        >
          Domain With Group
        </text>
        <XAxis
          dataKey="name"
          angle={-45}
          textAnchor="end"
          scale="auto"
          interval={0}
          padding={{ left: 10, right: 10 }}
        />
        <YAxis />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="num" fill="#9E1C00"></Bar>
      </BarChart>
    </>
  );
};

export default BarChartNoPadding;
