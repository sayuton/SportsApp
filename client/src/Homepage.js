import React, { Component } from "react";
import EventList from "./EventList";
import EventFilter from "./EventFilter";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      searchText: "",
      filterType: ""
    };
  }

  componentDidMount() {
    fetch("/events")
      .then(res => res.json())
      .then(events => this.setState({ events: events }));
  }

  handleSearchText = e => {
    this.setState({
      searchText: e.target.value
    });
  };

  handleFilterType = e => {
    this.setState({
      filterType: e.target.value
    });
  };

  render() {
    return (
      <div>
        <EventFilter
          searchText={this.state.searchText}
          filterType={this.state.filterType}
          handleSearchText={this.handleSearchText}
          handleFilterType={this.handleFilterType}
        />
        <EventList
          events={this.state.events}
          searchText={this.state.searchText}
          filterType={this.state.filterType}
        />
      </div>
    );
  }
}

export default Homepage;