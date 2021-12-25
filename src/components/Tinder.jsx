import React from "react";
import Button from "./Button";
import Counter from "./Counter";
import Item from "./Item";
import cardDraw from "./cardDraw";
import "./style.css";

class Tinder extends React.Component {
  state = { currItem: "", currItemNum: 0, likes: 0, disLikes: 0 };

  handlelikes = () => {
    this.setState((prev) => {
      return { likes: prev.likes + 1 };
    });
  };
  handledislikes = () => {
    this.setState((prev) => {
      return { disLikes: prev.disLikes + 1 };
    });
  };

  getCard = async () => {
    const response = await cardDraw.get();
    const img = response.data.cards[0].image;
    this.setState({
      currItem: img,
    });
  };

  componentDidMount() {
    this.getCard();
  }

  render() {
    return (
      <div className="main-container">
        <div className="left">
          <Button
            fetchCardFunc={this.getCard}
            name="like"
            handleClickFunc={this.handlelikes}
          ></Button>
          <Counter name="smiley" count={this.state.likes}></Counter>
        </div>
        <div className="middle">
          <Item image={this.state.currItem}></Item>
        </div>
        <div className="right">
          <Button
            fetchCardFunc={this.getCard}
            name="dislike"
            handleClickFunc={this.handledislikes}
          ></Button>
          <Counter name="sadSmiley" count={this.state.disLikes}></Counter>
        </div>
      </div>
    );
  }
}

export default Tinder;
