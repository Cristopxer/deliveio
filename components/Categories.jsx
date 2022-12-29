import { View, Text, ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {/* Category Card */}
      <CategoryCard imgUrl="https://imgs.search.brave.com/n933zoxpQd--obX7HCkSDRzeM0CRPvnXUewE4OiCQSE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9kaW5p/bmdwbGF5Ym9vay5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDEvUDE3MDAx/MzIuanBn" title="Testing" />
      <CategoryCard imgUrl="https://imgs.search.brave.com/n933zoxpQd--obX7HCkSDRzeM0CRPvnXUewE4OiCQSE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9kaW5p/bmdwbGF5Ym9vay5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDEvUDE3MDAx/MzIuanBn" title="Testing" />
      <CategoryCard imgUrl="https://imgs.search.brave.com/n933zoxpQd--obX7HCkSDRzeM0CRPvnXUewE4OiCQSE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9kaW5p/bmdwbGF5Ym9vay5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDEvUDE3MDAx/MzIuanBn" title="Testing" />
      <CategoryCard imgUrl="https://imgs.search.brave.com/n933zoxpQd--obX7HCkSDRzeM0CRPvnXUewE4OiCQSE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9kaW5p/bmdwbGF5Ym9vay5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDEvUDE3MDAx/MzIuanBn" title="Testing" />
      <CategoryCard imgUrl="https://imgs.search.brave.com/n933zoxpQd--obX7HCkSDRzeM0CRPvnXUewE4OiCQSE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9kaW5p/bmdwbGF5Ym9vay5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDEvUDE3MDAx/MzIuanBn" title="Testing" />
      <CategoryCard imgUrl="https://imgs.search.brave.com/n933zoxpQd--obX7HCkSDRzeM0CRPvnXUewE4OiCQSE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9kaW5p/bmdwbGF5Ym9vay5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDEvUDE3MDAx/MzIuanBn" title="Testing" />
      <CategoryCard imgUrl="https://imgs.search.brave.com/n933zoxpQd--obX7HCkSDRzeM0CRPvnXUewE4OiCQSE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9kaW5p/bmdwbGF5Ym9vay5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDEvUDE3MDAx/MzIuanBn" title="Testing" />
    </ScrollView>
  );
};

export default Categories;
