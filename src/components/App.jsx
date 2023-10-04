// import axios from 'axios';
import { requestHits } from 'services/api';
import { Component } from 'react';
import { LoadMore } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { ToastContainer } from 'react-toastify';

// import { toast } from 'react-toastify';
// import Loader from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
export class App extends Component {
  state = {
    modal: {
      isOpen: false,
      isClosed: true,
    },
    hits: [],
    isLoading: false,
    error: null,
    tags: '',
    page: 1,
    query: '',
  };

  fetchHits = async () => {
    try {
      this.setState({ isLoading: true });
      const response = await requestHits(this.state.query, this.state.page);
      console.log(response);
      this.setState({ hits: response.hits });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchHits();
    }
  }

  handleSubmit = tags => {
    this.setState({ query: tags, page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }), this.fetchHits);
  };

  onOpenModal = modalData => {
    this.setState({
      modal: {
        isOpen: true,
        modalData: modalData,
      },
    });
  };

  onCloseModal = () => {
    this.setState({
      modal: {
        isOpen: false,
        modalData: null,
      },
    });
  };

  render() {
    return (
      <>
        <Searchbar
          onInputChange={this.onInputChange}
          onSubmit={this.handleSubmit}
        />
        <ToastContainer autoClose={4000} />
        <ImageGallery hits={this.state.hits} />
        <Loader />
        <LoadMore onClick={this.handleLoadMore} />
        <Modal
          isOpen={this.state.modal.isOpen}
          modalData={this.state.modal.modalData}
          onCloseModal={this.onCloseModal}
        />
      </>
    );
  }
}
