
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs"
import { getAllProducts } from "@/service/product"
import { Product } from "@/types/product";

type Tab = {
  title: string;
  value: string;
  products: Product[];
}

export const ProductsTab = async () => {
  const products = await getAllProducts();

  const tabs: Tab[] = [
    {
      title: 'Sushi',
      value: 'sushi',
      products: []
    },
    {
      title: 'Temaki',
      value: 'temaki',
      products: []
    }
    ,
    {
      title: 'Combinados',
      value: 'pack',
      products: []
    },
    {
      title: 'Bebidas',
      value: 'beverage',
      products: []
    }
  ];
  
  return (
    <>
      <Tabs defaultValue="sushi">
        <TabsList className="w-full flex">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="flex-1"
            >
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent value={tab.value} className="mt-6">
            Conteudo da tab 1
          </TabsContent>
        ))}
      </Tabs>
    </>
  )
}


