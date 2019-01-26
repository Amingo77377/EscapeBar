import React from 'react';
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from 'react-google-maps';
import MapStyles from './MapStylesRetro.json';
// import MapStyles from './MapStylesNight.json'
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

const GoogleMapsWrapper = withScriptjs(withGoogleMap(props => {
  const {onMapMounted, ...otherProps} = props;
  return <GoogleMap {...otherProps} ref={c => {
    onMapMounted && onMapMounted(c)
  }}>{props.children}</GoogleMap>
}));

const iconBase = "../img/company/40/";

class MapBody extends React.Component {
  constructor(props){
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }
  state = {
    markers: []
  };
  
  componentDidMount() {
    // console.log('Mounted @ ' + Date.now());

    // fetch('http://localhost:4000/city/')
    fetch('http://localhost:3000/map/city/')
        .then(res => res.json())
        // .then(({data})=>{console.log(data)})
        .then(res => {
          this.setState({ markers: res.data });
        })
        .catch(err=> console.log(err));
  }

  _mapRef = null;

  _handleMapMounted = (c) => {
    if (!c || this._mapRef) return;
    this._mapRef = c;
    // console.log('Ref set later @ ' + Date.now());
  };

  _handleBoundsChanged = () => {
    if (!this._mapRef) return;
    const center = this._mapRef.getCenter();
    const bounds = this._mapRef.getBounds();
    // console.log(center, bounds);
  };

  onMarkerClick = (evt) => {  //<- event object, not a marker object!  
    // console.log(evt.target) // undefined
    // console.log(this); // MapBody
    // console.log(evt); // OK
    // console.log(evt.sid, evt.s_name, evt.s_add, evt.s_tel, evt.s_ophr); // OK

    let markerSid = evt.sid;
    let markerSLogo = evt.s_logo;
    let markerSName = evt.s_name;
    let markerSAdd = evt.s_add;
    let markerSTel = evt.s_tel;
    let markerSOpHr = evt.s_ophr;

    // fetch('http://localhost:4000/store/'+markerSid)
    fetch('http://localhost:3000/map/store/'+markerSid)
    .then(res => res.json())
    // .then(({data})=> {console.log(data)})
    .then(({ data }) => {
      this.props.getStoreByMarker({
        storeId: markerSid,
        storeLogo: markerSLogo,
        storeName: markerSName,
        storeAdd: markerSAdd,
        storeTel: markerSTel,
        storeOpHr: markerSOpHr,
        gamesInfo: data
      })
    })
    .catch(err=> console.log(err));
    

    // 上面是解構(destructuring)也可以這樣寫
    // .then((result) => {
    //   this.props.getStoreByMarker({
    //     ...,
    //     gamesInfo: result.data,
    //   })
    // })


    // 以下是不work的寫法
    // 因為fetch非同步進行，所以就算把console.log寫在後面此時也只會顯示空的 gamesData，傳回去父元件的getStoreByMarker同理
    // this.props.getStoreByMarker({
    //   storeId: markerSid,
    //   storeLogo: markerSLogo,
    //   storeName: markerSName,
    //   storeAdd: markerSAdd,
    //   storeTel: markerSTel,
    //   storeOpHr: markerSOpHr,
      // gamesInfo: gamesData
      // gamesInfo: [{gameTitle: "淘寶有假貨", gamePriceMin: "81,000", gameImg: "CANPASS.png"}]
    // })


  }

  componentDidUpdate() {
    // console.log('MapBody(Child_1) update');
  }

  render() {
    return (
      <GoogleMapsWrapper
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBkwdLLMRVXuU7Bzc5zF-sv4ocxizjstEk&v=3"
        loadingElement={<div style={{height: `100%`}}/>}
        containerElement={<div style={{height: `100%`}}/>}
        mapElement={<div style={{height: `100%`}}/>}
        // defaultZoom={10}
        zoom = {this.props.zoom}
        // defaultCenter={{lat: 25.052153, lng: 121.54401}}
        center={this.props.center}
        onMapMounted={this._handleMapMounted}
        onBoundsChanged={this._handleBoundsChanged}
        defaultOptions={{
          styles: MapStyles,
          mapTypeControl: false,
          // fullscreenControl: false,
          streetViewControl: false,
          // disableDefaultUI: true
        }}
        >
        
        
        <MarkerClusterer
          averageCenter
          enableRetinaIcons
          gridSize={30}>
          {this.state.markers.map(marker => (
            <Marker
              key={marker.sid}
              position={{lat: marker.lat, lng: marker.lng}}
              icon = {{ url: iconBase + marker.s_logo }}
              onClick={this.onMarkerClick.bind(this,marker)}
            />
          ))}
        </MarkerClusterer>
      </GoogleMapsWrapper>
    )
  }
}

export default MapBody;