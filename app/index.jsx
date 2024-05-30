import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { Redirect, router } from "expo-router";
import { useGlobalContext } from "../context/GlobalProvider";

export default function App() {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/home" />;
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          height: "101%",
        }}
      >
        <View className="items-center justify-center min-h-[85vh] w-full px-4">
          <Image
            source={images.logo}
            className="w-[300px] h-[200px] mb-[-40px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[300px] w-full h-[250px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl font-bold text-center text-white">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Imagingly</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[140px] h-[15px] absolute -bottom-3 right-5"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where creativity meets innovation: Embark on a journey of limitless
            exploration wiht Imagingly
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
