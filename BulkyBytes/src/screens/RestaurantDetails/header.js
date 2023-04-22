import {View, Text, Image, FlatList} from 'react-native';
import {StyleSheet} from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';
import {Ionicons} from "@expo/vector-icons";
import DishListItem from '../../components/DishListItem';
import { Header } from 'react-native/Libraries/NewAppScreen';

const restaurant = restaurants[0];
("");

const RestaurantHeader = ({restaurant}) => {
    return (
        <View style = {styles.page}>
            <Image source={{ uri : restaurant.image}} style={styles.image} />
            <View style ={styles.container}>
            <Text style={styles.title}>{restaurant.name}</Text>
            <Text style ={styles.subtitle}>Delivery Fee £{restaurant.deliveryFee}0</Text>
          
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
    flex: 1,
    backgroundColor: "#b3ff66",
    borderColor: "#b3ff66",
    color: "#b3ff66",
  },
  iconContainer: {
    position: "absolute",
    top: 40,
    left: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    borderRadius: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    marginVertical: 10,
  },
  menuTitle: {
    marginTop: 20,
    fontSize: 18,
    letterSpacing: 0.7,
  },
  subtitle: {
    fontSize: 15,
    color: "#525252",
    marginBottom: 10,
  },
  container: {
    margin: 10,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },});
export default RestaurantHeader;