import css from './feedback.module.css';
import PropTypes from 'prop-types';

export default function Feedback({ onLeaveFeedback, options }) {
  const hendlerClick = () => {
    onLeaveFeedback(options);
  };
  return (
    <div className={css['container']}>
      <button className={css['button']} name={options} onClick={hendlerClick}>
        {options}
      </button>
    </div>
  );
}
Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.string.isRequired,
};