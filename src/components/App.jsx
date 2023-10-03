// import axios from 'axios';
import { requestHits } from 'services/api';
import { Component } from 'react';
import { LoadMore } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
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
  };

  fetchHits = async () => {
    try {
      this.setState({ isLoading: true });
      const hits = await requestHits();
      console.log(hits);
      this.setState({ hits: hits });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  // fetchHits = async () => {
  //   try {
  //     this.setState({ isLoading: true });
  //     const hits = await requestHits();
  //     console.log(hits);
  //     this.setState({ hits: hits });
  //   } catch (error) {
  //     this.setState({ error: error.message });
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // };

  componentDidMount() {
    this.fetchHits();
  }

  handleSubmit = data => {
    if (data === this.state.tags) {
      this.setState({ tags: data });
    }
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
