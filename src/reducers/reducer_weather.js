import {FETCH_WEATHER} from '../actions/index';


function WeatherReducer(state=[],action){/*reason why we are assiging our state to empty array inspect
    at given point of time,we need to display the data of mutiple city weather data,if serached more than once,
    display the previous one along with newly search data
  */

    // if(action.payload.response.data.cod === 404){
    //   alert('city not found')
    // }
    console.log('Action Received from Action creator',action);
    console.log('Action-error:',action.error);
    if(action.error){
        alert('City Not Found')
    }


    {/*the above consolelog will print the action,i,e from action creator,
      in this case it is acually an response of the request made in action class.
      'z of redux-promise(middlewear)
      if the request is sent as payload in action class,the middle wear will  reslove the request and the send to all the reducers
      refer the reducer-middlewear-image'*/}
      switch(action.type){
        case FETCH_WEATHER:
          /*return state.concat([action.payload.data]);*/  /*written from log of Action Rev from Action Creator,putting that as array 'z
                                                        mutiple data(weather) shld be shown,right from first search by user,it is storting in state
                                                        concat adds  the  new value to existing array list */
          return [action.payload.data,...state];  /* using speard operator make a new array and put action.payload.data inside it
                                                             */


      }
    return state;
}
export default WeatherReducer;
