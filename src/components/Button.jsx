import React from "react";
import like from "./like.jpg";
import disLIke from "./disLike.jpg";

const LikeImgs = { like: like, dislike: disLIke };

class Button extends React.Component {
  handleClick = () => {
    this.props.handleClickFunc();
    this.props.fetchCardFunc();
    console.log(this.props.name);
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        <img className="Img" src={LikeImgs[this.props.name]} alt=""></img>
      </button>
    );
  }
}

export default Button;
