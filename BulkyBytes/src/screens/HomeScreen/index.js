import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import RestaurantItem from '../../components/RestaurantItem';
import restaurants from '../../../assets/data/restaurants.json'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList data = {restaurants}
       renderItem={ ({item}) => <RestaurantItem restaurant={item}/>} 
       showsVerticalScrollIndicator = {false}
       />
    </View>
  );
}

const styles = StyleSheet.create({
});
