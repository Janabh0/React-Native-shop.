import products from "@/data/products";
import { Image, StyleSheet, Text, View } from "react-native";

const ProductItem = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      <View style={{ margin: 10, alignItems: "center" }}>
        <Image
          source={{ uri: products[0].img }}
          style={{ width: 140, height: 100, borderRadius: 10 }}
        />
        <Text style={{ marginTop: 5 }}>{products[0].name}</Text>
        <Text>{products[0].price}</Text>
      </View>

      <View style={{ margin: 10, alignItems: "center" }}>
        <Image
          source={{ uri: products[1].img }}
          style={{ width: 140, height: 100, borderRadius: 10 }}
        />
        <Text style={{ marginTop: 5 }}>{products[1].name}</Text>
        <Text>{products[1].price}</Text>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
