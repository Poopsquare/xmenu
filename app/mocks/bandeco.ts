import { Menu } from "../types/menu";

export const BANDECO: Menu = {
  id: 1,
  slug: "bandeco",
  name: "Bandeco",
  categories: [
    {
      id: 1,
      name: "Cervejas",
      items: [
        { id: 1, name: "Skol", price: 990 },
        { id: 2, name: "Brahma", price: 990 },
        { id: 3, name: "Original", price: 1090 },
        { id: 4, name: "Heineken", price: 1090 },
      ],
    },
    {
      id: 2,
      name: "Petiscos",
      items: [
        {
          id: 5,
          name: "Larica",
          price: 4500,
          description: "Linguiça, Carne, Batata Frita",
        },
        {
          id: 6,
          name: "Laricão",
          price: 5700,
          description: "Linguiça, Carne, Frango, Batata Frita, Mandioca Frita",
        },
        {
          id: 7,
          name: "Larica Total",
          price: 6100,
          description:
            "Linguiça, Carne, Frango, Pernil, Medalhão, Batata Frita, Mandioca Frita, Queijo Coalho",
        },
        { id: 8, name: "Pão de Alho", price: 1290 },
      ],
    },
    {
      id: 3,
      name: "Bebidas",
      items: [
        { id: 9, name: "Coca-Cola", price: 790 },
        { id: 10, name: "Guaraná", price: 790 },
        { id: 11, name: "Aguá Tônica", price: 790 },
        { id: 12, name: "Aguá", price: 290 },
      ],
    },
  ],
};
