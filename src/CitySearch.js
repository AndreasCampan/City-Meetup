import React, { Component } from 'react';
import { ErrorAlert} from './Alert';

class CitySearch extends Component {

  state = {
    query: '',
    suggestions: [],
    showSuggestions: false,
    errorText:''
  }

  listUpdate() {
    const suggestions = this.props.locations.filter((location) => {
      return location
    });
    this.setState({
      suggestions,
    });
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        errorText: 'City not found.',
      });
    } else {
      this.setState({
        query: value,
        suggestions,
        errorText:''
      });
    }
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false,
      errorText:''
    });

    this.props.updateEvents(suggestion);
  }
  
  render() {
    return (
      <div className="CitySearch">
        <ErrorAlert text={this.state.errorText} />
        <input
          type="text"
          className="city"
          value={this.state.query}
          placeholder="Search by Location"
          onChange={this.handleInputChanged}
          onFocus={() => { this.listUpdate(); this.setState({showSuggestions: true }) }}
          onBlur={() => { this.setState({showSuggestions: false }) }}
        />
        <ul className="suggestions" style={this.state.showSuggestions ? {}: { display: 'none' }}>
          {this.state.suggestions.map((suggestion) => (
            <li 
              key={suggestion}
              onMouseDown={() => this.handleItemClicked(suggestion)}
            >
              {suggestion}
            </li>
          ))}
          <li onMouseDown={() => this.handleItemClicked("all")}>
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;