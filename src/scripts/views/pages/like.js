import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createListResto } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Restaurants</h2>
      <div id="resto-list" class="list">
      </div>
    </div>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllResto();
    const listRestoElement = document.querySelector('#resto-list');
    restaurants.forEach((restaurant) => {
      listRestoElement.innerHTML += createListResto(restaurant);
    });
  },
};

export default Like;
