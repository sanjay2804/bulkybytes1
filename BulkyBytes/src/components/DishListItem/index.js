import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const DishListItem = ( {dish}) => {
    const navigation = useNavigation();
    return(
        <Pressable onPress={() => navigation.navigate("Dish", { id: dish.id })} style = {styles.container}>
            <View style ={{flex: 1}}>
            <Text style = {styles.name}>{dish.name}</Text>
            <Text style = {styles.description} numberOfLines = {2}>{dish.description}</Text>
            <Text style = {styles.price}>{dish.price}</Text>
            </View>
            {dish.image && <Image source={{uri: dish.image}} style={styles.image} />}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#59b300",
        paddingVertical: 20,
        marginVertical: 10,
        paddingHorizontal: 20,
        borderBottomColor: "green",
        borderBottomWidth: 5,
        borderRadius: 10,
        flexDirection: "row",
    },
    name: {
        fontWeight: "bold",
        fontSize: 17,
    },
    description: {
        color: "gray",
        marginVertical: 5,
    },
    price: {
        fontSize: 16,
    },
    image: {
        height: 100,
        aspectRatio: 1,
        borderRadius: 10,
    },

});
export default DishListItem;