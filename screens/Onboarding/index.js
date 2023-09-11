import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import SafeView from "../../components/SafeView";
import Logo from "../../components/Logo";
import Text from "../../components/Text";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Onboarding({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeEmail = (text) => {
    setEmail(text.toLowerCase());
  };

  const storeData = async () => {
    try {
      const user = {
        firstName: firstName,
        lastName: "",
        avatar: "",
        phone: "",
        email: email,
        onboarded: true,
      };

      const storage = await AsyncStorage.getItem("@ll_users");
      if (storage) {
        const users = JSON.parse(storage);

        if (users[email]) {
          AsyncStorage.setItem("@ll_user", JSON.stringify(users[email]));
        } else {
          AsyncStorage.mergeItem(
            "@ll_users",
            JSON.stringify({ [email]: user })
          );

          AsyncStorage.setItem("@ll_user", JSON.stringify(user));
        }
      } else {
        AsyncStorage.setItem("@ll_users", JSON.stringify({ [email]: user }));
        AsyncStorage.setItem("@ll_user", JSON.stringify(user));
      }
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert("Houve um erro, tente novamente.");
      console.log(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("@ll_user");
        if (value !== null) {
          navigation.navigate("Home");
        }
      } catch (error) {
        console.log(error);
        Alert.alert("Houve um erro, tente novamente.");
      }
    };

    getData();
  }, []);

  return (
    <SafeView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={css.keyboardAvoidingView}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={css.container}>
            <View style={css.header}>
              <Logo />
            </View>

            <View style={css.content}>
              <Text type="h1" style={css.title}>
                Let us get to know you
              </Text>

              <Input
                value={firstName}
                onChangeText={setFirstName}
                label="First Name"
                autoComplete="name"
              />
              <Input
                value={email}
                onChangeText={handleChangeEmail}
                label="Email"
                keyboardType="email-address"
                autoComplete="email"
              />
              <Button
                onPress={() => storeData()}
                disabled={!firstName || !email}
              >
                Next
              </Button>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeView>
  );
}

const css = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#EDEFEE",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 25,
  },
  content: {
    alignSelf: "stretch",
  },
  header: {
    alignItems: "center",
  },
  title: {
    marginBottom: 30,
  },
});

export default Onboarding;
