import CONFIG from '../../globals/config';

const createDetailRestoTemplate = (restaurant) => `
    <h2 class="restaurant__title">${restaurant.name}</h2>
    <img class="restaurant__poster" src="${CONFIG.IMAGE_BASE_URL}/${restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous"/>
    <h3>Description</h3>
    <p>${restaurant.description}</p>
    <p><strong>#${restaurant.categories.map((kategori) => kategori.name)}</strong></p>
    <h3>Information</h3>
    <div class="restaurant__info">
      <p><strong>City:</strong>${restaurant.city}</p>
      <p><strong>Adress:</strong>${restaurant.address} minutes</p>
      <p><strong>Rating:</strong>${restaurant.rating}⭐️</p>
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

  <div class="restaurant__review">
    <h3>Reviews</h3>
    <div class="reviews">
      ${restaurant.customerReviews.map((review) => `
        <div class="card-review">
          <p><strong>Name:</strong> ${review.name}</p>
          <p><strong>Review:</strong> ${review.review}</p>
          <p><strong>Date:</strong> ${review.date}</p>
        </div>
      `).join('')}
    </div>
  </div>
`;

const createListResto = (restaurant) => ` 
  <div class="card-list">
    <img class="img-resto" src="${CONFIG.IMAGE_BASE_URL}/${restaurant.pictureId}" crossorigin="anonymous" alt="resto image">
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

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
export {
  createDetailRestoTemplate,
  createListResto,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
