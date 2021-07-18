import { scaleLinear } from 'd3';


const getScaled = (x: number) => {
  const scale = scaleLinear()
    .domain([10, 100])
    .range([0, 10]);
  return scale(x);
};

export default getScaled;
