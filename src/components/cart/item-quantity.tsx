import { useCartStore } from "@/stores/cart-store"
import { Cart } from "@/types/cart"
import { Button } from "../ui/button"
import { MinusIcon, PlusIcon } from "lucide-react"

type Props = {
  cartItem: Cart
}

const CartItemQuantity = ({ cartItem }: Props) => {
  const { upsertCartItem } = useCartStore(state => state)
  return (
    <div className="flex items-center gap-2">
      <Button
        variant={"outline"}
        size={"icon"}
        className="size-6 cursor-pointer"
        onClick={() => upsertCartItem(cartItem.product, 1)}
      >
        <PlusIcon className="size-3" />
      </Button>
      <div className="text-xs">{cartItem.quantity}</div>
      <Button
        variant={"outline"}
        size={"icon"}
        className="size-6 cursor-pointer"
        onClick={() => upsertCartItem(cartItem.product, -1)}
      >
        <MinusIcon className="size-3" />
      </Button>
    </div>
  )
}

export default CartItemQuantity
