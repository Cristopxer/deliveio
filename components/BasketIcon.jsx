import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { formatCurrency } from "react-native-format-currency";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);

  const basketTotal = useSelector(selectBasketTotal);

  const navigation = useNavigation();

  const basketTotalFormatted = formatCurrency({
    amount: basketTotal,
    code: "USD",
  });

  if (items.length === 0) return null;

  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="bg-[#00CCBB] mx-5 p-4 rounded-lg flex-row items-center space-x-1"
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          {basketTotalFormatted[0]}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
