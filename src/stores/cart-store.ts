import { Cart } from "@/types/cart";
import { Product } from "@/types/product";
import { create } from "zustand";

type States = {
  cart: Cart[];
}

type Actions = {
  upsertCartItem: (product: Product, quantity: number) => void;
}

const initialState: States = {
  cart: []
}

export const useCartStore = create<States & Actions>()(set => ({
  ...initialState,
  upsertCartItem: (product, quantity) => set(state => {

  })
}));