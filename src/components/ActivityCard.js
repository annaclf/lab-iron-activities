import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Button from './Button';
import starIconFull from '../icons/star-full.svg';
import starIconEmpty from '../icons/star-empty.svg';

class ActivityCard extends Component {

  handleAddToCart = () => {
    const {uuid} = this.props.activity;
    this.props.addToCart(uuid);
  }
  handleAddToFavs = () => {
      const {uuid} = this.props.activity;
      this.props.addToFavs(uuid, this.props.isFavorite);
    }

  render() {
    const {uuid, title,description, cover_image_url, retail_price} = this.props.activity;
    return (
      <div className="activity-card">
        <button className="add-to-favs" onClick={this.handleAddToFavs}>
          {this.props.isFavorite ?
            <img src={starIconFull} alt="add to favorites"/>
            :
            <img src={starIconEmpty} alt="add to favorites"/>
          }
        </button>
        <figure>
         <Link to={`/${uuid}`}> <img src={cover_image_url} alt={title}/></Link>
        </figure>
        <h2>{title}</h2>
        <p>{description}</p>
        <span className="price">{retail_price.formatted_value}</span>
        <Button handleClick={this.handleAddToCart} isAdded={this.props.inCart}/>
      </div>
    );
  }
}

export default ActivityCard;