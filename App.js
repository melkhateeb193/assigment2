import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Users from "./screen/users";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import UserList from "./screen/userList";
import ContextApi from "./context/contextApi";
import Details from "./screen/details";
const stack = createStackNavigator();
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ContextApi>
        <NavigationContainer>
          <stack.Navigator>
            <stack.Screen
              name={"users"}
              component={Users}
              options={{
                headerTitle: "users",
                headerTitleStyle: { fontSize: 15 },
              }}
            ></stack.Screen>
            <stack.Screen
              name={"userlist"}
              component={UserList}
              options={{
                headerTitle: "userlist",
                headerTitleStyle: { fontSize: 15 },
              }}
            ></stack.Screen>
            <stack.Screen
              name={"details"}
              component={Details}
              options={{
                headerTitle: "details user",
                headerTitleStyle: { fontSize: 15 },
              }}
            ></stack.Screen>
          </stack.Navigator>
        </NavigationContainer>
      </ContextApi>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 40,
  },
});
