import {Request, Response} from 'express';

export const home = (req: Request, res:Response) => {
  res.send('home sim!')
  //res.render('pages/pege')
}
export const dogs = (req: Request, res:Response) => {
  //res.render('pages/pege')
}
export const cats = (req: Request, res:Response) => {
  //res.render('pages/pege')
}
export const fishes = (req: Request, res:Response) => {
  //res.render('pages/pege')
}