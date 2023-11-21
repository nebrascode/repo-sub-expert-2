import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createListResto } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Your Favorite Restaurants</h2>
      <div id="resto-list" class="list">
      </div>
    </div>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllResto();
    const restaurantsContainer = document.querySelector('#resto-list');

    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = `<div class="resto-item__not__found">
      Tidak ada resto untuk ditampilkan
    </div>`;
    } else {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createListResto(restaurant);
        console.log(restaurant);
      });
    }
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createListResto(restaurant);
    });
  },
};

export default Like;
