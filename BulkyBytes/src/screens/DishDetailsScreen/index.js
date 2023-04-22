import { View, Text, StyleSheet, Pressable} from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import {AntDesign} from "@expo/vector-icons";
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";

const dish = restaurants[0].dishes[0];

const DishDetailsScreen = () => {
    const [quantity, setQuantity]= useState(1);
    const navigation = useNavigation();
    const onMinus = () => {
        setQuantity(quantity -1)
    };

    const onPlus = () => {
    setQuantity(quantity + 1)
    };

    const getTotal = () => {
        return dish.price * quantity.toFixed(2);
    };
     return (
        
        <View style = {styles.page}>
            <Text>
              {dish.name}  
            </Text>
            <Text>
              {dish.description}  
            </Text>
            <Text>
              {dish.name}  
            </Text>
            <View style = {styles.seperator}/>

            <View style = {styles.row}>
                <AntDesign name = "minuscircleo" size = {60} color={"black"} onPress={onMinus} />
                <Text style = {styles.quantity}>{quantity}</Text>
                <AntDesign name = "pluscircleo" size = {60} color={"black"} onPress={onPlus} />
            </View>

            <Pressable onPress={() => navigation.navigate("Basket")} style = {styles.button}>
                <Text style ={styles.buttonText}>Add {quantity} items to basket (Total £{getTotal()}0)</Text>
            </Pressable>
        </View>

    );
  
};

const styles = StyleSheet.create({
    page: {
        flex:1,
        width: '100%',
        paddingVertical: 30,
    },
    name: {
        fontsize: 30,
        fontWeight: 600,
        marginVertical: 10,
    },
    seperator: {
        height: 1,
        backgroundColor: "darkgreen",
        marginVertical: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginHorizontal: 20,
    },
    quantity: {
        fontsize: 20,
        marginHorizontal: 20,
    },
    button: {
        backgroundColor: "black",
        marginTop: 'auto',
        padding: 10,

    },
    buttonText: {
        color: 'white',
    }

});

export default DishDetailsScreen;