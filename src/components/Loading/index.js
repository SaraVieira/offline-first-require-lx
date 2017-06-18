import { h } from 'preact';
import style from './style.css';

const Loading = () =>
  <div className={style.wrapper}>
    <div className={style.spinner}>
      <div className={style.doubleBounce1} />
      <div className={style.doubleBounce2} />
    </div>
  </div>;

export default Loading;
