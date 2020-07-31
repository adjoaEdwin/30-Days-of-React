import React, { Component } from "react";
import { connect } from 'react-redux'

import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import { setSearchField, requestRobots } from "./actions";

const mapStateToProps = state => {
  return {
    searchfield: state.searchRobots.searchfield,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRobotsRequest: () => dispatch(requestRobots())
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRobotsRequest()
  }


  render() {
    const { searchfield, onSearchChange, robots, isPending
    } = this.props;
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchfield.toLowerCase())
    );

    return isPending ? <h1>Loading...</h1> : (
      <div className="tc">
        <h2>RoboFriends</h2>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
