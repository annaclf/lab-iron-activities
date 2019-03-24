import React, { Component } from 'react';
import data from '../data/data.json';
const ActivityContext = React.createContext();
export const withActivities = (Comp) => {
  return class ActvitiesConsumer extends Component {
    render() {
      return (
        <ActivityContext.Consumer>
          { (value) => (
              <Comp
                activities={value.activities}
                cart={value.cart}
                favs={value.favorites}
                addToCart={value.addToCart}
                deleteFromCart={value.deleteFromCart}
                addToFavs={value.addToFavs}
                getOne={value.getOne}
                {...this.props}
              />
            )
          }
        </ActivityContext.Consumer>
      )
    }
  }
}

class ActivityService extends Component {

  state = {
    activities: data,
    cart: [],
    favorites: []
  }

  addToCart = (uuid) => {
    const {activities, cart} = this.state;
    const activity = activities.find((a) => a.uuid === uuid);
    this.setState({
      cart: [...cart, activity],
    })
  }

  toggleToFavs = (uuid, isFav) => {
    const {activities, favorites} = this.state;
    if(!isFav){
      const activity = activities.find((a) => a.uuid === uuid);
      this.setState({
        favorites: [...favorites, activity],
      })
    } else{
      const favorites = this.state.favorites.filter((fav) => fav.uuid !== uuid)
      this.setState({
        favorites: favorites,
      })
    }
  }

  deleteFromCart = (uuid) => {
    const cart = this.state.cart.filter(item => (
      item.uuid !== uuid
    ));
    this.setState({
      cart,
    })
  }

  getOneActivity = (uuid) => {
    return this.state.activities.find(activity => activity.uuid === uuid);
  }

  render() {
    return (
      <ActivityContext.Provider
        value={{
          activities: this.state.activities,
          cart: this.state.cart,
          favorites: this.state.favorites,
          addToCart: this.addToCart,
          deleteFromCart: this.deleteFromCart,
          addToFavs: this.toggleToFavs,
          getOne: this.getOneActivity,
        }} >
        {this.props.children}
      </ActivityContext.Provider>
    );
  }
}

export default ActivityService;