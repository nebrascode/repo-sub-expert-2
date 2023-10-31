import listResto from '../views/pages/listResto';
import Detail from '../views/pages/detail';

const routes = {
  '/': listResto, // default page
  '/listResto': listResto,
  '/detail/:id': Detail,
};

export default routes;
