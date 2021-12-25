import React from "react";
import smiley from "./smiley.jpg";
import sadSmiley from "./sadSmiley.jpg";
const smileyImgs = { smiley: smiley, sadSmiley: sadSmiley };

class Counter extends React.Component {
  render() {
    return (
      <div name={this.props.name}>
        {<img className="Img" src={smileyImgs[this.props.name]} alt=""></img>}:
        {this.props.count}
      </div>
    );
  }
}

export default Counter;
