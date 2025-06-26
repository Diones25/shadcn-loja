"use client"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { RocketIcon } from "lucide-react"
import { useCartStore } from "@/stores/cart-store"
import CartItem from "./item"

export const CartSidebar = () => {
  const { cart } = useCartStore(state => state);
  let subtotal = 0;
  for(let item of cart) {
    subtotal += item.quantity * item.product.price;
  }

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="relative">
            <RocketIcon className="mr-2" />
            <p>Carrinho</p>
            {cart.length > 0 && 
              <div
                className="flex justify-center items-center absolute size-4 bg-red-600 rounded-full -right-1 -top-1"
              >
                <span className="text-xs text-white">{cart.length}</span>
              </div>
            }
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Carrinho</SheetTitle>
          </SheetHeader>
          <div className="px-5">
            <div className="flex flex-col gap-5 my-3">
              {cart.map(item => (
                <CartItem
                  key={item.product.id}
                  item={item}
                />
              ))}
            </div>

            <Separator className="my-4" />

            <div className="flex justify-between items-center text-xs">
              <div>Subtotal:</div>
              <div>R${subtotal.toFixed(2)}</div>
            </div>

            <Separator className="my-4" />
          </div>

          <div className="text-center">
            <Button
              className="cursor-pointer"
              disabled={cart.length === 0}
            >
              Finalizar compra
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}