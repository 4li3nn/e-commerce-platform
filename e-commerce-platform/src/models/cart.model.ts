import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Cart extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'array',
    itemType: 'string',
    default: [],
  })
  items?: string[];

  @property({
    type: 'number',
    default: 0,
  })
  totalPrice?: number;

  @property({
    type: 'string',
    required: true,
  })
  customerId: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Cart>) {
    super(data);
  }
}

export interface CartRelations {
  // describe navigational properties here
}

export type CartWithRelations = Cart & CartRelations;
