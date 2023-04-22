import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../screens/HomeScreen';
import RestaurantDetails from '../screens/RestaurantDetails';
import DishDetailsScreen from '../screens/DishDetailsScreen';
import BasketScreen from '../screens/BasketScreen';
import OrderScreen from '../screens/OrderScreen';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Foundation, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
     
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
      
        <Stack.Screen name="Profile" component={OrderScreen} />
    
    </Stack.Navigator>
    );
};

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        barStyle={{ backgroundColor: "white" }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <Foundation name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="OrdersTab"
          component={OrderScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="list-alt" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={RestaurantDetails}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="user-alt" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  

  const HomeStack = createNativeStackNavigator();

    const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
        <HomeStack.Screen name="Restaurants" component={HomeScreen} />
        <HomeStack.Screen
            name="Restaurant"
            component={RestaurantDetails}
            options={{ headerShown: false }}
        />
        <HomeStack.Screen name="Dish" component={DishDetailsScreen} />
        <HomeStack.Screen name="Basket" component={BasketScreen} />
        </HomeStack.Navigator>
    );
    };

export default RootNavigator;