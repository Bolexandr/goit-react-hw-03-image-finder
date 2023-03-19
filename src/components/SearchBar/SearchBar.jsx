import PropTypes from 'prop-types';
import { Component } from 'react';
import { toast } from 'react-toastify';

import {
  HeaderSearchBar,
  SearchForm,
  SearchFormButton,
  SearchButtonLabel,
  SearchFormInput,
} from './SearchBar.styled';

class SearchBar extends Component {
  state = {
    request: '',
  };

  onChangeHendler = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  cleanForm = () => {
    this.setState({ request: '' });
  };

  onSubmitHendler = e => {
    const { OnSubmit } = this.props;
    const { request } = this.state;
    e.preventDefault();
    if (request.trim() === '') {
      OnSubmit('');
      toast('Будь-ласка введіть щось перш ніж шукати!', {
        autoClose: 1800,
      });
      return;
    }
    OnSubmit(request);
    this.cleanForm();
  };

  render() {
    return (
      <HeaderSearchBar>
        <SearchForm onSubmit={this.onSubmitHendler}>
          <SearchFormButton>
            <SearchButtonLabel />
          </SearchFormButton>
          <SearchFormInput
            onChange={this.onChangeHendler}
            value={this.state.request}
            type="text"
            name="request"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </HeaderSearchBar>
    );
  }
}

SearchBar.propTypes = {
  OnSubmit: PropTypes.func,
};
export default SearchBar;
