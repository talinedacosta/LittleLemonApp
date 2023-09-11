import React from "react";
import { StyleSheet } from "react-native";
import Header from "../../components/Header";
import SafeView from "../../components/SafeView";

const Home = () => {
  return (
    <SafeView style={css.container}>
      <Header />
    </SafeView>
  );
};

const css = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Home;
