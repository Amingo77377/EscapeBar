/*global google*/ 

// 

import React from "react"
import { compose, withProps, withState, withHandlers} from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import {FaAnchor} from "react-icons/fa";

const MapWithControlledZoom = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBkwdLLMRVXuU7Bzc5zF-sv4ocxizjstEk&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `800px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withState('zoom', 'onZoomChange', 8),
    withHandlers(() => {
      const refs = {
        map: undefined,
      }
  
      return {
        onMapMounted: () => ref => {
          refs.map = ref
        },
        onZoomChanged: ({ onZoomChange }) => () => {
          onZoomChange(refs.map.getZoom())
        }
      }
    }),
    withScriptjs,
    withGoogleMap
  )(props =>
    <GoogleMap
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
      zoom={props.zoom}
      ref={props.onMapMounted}
      onZoomChanged={props.onZoomChanged}
    >
      <Marker
        position={{ lat: -34.397, lng: 150.644 }}
        onClick={props.onToggleOpen}
      >
        <InfoWindow onCloseClick={props.onToggleOpen}>
          <div>
            <FaAnchor />
            {" "}
            Controlled zoom: {props.zoom}
          </div>
        </InfoWindow>
      </Marker>
    </GoogleMap>
  );

export default MapWithControlledZoom;