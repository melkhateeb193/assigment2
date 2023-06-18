import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { usersContext } from "../context/contextApi";
import { useRoute } from "@react-navigation/native";

const Details = () => {
  let { users } = useContext(usersContext);
  const { params } = useRoute();
  const [user, setUser] = useState();
  console.warn(user);
  useEffect(() => {
    users.map((obj) => (obj.id === params ? setUser(obj) : obj));
  }, []);
  if (!user) return <Text>Loading....</Text>;
  return (
    <View
      style={{
        borderWidth: 2,
        borderColor: "red",
        // margin: 30,
        borderColor: "black",
        borderRadius: 10,
      }}
    >
      <View style={{ width: "100%", height: "50%" }}>
        <Image
          source={require("../assets/pngtree-user-vector-avatar-png-image_1541962.jpg")}
          style={{ width: "100%", height: "100%", borderRadius: 10 }}
        ></Image>
      </View>

      <View style={{ padding: 10 }}>
        <Text style={styles.text}>name:{user.name}</Text>
        <Text style={styles.text}>username:{user.username}</Text>
        <Text style={styles.text}>email:{user.email}</Text>
        <Text style={styles.text}>city:{user.address.city}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Details;
