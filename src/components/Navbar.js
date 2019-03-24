import React, { Component } from 'react';
import {withActivities} from '../services/ActivityService';
import {withRouter} from 'react-router-dom';
import porfolioIcon from '../icons/portfolio.svg';
import starIconFull from '../icons/star-full.svg';

class Navbar extends Component {

  state = {
    showCart: false,
  }

  renderCart = () => {
    return (
      this.props.cart.map(cartItem => (
        <li className="cart-item" key={cartItem.uuid}>
          <button onClick={() => this.props.deleteFromCart(cartItem.uuid)}>✕</button>
          <figure>
            <img src={cartItem.cover_image_url} alt={cartItem.title}/>
          </figure>
          <h2>{cartItem.title}</h2>
          <span className="price">{cartItem.retail_price.formatted_value}</span>
        </li>
      ))
    )
  }

  toggleCart = () => {
    this.setState({
      showCart: !this.state.showCart,
    })
  }

  render() {
    return (
      <nav>
        <ul className="container top-nav">
          <li className="back">
            <button onClick={() => this.props.history.goBack()}>Brand</button>
          </li>
          <li className="nav-icon nav-icon__cart">
            <img onClick={this.toggleCart} src={porfolioIcon} alt="icon"/>
            <span className="cart-count">{this.props.cart.length}</span>
          </li>
          <li className="nav-icon">
            <span className="favs-count">{this.props.favs.length}</span>
            <img src={starIconFull} alt="icon"/>
          </li>
        </ul>
        {this.state.showCart && <ul className="cart">
        {this.props.cart.length ?
          this.renderCart() :
          <p>Your cart is empty</p>
        }
        </ul>}

      </nav>
    );
  }
}

export default withRouter(withActivities(Navbar));