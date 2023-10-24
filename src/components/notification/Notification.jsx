import PropTypes from 'prop-types';
export default function Notifications({ message }) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}
Notifications.propTypes = {
  message: PropTypes.string.isRequired,
};