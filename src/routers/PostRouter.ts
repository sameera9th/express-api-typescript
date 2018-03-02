import { Request, Response, Router } from 'express';
import PostController from '../controllers/PostController';

export class PostRouter {

  public router: Router;
  public PostController: PostController;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes() {
    this.PostController = new PostController();

    this.router.get('/', this.PostController.all);
    this.router.get('/:slug', this.PostController.one);
    this.router.post('/', this.PostController.create);
    this.router.put('/:slug', this.PostController.update);
    this.router.delete('/:slug', this.PostController.delete);
  }

}

const postRoutes = new PostRouter();
postRoutes.routes();

export default postRoutes.router;