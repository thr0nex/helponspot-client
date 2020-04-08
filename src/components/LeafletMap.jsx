import React from "react";
import "./leaflet-map.css";
import { Map, Marker, TileLayer, GeoJSON } from "react-leaflet";
import L from "leaflet";
import helperIconUrl from "../assets/helfer.png";
import organisationIconUrl from "../assets/organisationen.png";
import iconShadowUrl from "../assets/shadow.png";

/* This component relies on leaflet.css, which
currently is imported in a link tag in index.html */

/* Definition of custom icons */

export const helperIcon = new L.Icon({
  iconUrl: helperIconUrl,
  iconAnchor: [32, 66],
  popupAnchor: [0, -55],
  iconSize: [64, 66],
  shadowUrl: iconShadowUrl,
  shadowSize: [80, 82],
  shadowAnchor: [32, 66],
});

export const organisationIcon = new L.Icon({
  iconUrl: organisationIconUrl,
  iconAnchor: [32, 66],
  popupAnchor: [0, -55],
  iconSize: [64, 66],
  shadowUrl: iconShadowUrl,
  shadowSize: [80, 82],
  shadowAnchor: [32, 66],
});

export const icons = {
  helper: helperIcon,
  organisation: organisationIcon,
};

/* Leaflet Map component that renders given GeoJSON */

class LeafletMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        center: this.props.location,
        zoom: 11,
      },
      previousViewport: {
        center: this.props.location,
        zoom: 11,
      },
    };
  }
  componentDidMount() {
    /* The map object get's it viewport property on change of
    center or zoom level. Initially it is undefined. To avoid
    errors, we pass it it's initial viewport upon rendering. */
    this.map.viewport = this.state.viewport;
  }

  zoomToMarker(feature){
    let coordinates = [
      feature.geometry.coordinates[1],
      feature.geometry.coordinates[0],
    ];
    return () => {
      this.setState({ previousViewport: this.map.viewport });
      this.setState({ viewport: { center: coordinates, zoom: 13 } });
    }
  }
  zoomBack() {
    this.setState({ viewport: this.state.previousViewport });

  }

  createPopup(feature, layer) {
    /* The method bindPopup only takes strings
    but the string can contain html, which will
    then be parsed and rendered */
    const name = feature.properties.name;
    const id = feature.properties.id;
    var popupContent = "";
    popupContent += "<Popup>";
    //include link to user
    popupContent += `<h2><b><a href='/app/organisation/user/${id}'>${name}</a></b></h2>`;
    popupContent += "<p><b>Bringt mit:</b></p>";
    popupContent += "<ul>";
    feature.properties.qualities.forEach((quality) => {
      popupContent += "<li>" + quality + "</li>";
    });
    popupContent += "</ul></Popup>";
    layer.bindPopup(popupContent);
  }




  render() {
    return (
      <Map
        ref={(ref) => {
          this.map = ref;
        }} // makes map object available
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
        center={this.state.viewport.center}
        zoom={this.state.viewport.zoom}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON
          data={this.props.geojson.default.features}
          pointToLayer={this.pointToLayer.bind(this)}
          onEachFeature={this.onEachFeature.bind(this)}
          viewport={this.state.viewport}
        />
      </Map>
    );
  }
}
export default LeafletMap;
