import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  onInputChange = event => {
    const inputValue = event.target.value;
    this.setState({ query: inputValue });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.query.trim()) {
      return;
    }
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.onInputChange}
          />
        </form>
      </header>
    );
  }
}
