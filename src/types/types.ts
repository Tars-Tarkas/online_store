export interface IinitialState {
  products: Product[];
  loading: boolean;
  error: string | undefined;

}

export interface Product {
  id: number;
  title: string;
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  images: [];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
}
