import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar
} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import { Center } from "@builderx/utils";

function SignUp(props) {
  return (
    <View style={styles.root}>
      <View style={styles.Background}>
        <View style={styles.rect2Stack}>
          <ImageBackground
            style={styles.rect2}
            imageStyle={styles.rect2_imageStyle}
            source={require("../assets/images/Gradient_LZGIVfZ.png")}
          >
            <View style={styles.ProgressBar}>
              <View style={styles.icon2Row}>
                <IoniconsIcon
                  name="md-checkmark-circle"
                  style={styles.icon2}
                ></IoniconsIcon>
                <View style={styles.rect4}></View>
                <EntypoIcon name="time-slot" style={styles.icon3}></EntypoIcon>
                <View style={styles.rect5}></View>
              </View>
              <View style={styles.icon2RowFiller}></View>
              <FontAwesomeIcon
                name="circle"
                style={styles.icon4}
              ></FontAwesomeIcon>
            </View>
          </ImageBackground>
          <View style={styles.Form}>
            <View style={styles.NameColumn}>
              <View style={styles.Name}>
                <EvilIconsIcon name="user" style={styles.icon5}></EvilIconsIcon>
                <TextInput
                  placeholder="Name"
                  placeholderTextColor="rgba(255,255,255,1)"
                  secureTextEntry={false}
                  style={styles.NameInput}
                ></TextInput>
              </View>
              <View style={styles.Email}>
                <EvilIconsIcon
                  name="envelope"
                  style={styles.icon6}
                ></EvilIconsIcon>
                <TextInput
                  placeholder="Email"
                  placeholderTextColor="rgba(255,255,255,1)"
                  secureTextEntry={false}
                  style={styles.EmailInput}
                ></TextInput>
              </View>
            </View>
            <View style={styles.NameColumnFiller}></View>
            <View style={styles.Password}>
              <EvilIconsIcon name="lock" style={styles.icon7}></EvilIconsIcon>
              <TextInput
                placeholder="Password"
                placeholderTextColor="rgba(255,255,255,1)"
                secureTextEntry={true}
                style={styles.PasswordInput}
              ></TextInput>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Timeline")}
            style={styles.Continue}
          >
            <Text style={styles.text2}>Continue</Text>
          </TouchableOpacity>
          <Center horizontal>
            <Text style={styles.text3}>CREATE ACCOUNT</Text>
          </Center>
          <Center horizontal>
            <Text style={styles.text4}>Terms &amp; Conditions</Text>
          </Center>
        </View>
      </View>
      <StatusBar
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
  Background: {
    flex: 1
  },
  rect2: {
    top: 0,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  rect2_imageStyle: {
    opacity: 0.69
  },
  ProgressBar: {
    height: 40,
    flexDirection: "row",
    marginTop: 58,
    marginLeft: 69,
    marginRight: 69
  },
  icon2: {
    color: "rgba(30,174,199,1)",
    fontSize: 40,
    width: 33,
    height: 40
  },
  rect4: {
    width: 50,
    height: 7,
    backgroundColor: "rgba(31,178,204,1)",
    borderRadius: 40,
    marginLeft: 8,
    marginTop: 16
  },
  icon3: {
    color: "#1fb2cc",
    fontSize: 35,
    width: 40,
    height: 36,
    marginLeft: 8,
    marginTop: 4
  },
  rect5: {
    width: 50,
    height: 7,
    backgroundColor: "rgba(230, 230, 230,1)",
    opacity: 0.75,
    borderRadius: 40,
    marginLeft: 3,
    marginTop: 16
  },
  icon2Row: {
    height: 40,
    flexDirection: "row"
  },
  icon2RowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  icon4: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    width: 34,
    height: 40,
    opacity: 0.75
  },
  Form: {
    top: 329,
    left: 41,
    height: 230,
    position: "absolute",
    right: 41
  },
  Name: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    opacity: 1,
    borderRadius: 5,
    flexDirection: "row"
  },
  icon5: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    width: 33,
    height: 33,
    marginLeft: 16,
    alignSelf: "center"
  },
  NameInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    flex: 1,
    marginRight: 17,
    marginLeft: 12,
    marginTop: 14
  },
  Email: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    opacity: 1,
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 27
  },
  icon6: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 15,
    alignSelf: "center"
  },
  EmailInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14
  },
  NameColumn: {},
  NameColumnFiller: {
    flex: 1
  },
  Password: {
    height: 59,
    backgroundColor: "rgba(255,255,255,0.25)",
    opacity: 1,
    borderRadius: 5,
    flexDirection: "row"
  },
  icon7: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 15,
    marginTop: 13
  },
  PasswordInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14
  },
  Continue: {
    left: 41,
    height: 55,
    backgroundColor: "rgba(247,247,247,0)",
    position: "absolute",
    right: 41,
    bottom: 105,
    opacity: 1,
    borderRadius: 5,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    justifyContent: "center"
  },
  text2: {
    width: 66,
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  text3: {
    top: 160,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 24
  },
  text4: {
    color: "rgba(255,255,255,0.5)",
    position: "absolute",
    bottom: 31
  },
  rect2Stack: {
    flex: 1
  }
});

export default SignUp;
