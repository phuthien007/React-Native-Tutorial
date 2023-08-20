import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Touchable,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Bars3CenterLeftIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "react-native-heroicons/solid";
import { themeColors } from "../theme";
// import FruitCard from '../components/fruitCard';
import { useNavigation } from "@react-navigation/native";
// import FruitCardSales from '../components/fruitCardSales';
import { featuredFruits, categories } from "../constants";
import FruitCard from "../components/fruitCard";
import FruitCardSales from "../components/fruitCardSales";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("Oranges");
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-orange-50">
      {/* top bar */}
      {/* <View className="navbar mx-5 flex-row justify-between items-center">
          <Bars3CenterLeftIcon size="30" color="black" />
          <TouchableOpacity onPress={()=> navigation.navigate('Cart')} className="p-2 rounded-xl bg-orange-100">
            <ShoppingCartIcon size="25" color="orange" />
          </TouchableOpacity>
        </View> */}
      {/* categories */}
      {/* <View className="mt-4">
          <Text style={{color: themeColors.text}} 
          className="text-2xl tracking-widest font-medium ml-5">Seasonal</Text>
          <Text style={{color: themeColors.text}}  className="text-3xl font-semibold ml-5">Fruits and Vegetables</Text>
          <ScrollView className="mt-8 px-5" horizontal showsHorizontalScrollIndicator={false}>
            {
              categories.map((category, index)=>{
                let isActive = category == activeCategory;
                let textClass = `text-xl   ${isActive? ' font-bold': ''}`;
                let buttonClass = `mr-8 relative rounded-2xl`;
                return (
                  <TouchableOpacity 
                    onPress={()=> setActiveCategory(category)} 
                    key={index} 
                    className={buttonClass}>
                    <Text style={{color: themeColors.text}} className={textClass}>{category}</Text>
                    {
                      isActive? (
                        <Text className="font-extrabold -mt-3 ml-2 text-orange-400">__ _</Text>
                      ):null
                    }
                    
                  </TouchableOpacity>
                )
              })
            }
          </ScrollView>
        </View> */}
      {/* carousel */}
      {/* <View className="carousel mt-8">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              featuredFruits.map((fruit, index)=>{
                return (
                  <FruitCard fruit={fruit} key={index} />
                )
              })
            }
          </ScrollView>
        </View> */}

      {/* hot sales */}
      {/* <View className="mt-8 pl-5 space-y-1">
        <Text style={{color: themeColors.text}} className="text-xl font-bold">Hot Sales</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{overflow: 'visible'}}>
          {
            [...featuredFruits].reverse().map((fruit, index)=>{
              return (
                <FruitCardSales key={index} fruit={fruit} />
              );
            })
          }
        </ScrollView>
        
      </View> */}

      {/* top bar  */}
      <View className="mx-5 flex-row justify-between items-center">
        <Bars3CenterLeftIcon size="30" color="black" />
        <TouchableOpacity
          onPress={() => navigation.navigate("Cart")}
          className="p-2 rounded-xl bg-orange-100"
        >
          <ShoppingCartIcon size="25" color="orange" />
        </TouchableOpacity>
      </View>

      {/* categories  */}
      <View className="mt-4">
        <Text
          style={{ color: themeColors.text }}
          className="text-2xl tracking-widest font-medium ml-5"
        >
          Seasonal
        </Text>
        <Text
          style={{ color: themeColors.text }}
          className="text-3xl font-semibold ml-5"
        >
          Fruits and Vegetables
        </Text>
        <FlatList
          className="mt-8 px-5"
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(category, index) => index.toString()}
          renderItem={({ item, index }) => {
            let isActive = item == activeCategory;
            let textClass = `text-xl   ${isActive ? " font-bold" : ""}`;
            return (
              <TouchableOpacity
                key={index}
                onPress={() => setActiveCategory(item)}
                className="mr-8 relative"
              >
                <Text style={{ color: themeColors.text }} className={textClass}>
                  {item}
                </Text>
                {isActive ? (
                  <Text className="font-extrabold text-orange-400 -mt-3 ml-2">
                    __ _
                  </Text>
                ) : null}
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {/* Fruit carousel */}
      <View className="mt-8">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featuredFruits.map((fruit, index) => {
            return <FruitCard fruit={fruit} key={index} />;
          })}
        </ScrollView>
      </View>

      {/* Hot sales */}
      <View className="mt-8 pl-5 space-y-1">
        <Text style={{ color: themeColors.text }} className="text-xl font-bold">
          Hot Sales
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            overflow: "visible",
          }}
        >
          {[...featuredFruits].reverse().map((fruit, index) => {
            return <FruitCardSales fruit={fruit} key={index} />;
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
