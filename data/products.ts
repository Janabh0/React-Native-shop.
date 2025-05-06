interface Product {
  name: string;
  price: string;
  img: string;
}

const products: Product[] = [
  {
    name: "Cafe book",
    price: "10",
    img: "https://sweatpantsandcoffee.com/wp-content/uploads/2019/11/Housing-Works-Bookstore-Cafe-600x400.jpg",
  },
  {
    name: "Coffe book",
    price: "15",
    img: "https://thecreativeadventurer.com/wp-content/uploads/2022/10/IMG_1449.jpg",
  },
  {
    name: "The book tea",
    price: "19.99",
    img: "https://cdn.vox-cdn.com/thumbor/T5giKYwnpXdOUpyN-Gr9SqDx6Oo=/0x0:1242x1512/1200x0/filters:focal(0x0:1242x1512):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/23224352/233563604_10159247165331638_8394971174235672003_n.jpeg",
  },
];

export default products;
