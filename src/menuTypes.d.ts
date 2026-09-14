export interface MenuItem{
    id: number,
  name: string,
  discountPercent?: number,
  availableFrom?: Date,
  course: "starter" | "main" | "dessert"
  price: number,
  nutrition: {
    calories: number,
    allergens: string[],
  },
}

export interface ComboDeal{
    id: number,
  name: string,
  items: MenuItem[],
  price: number,
}

export type OrderLine = MenuItem | ComboDeal;

export type KitchenTicket = Readonly<Pick<MenuItem, "name" | "course">>;

export type AllergyCard = Omit<MenuItem, "nutrition"> & {
    warning: string;
};