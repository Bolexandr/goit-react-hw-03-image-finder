import { Component } from 'react';
import { toast } from 'react-toastify';

import pixabeyReq from 'PixabeyApis';
import { ImageGalleryUl } from './ImageGallery.styled';
import ImageGaleryItem from 'components/ImageGaleryItem';
import LoadMoreButton from 'components/LoadMoreButton';
import Loader from 'components/Loader';

class ImageGallery extends Component {
  state = { photos: [], loaderVisible: false, loadMoreWisible: false };

  async componentDidUpdate(prevProps) {
    const { searchRequest, Page } = prevProps;
    const { props, state } = this;

    if (Page !== props.Page || searchRequest !== props.searchRequest) {
      if (props.Page === 1) {
        this.setState({ photos: [] });
      }
      if (searchRequest !== props.searchReques) {
        this.setState({ loaderVisible: true, loadMoreWisible: false });
      }
      try {
        if (props.searchRequest.length) {
          const photosArr = await pixabeyReq({
            q: props.searchRequest,
            page: props.Page,
          });
          this.setState(({ photos }) => ({
            photos: [...photos, ...photosArr.data.hits],
          }));

          if (photosArr.data.totalHits > 12) {
            this.setState({ loadMoreWisible: true });
          }

          if (photosArr.data.totalHits === state.photos.length) {
            this.setState({ loadMoreWisible: false });
            toast.warn(
              'закінчились фото за вашим запитом, спробуйте пошукати щось інше',
              {
                autoClose: 1800,
              }
            );
            return;
          }

          if (photosArr.data.hits.length === 0) {
            toast.warn(
              'Нажаль за вашим запитом нічого не знайдено, спробуйте пошукати щось що є адекватним)',
              { autoClose: 2800 }
            );
          }
          // console.log(photosArr.data);
        }
        console.log(props.searchRequest.length);
      } catch (error) {
        toast.error(
          'Трапилась халепа ,ми вже працюємо над її виправленням, спробуйте перезавантажити сторінку та повторити запит. ,',
          { autoClose: 3500 }
        );
        console.log('in cath', error);
      } finally {
        this.setState(() => {
          return {
            loaderVisible: false,
          };
        });
      }
    }
  }

  render() {
    const { photos, loaderVisible, loadMoreWisible } = this.state;
    const { onLoadMoreClick } = this.props;
    return (
      <>
        <ImageGalleryUl>
          {photos.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGaleryItem
              key={id}
              url={webformatURL}
              bigPhotoUrl={largeImageURL}
            />
          ))}
        </ImageGalleryUl>
        {loadMoreWisible ? <LoadMoreButton onClick={onLoadMoreClick} /> : null}
        <Loader visible={loaderVisible} />
      </>
    );
  }
}
export default ImageGallery;

// async componentDidUpdate(prevProps, prevState) {
//     const { searchRequest, Page } = prevProps;
//     const { props } = this;

//     if (Page !== props.Page || searchRequest !== props.searchRequest) {
//       if (props.Page === 1) {
//         this.setState({ photos: [] });
//       }
//       this.setState({ loaderVisible: true });
//       try {
//         await setTimeout(
//           pixabeyReq({ q: props.searchRequest, page: props.Page }).then(
//             ({ data }) => {
//               this.setState(({ photos }) => ({
//                 photos: [...photos, ...data.hits],
//               }));
//             }
//           ),
//           1000
//         );
//       } catch {
//         console.error(
//           'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
//         );
//       } finally {
//         console.log('Finaly');
//         this.setState({ loaderVisible: false });
//       }

//       console.log('object');
//     }
//   }
