import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} />
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBXXlHieDBdjVKTFrxSv3DUHbt17JqC2Uo',
})(MapContainer);
