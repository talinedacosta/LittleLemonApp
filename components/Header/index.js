import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Logo from "../Logo";
import Avatar from "../Avatar";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Header = () => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const storage = await AsyncStorage.getItem("@ll_user");
      const storageUser = storage != null ? JSON.parse(storage) : null;
      setUser(storageUser);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={css.container}>
      <Logo />
      {user && (
        <Avatar
          alt={`${user.firstName} ${user.lastName}`}
          source={user.avatar}
          size="small"
        />
      )}
    </View>
  );
};

const css = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 20,
    gap: 20,
    paddingBottom: 10,
    paddingTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default Header;
