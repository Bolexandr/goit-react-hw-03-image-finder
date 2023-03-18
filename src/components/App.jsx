import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SearchBar from './SearchBar';
import ImageGallery from './ImageGallery';

export class App extends Component {
  state = { searchRequest: '', pageNumber: null, loaderVisible: false };

  OnSubmitHendler = FormData => {
    this.setState({
      searchRequest: FormData,
      pageNumber: 1,
    });
  };

  onLoadMoreClick = () => {
    this.setState(prevState => ({ pageNumber: prevState.pageNumber + 1 }));
  };

  render() {
    const { state, OnSubmitHendler, onLoadMoreClick } = this;
    const { pageNumber, searchRequest } = state;
    return (
      <div className="App">
        <SearchBar OnSubmit={OnSubmitHendler} />
        <ImageGallery
          searchRequest={searchRequest}
          Page={pageNumber}
          onLoadMoreClick={onLoadMoreClick}
        />
        <ToastContainer />
      </div>
    );
  }
}
