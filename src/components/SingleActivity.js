import React from 'react';
import ActivityCard from './ActivityCard';
import {withActivities} from '../services/ActivityService';

const SingleActivity = (props) => {
  const {uuid} = props.match.params;
  const activeActivity = props.getOne(uuid);
  const isInCart = (uuid) => props.cart.some(item => item.uuid === uuid);
  const isInFav = (uuid) => props.favs.some(item => item.uuid === uuid)
  return (
    <article className="container single-activity">
      <ActivityCard
          activity={activeActivity}
          inCart={isInCart(uuid)}
          addToCart={props.addToCart}
          addToFavs={props.addToFavs}
          isFavorite={isInFav(uuid)}
          />
    </article>
  );
}
export default withActivities(SingleActivity);