import React from "react";

class Item extends React.Component {
  nextImage = (i) => {
    const arr = [
      `img-1`,
      `img-2`,
      `img-3`,
      `img-4`,
      `img-5`,
      `img-6`,
      `img- 7`,
      `img- 8`,
      `img- 9`,
    ];
    return arr[i];
  };

  render() {
    return (
      <div>
        <img src={this.props.image} alt={1} />
      </div>
    );
  }
}

export default Item;
