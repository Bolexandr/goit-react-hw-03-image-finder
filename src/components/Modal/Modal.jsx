import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

import { Overlay, ModalDiv } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ bigPhotoUrl, visability, modalClose }) => {
  return (
    visability &&
    createPortal(
      <Overlay onClick={modalClose}>
        <ModalDiv>
          <img src={bigPhotoUrl} alt="" />
        </ModalDiv>
      </Overlay>,
      modalRoot
    )
  );
};

Modal.propTypes = {
  bigPhotoUrl: PropTypes.string,
  modalClose: PropTypes.func,
  visability: PropTypes.bool,
};
export default Modal;
