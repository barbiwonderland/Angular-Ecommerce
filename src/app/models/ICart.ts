import { IProducts } from './IProduct';

export interface ICart extends IProducts {
  quantity: number;
}
