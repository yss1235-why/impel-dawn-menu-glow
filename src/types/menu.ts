export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  ingredients: string[];
  prepTime: string;
  spiceLevel: number;
  rating: number;
  emoji: string;
}