import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import { XMarkIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import MapView, { Marker } from "react-native-maps";
import * as Progress from "react-native-progress";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const githubLink = "https://github.com/Cristopxer";

  const onPress = () =>
    Linking.canOpenURL(githubLink).then(() => {
      Linking.openURL(githubLink);
    });
  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="justify-between flex-row items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-500">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={{ uri: "https://links.papareact.com/fls" }}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />

          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>

      <SafeAreaView className="bg-white flex-row items-center space-x-3 h-24">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-gray-400">Developed with 💙 by</Text>
          <Text className="text-lg">Cristopher Ortiz</Text>
        </View>
        <TouchableOpacity
          className="bg-[#00CCBB] rounded-sm mr-2 p-2 flex-1 items-center"
          onPress={onPress}
        >
          <Text className="text-white text-lg font-bold">Github</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
