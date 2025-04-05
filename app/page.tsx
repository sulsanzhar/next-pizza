import { Container, Title, TopBar, Filters, ProductsGroupList} from "@/components/shared";

export default function Home() {
  return (
      <>
          <Container className="mt-10">
              <Title text="Все пиццы" size="lg" className="font-extrabold" />
          </Container>
          <TopBar />
          <Container className="mt-10 pb-14">
              <div className="flex gap-[80px]">
                  <div className="w-[250px]">
                    <Filters />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col gap-16">
                        <ProductsGroupList
                            title={"Пиццы"}
                            items={[
                                {
                                  id: 1,
                                  name: 'Бургер-пицца',
                                  imageUrl: "https://media.dodostatic.net/image/r:292x292/11ef8faad57aab47be656ed69c86d2c6.jpg",
                                  price: 1200,
                                  items: [{ price: 1200 }]
                                },
                                {
                                    id: 2,
                                    name: 'Бургер-пицца',
                                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11ef8faad57aab47be656ed69c86d2c6.jpg",
                                    price: 1200,
                                    items: [{ price: 1200 }]
                                },
                                {
                                    id: 3,
                                    name: 'Бургер-пицца',
                                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11ef8faad57aab47be656ed69c86d2c6.jpg",
                                    price: 1200,
                                    items: [{ price: 1200 }]
                                },
                                {
                                    id: 4,
                                    name: 'Бургер-пицца',
                                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11ef8faad57aab47be656ed69c86d2c6.jpg",
                                    price: 1200,
                                    items: [{ price: 1200 }]
                                },
                                {
                                    id: 5,
                                    name: 'Бургер-пицца',
                                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11ef8faad57aab47be656ed69c86d2c6.jpg",
                                    price: 1200,
                                    items: [{ price: 1200 }]
                                },
                                {
                                    id: 6,
                                    name: 'Бургер-пицца',
                                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11ef8faad57aab47be656ed69c86d2c6.jpg",
                                    price: 1200,
                                    items: [{ price: 1200 }]
                                }
                            ]}
                         categoryId={1}
                        />
                        <ProductsGroupList
                            title={"Комбо"}
                            items={[
                                {
                                    id: 12,
                                    name: 'Бургер-пицца',
                                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11ef8faad57aab47be656ed69c86d2c6.jpg",
                                    price: 1200,
                                    items: [{ price: 1200 }]
                                },
                                {
                                    id: 22,
                                    name: 'Бургер-пицца',
                                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11ef8faad57aab47be656ed69c86d2c6.jpg",
                                    price: 1200,
                                    items: [{ price: 1200 }]
                                },
                                {
                                    id: 32,
                                    name: 'Бургер-пицца',
                                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11ef8faad57aab47be656ed69c86d2c6.jpg",
                                    price: 1200,
                                    items: [{ price: 1200 }]
                                },
                                {
                                    id: 42,
                                    name: 'Бургер-пицца',
                                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11ef8faad57aab47be656ed69c86d2c6.jpg",
                                    price: 1200,
                                    items: [{ price: 1200 }]
                                },
                                {
                                    id: 52,
                                    name: 'Бургер-пицца',
                                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11ef8faad57aab47be656ed69c86d2c6.jpg",
                                    price: 1200,
                                    items: [{ price: 1200 }]
                                },
                                {
                                    id: 62,
                                    name: 'Бургер-пицца',
                                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11ef8faad57aab47be656ed69c86d2c6.jpg",
                                    price: 1200,
                                    items: [{ price: 1200 }]
                                }
                            ]}
                            categoryId={2}
                        />
                    </div>
                  </div>
              </div >
          </Container>
      </>
  );
}
