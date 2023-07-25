// import React from 'react'

// const GeoFenceScreen = () => {
//   return (
//     <div>GeoFenceScreen</div>
//   )
// }

// export default GeoFenceScreen

// import React, { useEffect, useState } from 'react';
// import { withGoogleMap, GoogleMap, Marker, Circle } from 'react-google-maps';
// import axios from 'axios';


// const GeoFenceScreen = () => {
//     const [unsafeLocations, setUnsafeLocations] = useState([]);
  
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await axios.get(
//             'https://docs.google.com/spreadsheets/d/1OpJE1U1XqYu4jwvSi0j8GGH9b9dwsJDxQ9OeIcYpMiI/gviz/tq?tqx=out:json&sheet=Sheet1'
//           );
  
//           const data = JSON.parse(response.data.substr(47).slice(0, -2));
  
//           const locations = data.table.rows.map((row) => {
//             const latitude = parseFloat(row.c[0].v);
//             const longitude = parseFloat(row.c[1].v);
//             const range = parseFloat(row.c[2].v);
  
//             return { latitude, longitude, range };
//           });
  
//           setUnsafeLocations(locations);
//         } catch (error) {
//           console.log('Error fetching data:', error);
//         }
//       };
  
//       fetchData();
//     }, []);
  
//     const Map = withGoogleMap(() => (
//       <GoogleMap
//         defaultCenter={{ lat: 0, lng: 0 }}
//         defaultZoom={13}
//         defaultOptions={{
//           mapTypeControl: false,
//           streetViewControl: false,
//         }}
//       >
//         {unsafeLocations.map((location, index) => (
//           <React.Fragment key={index}>
//             <Marker position={{ lat: location.latitude, lng: location.longitude }} />
//             <Circle
//               center={{ lat: location.latitude, lng: location.longitude }}
//               radius={location.range}
//               options={{
//                 fillColor: 'rgba(255, 0, 0, 0.2)',
//                 strokeColor: 'red',
//                 strokeWeight: 2,
//               }}
//             />
//           </React.Fragment>
//         ))}
//       </GoogleMap>
//     ));
  
//     return (
//       <div style={{ height: '100vh', width: '100%' }}>
//         <Map
//           containerElement={<div style={{ height: '100%' }} />}
//           mapElement={<div style={{ height: '100%' }} />}
//         />
//       </div>
//     );
//   };
  
//   export default GeoFenceScreen;
  





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { MapContainer, TileLayer, Marker, CircleMarker } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';


// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
//   iconUrl: require('leaflet/dist/images/marker-icon.png').default,
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
// });

// const GeoFenceScreen = () => {
//   const [unsafeLocations, setUnsafeLocations] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           'https://docs.google.com/spreadsheets/d/1OpJE1U1XqYu4jwvSi0j8GGH9b9dwsJDxQ9OeIcYpMiI/gviz/tq?tqx=out:json&sheet=Sheet1'
//         );

//         const data = JSON.parse(response.data.substr(47).slice(0, -2));

//         const locations = data.table.rows.map((row) => {
//           const latitude = parseFloat(row.c[0].v);
//           const longitude = parseFloat(row.c[1].v);
//           const range = parseFloat(row.c[2].v);

//           return { latitude, longitude, range };
//         });

//         setUnsafeLocations(locations);
//       } catch (error) {
//         console.log('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <MapContainer center={[0, 0]} zoom={13} style={{ height: '100vh', width: '100%' }}>
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

//       {unsafeLocations.map((location, index) => (
//         <React.Fragment key={index}>
//           <Marker
//             position={[location.latitude, location.longitude]}
//             icon={L.icon({
//               iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//               shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
//               iconSize: [25, 41],
//               iconAnchor: [12.5, 41],
//             })}
//           />
//           <CircleMarker
//             center={[location.latitude, location.longitude]}
//             radius={location.range}
//             pathOptions={{
//               color: 'red',
//               fillColor: 'rgba(255, 0, 0, 0.2)',
//               fillOpacity: 1,
//               stroke: true,
//               weight: 2,
//             }}
//           />
//         </React.Fragment>
//       ))}
//     </MapContainer>
//   );
// };

// export default GeoFenceScreen;
