import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

const SignUpScreen = () => {
  const navigation = useNavigation();
  return (
    // <SafeAreaView className="flex-1 bg-white pb-4">
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-white pb-4"
      style={{ backgroundColor: themeColors.bg }}
    >
      <SafeAreaView className="flex">
        <View className="flex-row justify-row">
          <TouchableOpacity
            className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
            onPress={() => navigation.goBack()}
          >
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/images/signup.png")}
            style={{ width: 200, height: 200 }}
          />
        </View>
      </SafeAreaView>
      <View
        className="flex-1 bg-white px-8 pt-8 pb-4"
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
      >
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Full Name</Text>

          <TextInput
            className="p-4  bg-gray-100 text-gray-700 rounded-2xl mb-3"
            value="tai@gmail.com"
            placeholder="Enter email"
          />
          <Text className="text-gray-700 ml-4">Email Address</Text>

          <TextInput
            className="p-4  bg-gray-100 text-gray-700 rounded-2xl mb-3"
            value="tai@gmail.com"
            placeholder="Enter email"
          />
          <Text className="text-gray-700 ml-4">Password</Text>
          <TextInput
            className="p-4  bg-gray-100 text-gray-700 rounded-2xl mb-7"
            secureTextEntry
            value="123456"
            placeholder="Enter password"
          />

          <TouchableOpacity className="py-3 bg-yellow-400 rounded-xl">
            <Text className="font-xl font-bold text-center text-gray-700">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <Text className="text-xl text-gray-700 font-bold text-center py-5">
          OR
        </Text>
        <View className="flex-row justify-center space-x-12">
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require("../assets/icons/google.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require("../assets/icons/apple.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require("../assets/icons/facebook.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Text className="text-gray-500 font-semibold">
            Already have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text className="font-semibold text-yellow-400">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    // </SafeAreaView>
  );
};

export default SignUpScreen;
