import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, Pressable, TextInput } from "react-native";
import { usersContext } from "../context/contextApi";
import { FaArrowAltCircleRight } from "react-icons/fa";

const UserList = (props) => {
  const { users } = useContext(usersContext);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter the users based on the search query
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleSearch = (text) => {
    setSearchQuery(text);
  };
  
  return (
    <View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by name"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      {filteredUsers.map((u) => (
        <View
          key={u.id}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text> {u.name}</Text>
          <Pressable
            style={{
              //backgroundColor: "#ddd",
              // width: 100,
              margin: 10,
              padding: 10,
              borderRadius: 10,
            }}
            onPress={() => props.navigation.navigate("details", u.id)}
          >
            <Text style={{ textAlign: "center" }}>
              {" >"}
              {/* <FaArrowAltCircleRight />{" "} */}
            </Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    marginVertical: 10,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default UserList;
