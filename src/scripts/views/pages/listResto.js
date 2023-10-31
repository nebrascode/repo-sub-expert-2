import TheRestoDbSource from '../../data/therestodb-source';
import { createListResto } from '../templates/template-creator';

const listResto = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Now Playing in Cinema</h2>
        <div id="resto-list" class="list">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const data = await TheRestoDbSource.listResto();
    const listRestoElement = document.querySelector('#list-resto');
    listRestoElement.innerHTML = '';

    data.restaurants.forEach((restaurant) => {
      listRestoElement.innerHTML += createListResto(restaurant);
    });
  },
};

export default listResto;
