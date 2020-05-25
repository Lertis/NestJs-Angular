import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../entity/product.interface';

export const productsLoadRequest = createAction('Products.Load.Request', props<{ url: string }>());
export const productsLoaded = createAction('Products.Loaded', props<{ products: IProduct[] }>());
