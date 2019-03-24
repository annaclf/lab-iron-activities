import React, { Component } from 'react';
import { withActivities } from '../services/ActivityService'
import ActivityCard from './ActivityCard';

class ListActivities extends Component {

  renderActivities = () => {
    return this.props.activities.map((activity, index) => (
      <li key={activity.uuid}>
        <ActivityCard
          activity={activity}
          inCart={this.isInCart(activity.uuid)}
          addToCart={this.props.addToCart}
          addToFavs={this.props.addToFavs}
          isFavorite={this.isInFav(activity.uuid)}
          />
      </li>
    ))
  }

  isInCart = (uuid) => {
    return this.props.cart.some(item => item.uuid === uuid);
  }
  isInFav = (uuid) => {
    return this.props.favs.some(item => item.uuid === uuid);
  }

  render() {
    return (
      <section className="activities container">
        <ul className="activity-list">
          {this.renderActivities()}
        </ul>
      </section>
    );
  }
}

export default withActivities(ListActivities);