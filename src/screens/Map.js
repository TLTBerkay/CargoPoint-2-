import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import HeaderX from "../components/HeaderX";
import MapView from "react-native-maps";

function Map(props) {
  return (
    <View style={styles.container}>
      <HeaderX button="Settings" style={styles.headerX1}></HeaderX>
      <View style={styles.body1}>
        <MapView
          provider={MapView.PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          customMapStyle={[
            {
              elementType: "geometry",
              stylers: [
                {
                  color: "#f5f5f5"
                }
              ]
            },
            {
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#616161"
                }
              ]
            },
            {
              elementType: "labels.text.stroke",
              stylers: [
                {
                  color: "#f5f5f5"
                }
              ]
            },
            {
              featureType: "administrative.land_parcel",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#bdbdbd"
                }
              ]
            },
            {
              featureType: "poi",
              elementType: "geometry",
              stylers: [
                {
                  color: "#eeeeee"
                }
              ]
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#757575"
                }
              ]
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [
                {
                  color: "#e5e5e5"
                }
              ]
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#9e9e9e"
                }
              ]
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [
                {
                  color: "#ffffff"
                }
              ]
            },
            {
              featureType: "road.arterial",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#757575"
                }
              ]
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [
                {
                  color: "#dadada"
                }
              ]
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#616161"
                }
              ]
            },
            {
              featureType: "road.local",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#9e9e9e"
                }
              ]
            },
            {
              featureType: "transit.line",
              elementType: "geometry",
              stylers: [
                {
                  color: "#e5e5e5"
                }
              ]
            },
            {
              featureType: "transit.station",
              elementType: "geometry",
              stylers: [
                {
                  color: "#eeeeee"
                }
              ]
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [
                {
                  color: "#c9c9c9"
                }
              ]
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#9e9e9e"
                }
              ]
            }
          ]}
          style={styles.Map}
        ></MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerX1: {
    height: 80,
    elevation: 15,
    shadowOffset: {
      height: 7,
      width: 1
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 5
  },
  body1: {
    flex: 1,
    marginTop: 1
  },
  Map: {
    opacity: 1,
    flex: 1,
    marginBottom: 2
  }
});

export default Map;
