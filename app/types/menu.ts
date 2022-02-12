export interface Menu {
  id: number;
  slug: string;
  name: string;
  categories: Category[];
}

export interface Category {
  id: number;
  name: string;
  items: Item[];
}

export interface Item {
  id: number;
  name: string;
  price: number;
  description?: string;
}
