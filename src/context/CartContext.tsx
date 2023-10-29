import { useContext, createContext, useState } from "react";
import React, { ReactNode } from "react";
import { LocalStorage } from "../hooks/LocalStorage";

type cartProviderProps = {
  children: ReactNode;
};

type CartContext = {
  getItemCount: (id: string) => number;
  increaseItemCount: (id: string) => void;
  decreaseItemCount: (id: string) => void;
  removeItemCount: (id: string) => void;
  cartItems:CartItem[]
};

type CartItem = {
  id: string;
  quantity: number;
};

const CartContext = createContext({} as CartContext);

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: cartProviderProps) {
  const [cartItems, setCartItems] = LocalStorage<CartItem[]>("cart",[]);

  function getItemCount(id: string) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseItemCount(id: string) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseItemCount(id: string) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeItemCount(id: string) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <CartContext.Provider
      value={{
        getItemCount,
        increaseItemCount,
        decreaseItemCount,
        removeItemCount,
        cartItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
