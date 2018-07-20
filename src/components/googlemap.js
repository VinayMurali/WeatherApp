import React,{Component}from 'react';
//import {GoogleMapLoader,GoogleMap} from 'react-google-maps';

 class GoogleMap extends Component {

  // to make an embeded google map,since we are passing this.refs.map(html node),google map will find that
  //element on the screen and render and embeded map into it.
  //we are using google maps here since the it is allready included in index.html
  //we can check in console by writing google.maps,under that map in an sub arary of it
  //it takes 2 parameter,1->this.refs,map and 2->zoom,center
  //lat and lon are the response from weather data api,refer log of cityData in weather_list

  componentDidMount(){
    console.log('hereeeeeeeee');
      new google.maps.Map(this.refs.map,{
        zoom:12,
        center:{
          lat:this.props.lat,
          lng:this.props.lon
            }
      });
  }
    render(){
      return <div ref="map">
      </div>
    }
}

// export default (props)=>{
//     return (
//         <GoogleMapLoader
//           containerElement={<div style={{height:'100%'}} />}
//           googleMapElement={
//               <GoogleMap defaultZoom={12} defaultCenter:{{lat:props.lat,lng:props.lon}}>
//           }
//           />
//     );
// }
export default GoogleMap;
