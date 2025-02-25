import {
  Container,
  Filters,
  Title,
  TopBar,
  ProductsGroupList,
} from "@/components/shared";

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
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "dffggg",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0194d4f6904975a5a6427e297591980d.avif",
                    price: 50,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "dffggg",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0194d4f6904975a5a6427e297591980d.avif",
                    price: 50,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "dffggg",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0194d4f6904975a5a6427e297591980d.avif",
                    price: 50,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "dffggg",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0194d4f6904975a5a6427e297591980d.avif",
                    price: 50,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "dffggg",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0194d4f6904975a5a6427e297591980d.avif",
                    price: 50,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: "dffggg",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0194d4f6904975a5a6427e297591980d.avif",
                    price: 50,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "dffggg",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0194d4f6904975a5a6427e297591980d.avif",
                    price: 50,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "dffggg",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0194d4f6904975a5a6427e297591980d.avif",
                    price: 50,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "dffggg",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0194d4f6904975a5a6427e297591980d.avif",
                    price: 50,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "dffggg",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0194d4f6904975a5a6427e297591980d.avif",
                    price: 50,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
