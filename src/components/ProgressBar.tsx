
import { FC } from 'react';
import { Bar } from '../ts/types';

interface ProgressBarProps {
  bar: Bar
}

const ProgressBar: FC<ProgressBarProps> = ({ bar: { label, className, width } }) => {
  return (
    <div className="progress__bar__div">
      <div>{label}</div>
      <div className="progress__bar__width" >
        <span>{width + "%"}</span>
        <div className="progress__bar" >
          <div style={{ width: `${width}%`, height: "100%" }} className={className}></div>
        </div>
      </div>
    </div >
  );
};

export default ProgressBar;