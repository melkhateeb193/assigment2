import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  SectionList,
  Text,
  Image,
  Pressable,
} from "react-native";

const Users = (props) => {
  const navigation = useNavigation();
  const sections = [
    {
      id: "0",
      title: "A",
      data: [
        { id: "0", name: "Ahmed" },
        { id: "1", name: "Aly" },
      ],
    },
    {
      id: "1",
      title: "B",
      data: [
        { id: "3", name: "Bahaa" },
        { id: "4", name: "Belal" },
      ],
    },
    {
      id: "2",
      title: "M",
      data: [
        { id: "5", name: "Mostafa" },
        { id: "6", name: "Magdy" },
      ],
    },
  ];
  return (
    <View>
      <SectionList
        sections={sections}
        renderSectionHeader={({ section }) => (
          <Text style={styles.title}>{section.title}</Text>
        )}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              padding: 10,
            }}
          >
            <Image
              source={require("../assets/pngtree-user-vector-avatar-png-image_1541962.jpg")}
              style={{ width: 20, height: 20, borderRadius: 50, marginTop: 3 }}
            ></Image>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
      ></SectionList>
      <Pressable
        style={{
          backgroundColor: "#ddd",
          width: 100,
          margin: 10,
          padding: 10,
          borderRadius: 10,
        }}
        onPress={() => props.navigation.navigate("userlist")}
      >
        <Text style={{ textAlign: "center" }}>go list user</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 5,
    fontSize: 20,
    marginTop: 0,
    marginLeft: 10,
  },
  title: {
    backgroundColor: "#ddd",
    padding: 5,
  },
});

export default Users;
