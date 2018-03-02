import { Request, Response } from 'express';
import User from '../models/User';

export default class UserRouter {

  public all(req: Request, res: Response): void {
    
    User.find()
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
  
  }

  public one(req: Request, res: Response): void {
    const username: string = req.params.username;

    User.findOne({ username })
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
  }

  public create(req: Request, res: Response): void {
    const firstName: string = req.body.firstName;
    const lastName: string = req.body.lastName;
    const username: string = req.body.username;
    const email: string = req.body.email;
    const password: string = req.body.password;

    const user = new User({
      firstName,
      lastName,
      username,
      email,
      password
    });

    user.save()
    .then((data) => {
      res.status(201).json({ data });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });

  }

  public update(req: Request, res: Response): void {
    const username: string = req.params.username;

    User.findOneAndUpdate({ username }, req.body)
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });

  }

  public delete(req: Request, res: Response): void {
    const username: string = req.params.username;

    User.findOneAndRemove({ username })
    .then(() => {
      res.status(204).end();
    })
    .catch((error) => {
      res.status(500).json({ error });
    });

  }
}