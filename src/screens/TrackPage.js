import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView
} from "react-native";
import HeaderX from "../components/HeaderX";
import MaterialSearchBar from "../components/MaterialSearchBar";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";

function TrackPage(props) {
  return (
    <View style={styles.container}>
      <HeaderX
        icon2Family="Feather"
        icon2Name="search"
        style={styles.headerX1}
      ></HeaderX>
      <View style={styles.body1}>
        <View style={styles.Tabs}>
          <TouchableOpacity style={styles.Following}>
            <Text style={styles.text}>Following</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Explore</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rect}>
          <MaterialSearchBar
            rect1="rgba(255,255,255,1)"
            style={styles.materialSearchBar}
          ></MaterialSearchBar>
          <MaterialButtonPrimary
            button1="Map"
            text1=""
            style={styles.materialButtonPrimary}
          ></MaterialButtonPrimary>
          <View style={styles.scrollArea2}>
            <ScrollView
              horizontal={false}
              contentContainerStyle={styles.scrollArea2_contentContainerStyle}
            >
              <Text style={styles.loremIpsum}>1.track your order...</Text>
              <Text style={styles.loremIpsum1}>2.track your order...</Text>
              <Text style={styles.loremIpsum2}>3.track your order...</Text>
              <Text style={styles.loremIpsum3}>4.track your order...</Text>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerX1: {
    width: 375,
    height: 80,
    elevation: 15,
    shadowOffset: {
      height: 7,
      width: 1
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.09,
    shadowRadius: 5,
    alignSelf: "center"
  },
  body1: {
    borderColor: "rgba(107,168,246,1)",
    borderWidth: 0,
    flex: 1
  },
  Tabs: {
    width: 375,
    height: 80,
    backgroundColor: "rgba(31,178,204,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    elevation: 0,
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowRadius: 0,
    alignSelf: "center"
  },
  Following: {
    width: 100,
    height: 38,
    backgroundColor: "rgba(247,247,247,0)",
    alignSelf: "center",
    opacity: 1,
    borderRadius: 5,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    justifyContent: "center"
  },
  text: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  button: {
    width: 100,
    height: 38,
    backgroundColor: "rgba(247,247,247,0)",
    alignSelf: "center",
    opacity: 1,
    borderRadius: 100,
    justifyContent: "center"
  },
  rect: {
    width: 375,
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  materialSearchBar: {
    width: 317,
    height: 56,
    backgroundColor: "rgba(15,15, 15,0)",
    borderRadius: 16,
    borderColor: "rgba(93,170,236,1)",
    borderWidth: 3,
    marginTop: 120,
    marginLeft: 29
  },
  materialButtonPrimary: {
    width: 100,
    height: 36,
    borderRadius: 6,
    marginTop: 13,
    marginLeft: 127
  },
  scrollArea2: {
    width: 325,
    height: 301,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 25,
    borderColor: "rgba(93,187,219,1)",
    borderWidth: 2,
    marginTop: 35,
    marginLeft: 25
  },
  scrollArea2_contentContainerStyle: {
    width: 325,
    height: 327,
    flexDirection: "column"
  },
  loremIpsum: {
    color: "#121212",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 47,
    marginLeft: 24
  },
  loremIpsum1: {
    color: "#121212",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 19,
    marginLeft: 24
  },
  loremIpsum2: {
    color: "#121212",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 22,
    marginLeft: 24
  },
  loremIpsum3: {
    color: "#121212",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 19,
    marginLeft: 24
  }
});

export default TrackPage;
