import listResto from '../views/pages/listResto';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': listResto, // default page
  '/listResto': listResto,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
