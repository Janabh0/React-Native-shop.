import { Image, Text, View } from "react-native";

interface ProductProps {
  name: string;
  img: string;
  price: string;
}

const ProductItem = ({ name, img, price }: ProductProps) => {
  return (
    <View style={{ margin: 10, alignItems: "center" }}>
      <Image
        source={{ uri: img }}
        style={{ width: 110, height: 80, borderRadius: 10 }}
      />
      <Text style={{ marginTop: 5 }}>{name}</Text>
      <Text>{price}</Text>
    </View>
  );
};

export default ProductItem;
