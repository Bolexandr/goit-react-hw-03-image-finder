import PropTypes from 'prop-types';
import { GaleriItemLi, GalaeryItemImg } from './ImageGaleryItem.styled';
import Modal from 'components/Modal';
import { Component } from 'react';

class ImageGaleryItem extends Component {
  state = {
    isModalOpen: false,
  };
  onModalOpen = () => {
    this.setState({ isModalOpen: true });
  };

  onCloseModal = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      this.setState({ isModalOpen: false });
    }
  };

  componentDidUpdate() {
    const { isModalOpen } = this.state;
    if (isModalOpen) {
      window.addEventListener('keydown', this.onCloseModal);
    }
    if (!isModalOpen) {
      window.removeEventListener('keydown', this.onCloseModal);
    }
  }

  render() {
    const { isModalOpen } = this.state;
    const { url, bigPhotoUrl } = this.props;
    const { onModalOpen, onCloseModal } = this;
    return (
      <>
        <GaleriItemLi>
          <GalaeryItemImg src={url} onClick={onModalOpen} />
        </GaleriItemLi>
        <Modal
          visability={isModalOpen}
          bigPhotoUrl={bigPhotoUrl}
          modalClose={onCloseModal}
        />
      </>
    );
  }
}

ImageGaleryItem.propTypes = {
  bigPhotoUrl: PropTypes.string,
  url: PropTypes.string,
};
export default ImageGaleryItem;
