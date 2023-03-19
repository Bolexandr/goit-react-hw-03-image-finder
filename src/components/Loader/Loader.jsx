import PropTypes from 'prop-types';
import { LoaderComponent } from './Loader.styled';
import { RotatingLines } from 'react-loader-spinner';

const Loader = ({ visible }) => {
  return (
    <LoaderComponent>
      <RotatingLines
        strokeColor="green"
        strokeWidth="2"
        animationDuration="0.5"
        width="100"
        visible={visible}
      />
    </LoaderComponent>
  );
};

Loader.propTypes = {
  visible: PropTypes.bool,
};
export default Loader;
