import React from "react";
import "./style.css";
import {
  LineChart,
  Line,
  XAxis,
  Rectangle,
  Tooltip,
  ResponsiveContainer,
  Customized,
} from "recharts";

const data = [
  {
    name: "0%",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "20%",
    uv: 4000,
    pv: 37,
    amt: 2400,
  },
  {
    name: "40%",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "60%",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "80%",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "100%",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

// using Customized gives you access to all relevant chart props
const CustomizedRectangle = (props) => {
  const { formattedGraphicalItems } = props;
  // get first and second series in chart
  const firstSeries = formattedGraphicalItems[0];
  const secondSeries = formattedGraphicalItems[1];
  console.log(formattedGraphicalItems);

  // render custom content using points from the graph
  return firstSeries?.props?.points.map((firstSeriesPoint, index) => {
    const secondSeriesPoint = secondSeries?.props?.points[index];
    const yDifference = firstSeriesPoint?.y - secondSeriesPoint?.y;

    return (
      <Rectangle
        key={firstSeriesPoint.payload.name}
        width={10}
        height={100}
        x={secondSeriesPoint?.x - 5}
        y={0}
        fill={yDifference > 0 ? "red" : yDifference < 0 ? "green" : "none"}
      />
    );
  });
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip toolTip">
        <p className="label" style={{ color: "white", fontSize: "18px" }}>
          {`${label} Percentile `}
          <br />
          <span>Your Score</span>
        </p>
      </div>
    );
  }
};

const Comparison = ({grph}) => {
  return (
    <div className="compContainer">
      {/* Top Text Part */}

      <div className="gDisp">
        <div className="compCon2">
          <p className="compG">Comparison Graph</p>
          <p className="desc">
            <span>You scored {grph}% percentile </span>which is lower than the
            average percentile 72% of all the engineers who took this assessment
          </p>
        </div>
        <div className="icon1">📈</div>
      </div>

      {/* Graph */}
      <div className="graph">
      <ResponsiveContainer
        style={{ margin: "10px 50px" }}
     
      >
        <LineChart width={200} height={100} data={data}>
          <XAxis dataKey="name" />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
          <Customized component={CustomizedRectangle} />
        </LineChart>
      </ResponsiveContainer></div>
    </div>
  );
};

export default Comparison;
