import { Repository } from 'typeorm';
import { Product } from './product.entity';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    all(): Promise<Product[]>;
}
