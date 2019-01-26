/*global google getGeoLocation*/ 

import React, {Component} from "react"
import { compose, withProps, withStateHandlers, withHandlers} from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"
import demoFancyMapStyles from "./demoFancyMapStyles.json";
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";


const iconBase = require("../img/test40.jpg");

const MapComponent = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBkwdLLMRVXuU7Bzc5zF-sv4ocxizjstEk&v=3",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `600px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withHandlers({
      onMarkerClustererClick: () => (markerClusterer) => {
        const clickedMarkers = markerClusterer.getMarkers()
        console.log(`Current clicked markers length: ${clickedMarkers.length}`)
        console.log(clickedMarkers)
      },
      // onMarkerClick: () => {
      //   console.log(this)
      // },
    }),
    withStateHandlers(() => ({
      isOpen: false,
    }), {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      })
    }),
    withScriptjs,
    withGoogleMap
  )(props =>
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 25.052153, lng: 121.54401 }}
      position={{ lat: props.currentLocation.lat, lng: props.currentLocation.lng }}
      // defaultOptions={{ styles: demoFancyMapStyles }}
    >
      <MarkerClusterer
        onClick={props.onMarkerClustererClick}
        averageCenter
        enableRetinaIcons
        gridSize={60}
      >
        {props.markers.map(marker => (
          <Marker
            key={marker.sid}
            position={{ lat: marker.lat, lng: marker.lng }}
            // onClick={props.onToggleOpen}
            // onClick={props.onMarkerClick}
            // icon= {{url: iconBase + marker.s_logo}}
            icon = {{ url: iconBase }}
          />
        ))}
      </MarkerClusterer>
    </GoogleMap>
  );

  export default MapComponent;