// import axios from 'axios';
import { requestHits } from 'services/api';
import { Component } from 'react';
// import { toast } from 'react-toastify';
// import Loader from 'react-loader-spinner'; // Импортируем компонент спиннера
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'; // Подключаем стили спиннера

// id - унікальний ідентифікатор
// webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL

export class App extends Component {
  state = {
    filter: '',
    modal: {
      isOpen: false,
      isClosed: true,
    },
    hits: [],
    isLoading: false,
    error: null,
  };

  fetchHits = async () => {
    try {
      this.setState({ isLoading: true });
      const hits = await requestHits();
      console.log(hits);
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.fetchHits();
  }

  onFilterChange = event => {
    const inputValue = event.target.value;
    this.setState({ filter: inputValue });
  };
  // render()
}
