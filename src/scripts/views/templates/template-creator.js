import CONFIG from '../../globals/config';

const createDetailRestoTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.IMAGE_BASE_URL}/${restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <p>${restaurant.description}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address} minutes</p>
    <h4>Categories</h4>
    <p>${restaurant.categories.name} minutes</p>
    <h4>Rating</h4>
    <p>⭐️ ${restaurant.rating}</p>
  </div>
  <div class="restaurant__review">
    <h3>Review</h3>
    <p>${restaurant.customerReviews}</p>
    
  </div>
  <div class="restaurant__menu">
    <h3>Menus</h3>
    <table>
      <tr>
        <th>Foods</th>
        <td><p>${restaurant.menus.foods.map((food) => food.name)}</p></td>
      </tr>
      <tr>
        <th>Drinks</th>
        <td><p>${restaurant.menus.drinks.map((drink) => drink.name)}</p></td>
      </tr>
    </table>
  </div>
`;

const createListResto = (restaurant) => ` 
  <div class="card-list">
    <img class="img-resto" src="${CONFIG.IMAGE_BASE_URL}/${restaurant.pictureId}" alt="resto image">
    <div class="card-body">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p id="description">${restaurant.description}</p>
      <div class="info">
          <p>⭐️ : ${restaurant.rating}</p>
          <p>📍: ${restaurant.city}</p>
      </div>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
export {
  createDetailRestoTemplate,
  createListResto,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
