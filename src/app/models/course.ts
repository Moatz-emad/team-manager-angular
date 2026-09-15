export interface Course {
  _id?: string;
  title: string;
  description: string;
  category: string;
  price: number;
  instructor: string;
  image?: string;
}