/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked resto', ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found');
});

Scenario('liking one resto', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.restaurant__title', 10);
  const firstResto = locate('.restaurant__title').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.waitForElement('.restaurant__title', 10);
  const likedRestoTitle = await I.grabTextFrom('.restaurant__title');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.restaurant__title', 10);

  const firstRestaurant = locate('.restaurant__title').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  I.forceClick(firstRestaurant);

  I.waitForElement('#likeButton', 10);
  I.forceClick('#likeButton');

  I.amOnPage('/#/like');
  I.waitForElement('.restaurant__title', 10);
  const likedRestaurants = locate('.restaurant__title').first();
  const likedRestaurantName = await I.grabTextFrom(likedRestaurants);

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.forceClick(likedRestaurants);

  I.waitForElement('#likeButton', 10);
  I.forceClick('#likeButton');

  I.amOnPage('/#/like');
  I.dontSeeElement('.restaurant__title');
  I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found');
});
