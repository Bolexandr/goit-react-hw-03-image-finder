import PropTypes from 'prop-types';
import { Button } from './LoadMoreButton.styled';

const LoadMoreButton = ({ onClick }) => {
  return <Button onClick={onClick}>Load more</Button>;
};

LoadMoreButton.propTypes = {
  onClick: PropTypes.func,
};
export default LoadMoreButton;
