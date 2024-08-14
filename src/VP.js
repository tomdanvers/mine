import './VP.scss';

function VP(props) {
  if (props.vp === 0) {
    return null;
  } else {
    return (
      <div className="VP">{props.vp}</div>
    );
  }
}

export default VP;