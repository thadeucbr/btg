import { Client } from 'src/client/entities/client.entity';
import { Product } from 'src/product/entities/product.entity';

export class CreateOrderDto {
  clientCode: Pick<Client, 'id'>;
  itens: Array<Product>;
  total: number;
}
