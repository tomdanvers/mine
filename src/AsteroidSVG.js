const CIRCLE_OFFSET = 0;

function AsteroidSVG(props) {
  let offsetsY = {
    crust: - props.offsetY * 2,
    mantle: - props.offsetY,
    core: 0
  }
  let width = 800;
  let height = 800;
  let originX = width * .5;
  let offsetY = offsetsY[props.type] + CIRCLE_OFFSET;
  let originY = height * .5 - offsetY;

  const renderCircle = (x, y, r, steps, variance, colour) => {
    let radianStep = Math.PI * 2 / steps;

    let points = []
    for (let i = 0; i < steps; i ++) {
      let noise = Math.random() * variance;
      let ix = Math.cos(radianStep * i) * (r + noise);
      let iy = Math.sin(radianStep * i) * (r + noise);
      points.push(`${x + ix},${y + iy}`);
    }
    return (<polygon points={points.join(' ')} stroke='white' strokeWidth={3} fill={colour} />)
  };

  const renderStarfield = (x, y, width, height, sizeMin, sizeMax) => {
    x = x - width * .5;
    y = y - height * .5;
    const count = 20;
    const stars = [];
    for (let i = 0; i < count; i ++) {
      stars.push({
        x: x + width * Math.random(),
        y: y + height * Math.random(),
        size: sizeMin + (sizeMax - sizeMin) * Math.random()
      });
    }

    return (<>
      {/* <rect x={x} y={y} width={width} height={height} fill="red" /> */}
      {stars.map((star, index) => (<rect key={index} x={star.x} y={star.y} width={star.size} height={star.size} fill='white' />))}
    </>)
  };

  return (
    <svg className="AsteroidSVG" version="1.1" width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" />
      {renderStarfield(originX, originY - height * .8, width * .5, height * .3, 2, 6)}
      {renderCircle(originX, originY, width * .6, 150, 20, 'rgba(255,255,255,.2)')}
      {renderCircle(originX, originY, width * .47, 100, 2, 'rgba(255,255,255,.2)')}
      {renderCircle(originX, originY, width * .15, 50, 2, 'rgba(255,255,255,.2)')}
    </svg>
  );
}

export default AsteroidSVG;