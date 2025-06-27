import { Cart } from "@/types/cart"

type Props = {
  cartItem: Cart
}

const CartItemQuantity = ({ cartItem }: Props) => {
  return (
    <div>
      {cartItem.quantity}
    </div>
  )
}

export default CartItemQuantity
