import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { categories } from "../constants";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {categories.map((category, index) => {
          const isActive = activeCategory === category.id;
          let btnClass = isActive ? "bg-gray-600" : "bg-gray-200";
          let textColor = isActive
            ? "font-semibold text-gray-800"
            : "text-gray-500";
          //   return <Text key={index}>{category.name}</Text>;
          return (
            <View className="flex justify-center items-center mr-6" key={index}>
              <TouchableOpacity
                className={`p-1 rounded-full shadow bg-gray-200 ${btnClass}`}
                onPress={() => setActiveCategory(category.id)}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={category.image}
                />
              </TouchableOpacity>
              <Text className={`text-sm ${textColor}`}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
