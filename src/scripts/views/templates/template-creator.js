import CONFIG from '../../globals/config';

const createDetailRestoTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <p>${restaurant.description}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address} minutes</p>
    <h4>Categories</h4>
    <p>${restaurant.categories} minutes</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Overview</h3>
    <p>${restaurant.overview}</p>
  </div>
`;

const createListResto = (restaurant) => ` 
  <div class="card-list">
    <img class="img-resto" src="${CONFIG.IMAGE_BASE_URL.pictureId}" alt="resto image">
    <div class="card-body">
      <h3>${restaurant.name}</h3>
      <p id="description">${restaurant.description}</p>
      <div class="info">
          <p>Rating : ${restaurant.rating}</p>
          <p>Kota : ${restaurant.city}</p>
      </div>
    </div>
  </div>
`;
export { createDetailRestoTemplate, createListResto };
