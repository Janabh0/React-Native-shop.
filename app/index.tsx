import ProductList from "@/components/ProductList";
import { Image, ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView
      contentContainerStyle={{ alignItems: "center", paddingBottom: 20 }}
    >
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
      </View>

      <ProductList />
    </ScrollView>
  );
}
