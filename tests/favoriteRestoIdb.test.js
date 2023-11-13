/* eslint-disable no-undef */
import { itActsAsFavoriteRestoModel } from './contracts/favoriteRestoContract';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoIdb.getAllResto()).forEach(async (resto) => {
      await FavoriteRestoIdb.deleteResto(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteRestoIdb);
});
global.structuredClone = (val) => JSON.parse(JSON.stringify(val));
