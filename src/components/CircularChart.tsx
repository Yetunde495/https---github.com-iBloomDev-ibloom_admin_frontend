import React from 'react';


interface CircularChartProps {
  percent: number; // Percentage of the circle to be filled
  bgColor: string; // Background color of the circle
  fillColor: string; // Color to fill the circle
  size?: number; // Size of the circle (default: 100)
}

const CircularChart: React.FC<CircularChartProps> = ({
  percent,
  bgColor,
  fillColor,
  size = 100,
}) => {
  const radius = (size - 10) / 2; // Adjusting for stroke width
  const fillAngle = (percent / 100) * 360; // Convert percentage to angle

  // Calculate position of the filled arc
  const x1 = size / 2;
  const y1 = size / 2 - radius;
  const x2 = size / 2 + radius * Math.sin((fillAngle * Math.PI) / 180);
  const y2 = size / 2 + radius * Math.cos((fillAngle * Math.PI) / 180);

  // Arc flag to determine whether the arc is larger than 180 degrees
  const arcFlag = fillAngle <= 180 ? '0' : '1';

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size / 2} cy={size / 2} r={radius} fill={bgColor} />
      <path
        d={`M ${x1} ${y1} A ${radius} ${radius} 0 ${arcFlag} 1 ${x2} ${y2} L ${size / 2} ${size / 2} Z`}
        fill={fillColor}
      />
    </svg>
  );
};

export default CircularChart;


