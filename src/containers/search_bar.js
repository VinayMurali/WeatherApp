import React,{Component}from 'react';
import { connect }from 'react-redux';
import {bindActionCreators}from 'redux';
import { fetchWeather} from '../actions/index';

class SearchBar extends Component{

  constructor(props){
    super(props);
        this.state={
            term:''
        };
        this.onInputChange=this.onInputChange.bind(this);
        this.onFormSubmit=this.onFormSubmit.bind(this);
  }
  onInputChange=(event)=>{
    {/*console.log('value',event.target.value);*/}
      this.setState({term:event.target.value});
      {/*console.log('Stateterm:',this.state.term);*/}
    }

//this method is written inorder to avoid the post method on click on submit since we are using form element
//if we use form element and on click on a submit button,browser will automatically make post request to server and our component renders
//preventDefault() will tell that it should not submit a form
  onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term:'',showMessage:false})
}
  render(){

          return (
              <form onSubmit={this.onFormSubmit} className="input-group">
                <input palceholder="enter the city name"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
              </form>
          );
            {/*{console.log('currentState:',this.state.value)}*/}
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather:fetchWeather},dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);
