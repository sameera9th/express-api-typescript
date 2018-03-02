import { Request, Response, Router } from 'express';
import UserController from '../controllers/UserController';

class UserRouter {

  public router: Router;
  public UserController: UserController;

  constructor() {
    this.router = Router();
    this.routes();
  }

  // set up our routes
  public routes() {

    this.UserController = new UserController();

    this.router.get('/', this.UserController.all);
    this.router.get('/:username', this.UserController.one);
    this.router.post('/', this.UserController.create);
    this.router.put('/:username', this.UserController.update);
    this.router.delete('/:username', this.UserController.delete);
  }

}

const userRoutes = new UserRouter();
userRoutes.routes();

export default userRoutes.router;