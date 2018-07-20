import React,{Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/Chart';
import  GoogleMap from '../components/googlemap';

class WeatherList extends Component{

//to render a single row
  renderWeather(cityData){
    console.log('cityData:--',cityData);
      //console.log('citydata cod:',cityData.cod);

    const name=cityData.city.name;
    const temps=cityData.list.map(weather=>weather.main.temp);
    const pressures=cityData.list.map(weather=>weather.main.pressure);
    const humidities=cityData.list.map(weather=>weather.main.humidity);
     const lon = cityData.city.coord.lon;
     const lat = cityData.city.coord.lat;
    //const {lon,lat}=cityData.city.coord;


{/*key is from response,check log of cityData:--  */}
      return (

        <tr key={cityData.city.id}>
            <td>
              {/*<GoogleMap lon={lon} lat={lat} />*/}
              {name}
            </td>
            <td>
              <Chart data={temps} color="orange" units="k"/>
            </td>
            <td>
              <Chart data={pressures} color="green" units="hPA"/>
            </td>
            <td>
              <Chart data={humidities} color="blue" units="%"/>
            </td>
        </tr>
      );
  }
  msg() {
  this.setState({showMessage:false})
 }

        render(){
      console.log('weatherData:-',this.props.weather);

          return (
            <div>
              <table className="table table-hover">
                  <thead>
                    <tr>
                        <th>City</th>
                        <th>Temerature (k)</th>
                        <th>Pressure (hpa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.props.weather.map(this.renderWeather)}
              </tbody>
            </table>
            {console.log('data:--',this.props.weather)}
          {this.props.weather.length==0 ? <h2 className="Message">Please Search To Get Started</h2>: ''}
      </div>
          );
    }
}

function mapStateToProps(state) {
  return {
      weather:state.weather
  };
}

//es6 since we are having only  1 reducer weather,we can use {weather}instead of state
//if the key and value are same,we can only return weather(weather===state.weather)
// function mapStateToProps({weather}) {
// const weather=state.weather
//   return {
//       weather
//   };
// }
export default connect(mapStateToProps)(WeatherList);
