export interface Course {
  id: string;
  name: string;
  description: string;
  numberOfLessons: number;
  price: number;
  hasDiscount: boolean;
  discountAmount: number;
  finalPrice: number;
  image: string;
}
