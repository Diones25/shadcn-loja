"use client"
import { Product } from '@/types/product'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { useCartStore } from '@/stores/cart-store'

type Props = {
  product: Product
}

const ProductItem = ({ product }: Props) => {
  const { upsertCartItem } = useCartStore(state => state)

  const handleAddButton = () => {
    upsertCartItem(product, 1);

    toast("Adicionado ao carrinho", {
      description: product.name,
      action: {
        label: 'Fechar',
        onClick: () => {
          
        }
      }
    });
  }

  return (
    <div>
      <div className='rounded-md overflow-hidden'>
        <img
          src={product.image}
          alt={product.name}
          className='w-full h-32 object-cover'
        />
      </div>
      <div className='mt-3 flex flex-col gap-2'>
        <p className='text-lg'>{product.name}</p>
        <p className='text-sm opacity-50'>R$ {product.price.toFixed(2)}</p>
        <Button
          className='cursor-pointer'
          variant={'outline'}
          onClick={handleAddButton}
        >
          Adicionar
        </Button>
      </div>
    </div>
  )
}

export default ProductItem
