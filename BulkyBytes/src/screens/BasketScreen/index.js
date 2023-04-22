import { View, Text, StyleSheet} from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import {AntDesign} from "@expo/vector-icons";
import { useState } from 'react';
import { FlatList } from "react-native-gesture-handler";

const restaurant = restaurants[0];

const BasketDishItem = ( {basketDish}) => {
    return(
            <View style = {styles.row}>
            <View style = {styles.quantityContainer}>
                <Text>1</Text>
            </View>
            <Text>{basketDish.name}</Text>
            <Text style = {{marginLeft: "auto"}}>£{basketDish.price}0</Text>
             </View>
    );
};
const BasketScreen = () => {
    const [quantity, setQuantity]= useState(1);

    
     return (
        
        <View style = {styles.page}>
            <Text style = {styles.name}>
              {restaurant.name}
            </Text>

            <Text>Items:</Text>

            <FlatList
                data ={restaurant.dishes}
                renderItem={({item}) => <BasketDishItem basketDish={item}/>}
            />

            <View style = {styles.seperator}/>

            <View style = {styles.button}>
                <Text style ={styles.buttonText}>Order</Text>
            </View>
        </View>

    );
  
};

const styles = StyleSheet.create({
    page: {
      flex: 1,
      width: "100%",
      paddingVertical: 40, // temp fix
      padding: 10,
    },
    name: {
      fontSize: 24,
      fontWeight: "600",
      marginVertical: 10,
    },
    description: {
      color: "gray",
    },
    separator: {
      height: 1,
      backgroundColor: "lightgrey",
      marginVertical: 10,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 15,
      paddingHorizontal: 10,
    },
    quantity: {
      fontSize: 25,
      marginHorizontal: 20,
    },
    button: {
      backgroundColor: "black",
      marginTop: "auto",
      padding: 20,
      alignItems: "center",
    },
    buttonText: {
      color: "white",
      fontWeight: "600",
      fontSize: 18,
    },
    quantityContainer: {
      backgroundColor: "lightgray",
      paddingHorizontal: 5,
      paddingVertical: 2,
      marginRight: 10,
      borderRadius: 3,
    },
    price: {
        alignItems: "auto",
    }
  });

export default BasketScreen;