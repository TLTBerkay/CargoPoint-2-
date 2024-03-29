import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

function Login(props) {
  return (
    <View style={styles.root}>
      <View style={styles.background}>
        <View style={styles.rectStack}>
          <ImageBackground
            style={styles.rect}
            imageStyle={styles.rect_imageStyle}
            source={require("../assets/images/Gradient_LZGIVfZ.png")}
          >
            <Text style={styles.cargoPoint}>CargoPoint</Text>
          </ImageBackground>
          <View style={styles.Form}>
            <View style={styles.UsernameColumn}>
              <View style={styles.Username}>
                <EvilIconsIcon name="user" style={styles.icon2}></EvilIconsIcon>
                <TextInput
                  placeholder="Username"
                  placeholderTextColor="rgba(255,255,255,1)"
                  secureTextEntry={false}
                  style={styles.UsernameInput}
                ></TextInput>
              </View>
              <View style={styles.Password}>
                <EvilIconsIcon name="lock" style={styles.icon2}></EvilIconsIcon>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="rgba(255,255,255,1)"
                  secureTextEntry={false}
                  style={styles.PasswordInput}
                ></TextInput>
              </View>
            </View>
            <View style={styles.UsernameColumnFiller}></View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Untitled")}
              style={styles.button}
            >
              <Text style={styles.text2}>Get Started</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.FooterTexts}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("SignUp")}
              style={styles.button2}
            >
              <View style={styles.CreateAccountFiller}></View>
              <Text style={styles.CreateAccount}>Create Account</Text>
            </TouchableOpacity>
            <View style={styles.button2Filler}></View>
            <Text style={styles.NeedHelp}>Need Help?</Text>
          </View>
          <View style={styles.Logo}>
            <View style={styles.rect7Filler}></View>
            <View style={styles.rect7}></View>
          </View>
        </View>
      </View>
      <StatusBar
        animated={false}
        barStyle="light-content"
        hidden={false}
        backgroundColor="rgba(0,0,0,0)"
      ></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  background: {
    flex: 1
  },
  rect: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  rect_imageStyle: {
    opacity: 0.69
  },
  cargoPoint: {
    color: "rgba(255,255,255,1)",
    fontSize: 45,
    fontFamily: "roboto-regular",
    marginTop: 152,
    marginLeft: 68
  },
  Form: {
    top: 329,
    left: 41,
    height: 230,
    position: "absolute",
    right: 41
  },
  Username: {
    height: 59,
    backgroundColor: "rgba(251,247,247,0.25)",
    opacity: 1,
    borderRadius: 5,
    flexDirection: "row"
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 20,
    alignSelf: "center"
  },
  UsernameInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 11,
    marginLeft: 11,
    marginTop: 14
  },
  Password: {
    height: 59,
    backgroundColor: "rgba(253,251,251,0.25)",
    opacity: 1,
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 27
  },
  PasswordInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 8,
    marginTop: 14
  },
  UsernameColumn: {},
  UsernameColumnFiller: {
    flex: 1
  },
  button: {
    height: 59,
    backgroundColor: "rgba(31,178,204,1)",
    borderRadius: 5,
    justifyContent: "center"
  },
  text2: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  FooterTexts: {
    left: 37,
    height: 14,
    position: "absolute",
    right: 36,
    bottom: 36,
    flexDirection: "row"
  },
  button2: {
    width: 104,
    height: 14,
    alignSelf: "flex-end"
  },
  CreateAccountFiller: {
    flex: 1
  },
  CreateAccount: {
    color: "rgba(255,255,255,0.5)"
  },
  button2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  NeedHelp: {
    color: "rgba(255,255,255,0.5)",
    alignSelf: "flex-end",
    marginRight: -1
  },
  Logo: {
    top: 130,
    left: 71,
    width: 224,
    height: 111,
    position: "absolute"
  },
  rect7Filler: {
    flex: 1
  },
  rect7: {
    height: 8,
    backgroundColor: "#25cdec",
    marginBottom: 6,
    marginLeft: 2,
    marginRight: 3
  },
  rectStack: {
    flex: 1
  }
});

export default Login;
