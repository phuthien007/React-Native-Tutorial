import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const FruitCardSales = ({ fruit }) => {
  const natigation = useNavigation();
  return (
    <View className="mr-6">
      <TouchableOpacity
        onPress={() =>
          natigation.navigate("Product", { ...fruit, color: fruit.color(1) })
        }
        className="flex-row justify-center -mb-9 shadow-lg z-20"
      >
        <Image
          source={fruit.image}
          style={{
            height: 65,
            width: 65,
            shadowColor: fruit.shadow,
            overflow: "visible",

            shadowRadius: 15,
            shadowOffset: { width: 0, height: 20 },
            shadowOpacity: 0.4,
          }}
        />
      </TouchableOpacity>

      <View
        style={{
          backgroundColor: fruit.color(0.4),
          height: 75,
          width: 80,
        }}
        className="rounded-3xl flex justify-end text-center"
      >
        <Text className="font-semibold text-center text-gray-800 pd-3 tracking-wide">
          {fruit.price}
        </Text>
      </View>
    </View>
  );
};

export default FruitCardSales;
