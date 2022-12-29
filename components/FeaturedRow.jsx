import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description, id }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant Card */}
        <RestaurantCard
          id={123}
          imgUrl="https://imgs.search.brave.com/n933zoxpQd--obX7HCkSDRzeM0CRPvnXUewE4OiCQSE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9kaW5p/bmdwbGF5Ym9vay5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDEvUDE3MDAx/MzIuanBn"
          title="Yo! Chicken"
          ratting={4.5}
          genre="Fast Food"
          address="234 Main St"
          short_description="Dummy description"
          dishes={[]}
          long={20}
          lat={1233}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://imgs.search.brave.com/n933zoxpQd--obX7HCkSDRzeM0CRPvnXUewE4OiCQSE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9kaW5p/bmdwbGF5Ym9vay5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDEvUDE3MDAx/MzIuanBn"
          title="Yo! Chicken"
          ratting={4.5}
          genre="Fast Food"
          address="234 Main St"
          short_description="Dummy description"
          dishes={[]}
          long={20}
          lat={1233}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://imgs.search.brave.com/n933zoxpQd--obX7HCkSDRzeM0CRPvnXUewE4OiCQSE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9kaW5p/bmdwbGF5Ym9vay5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDEvUDE3MDAx/MzIuanBn"
          title="Yo! Chicken"
          ratting={4.5}
          genre="Fast Food"
          address="234 Main St"
          short_description="Dummy description"
          dishes={[]}
          long={20}
          lat={1233}
        />
        <RestaurantCard
          id={123}
          imgUrl="https://imgs.search.brave.com/n933zoxpQd--obX7HCkSDRzeM0CRPvnXUewE4OiCQSE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9kaW5p/bmdwbGF5Ym9vay5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDEvUDE3MDAx/MzIuanBn"
          title="Yo! Chicken"
          ratting={4.5}
          genre="Fast Food"
          address="234 Main St"
          short_description="Dummy description"
          dishes={[]}
          long={20}
          lat={1233}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
