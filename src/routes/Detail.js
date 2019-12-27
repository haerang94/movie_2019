import React, { Component } from "react";

class Detail extends Component {
  componentDidMount() {
    const { location, history } = this.props;
    //console.log(location);
    if (location.state === undefined) {
      //메인화면으로 돌아가게 한다
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
