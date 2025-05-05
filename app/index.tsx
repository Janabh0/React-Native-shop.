import products from "@/data/products";
import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{ paddingTop: 10, alignItems: "center" }}>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>
        Welcome to Book Cafe!
      </Text>
      <Text style={{ padding: 10 }}>We are a bookstore & cafe</Text>
      <Image
        source={{
          uri: "https://coffeeshopstartups.com/wp-content/uploads/2015/04/Start-a-Coffee-Shop-Bookstore-Cafe-Bookstore.jpg",
        }}
        style={{ width: 300, height: 200, padding: 30 }}
      />

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
    </View>
  );
}
