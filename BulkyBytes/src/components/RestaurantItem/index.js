
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";


const RestaurantItem = ({restaurant}) => {

  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("Restaurant", {id: restaurant.id})
  };
    return (
        <Pressable onPress={onPress} style = {styles.restaurantContainer}>
      <Image source={{ uri: restaurant.image,}} style = {styles.image}/>
      <Text style ={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subtitle}>Delivery Fee £{restaurant.deliveryFee} </Text>
      </Pressable>
    );
};

export default RestaurantItem;

const styles = StyleSheet.create({
    restaurantContainer: {
      width: '100%',
      alignItems: 'center',
      marginVertical: 10,
    },
    image: {
      width: '100%',
      aspectRatio: 5/3,
      marginBottom: 5,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginVertical: 10,
    },
    subtitle: {
      color: "grey"
    },
  });