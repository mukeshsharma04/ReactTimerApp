import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherMsg from './WeatherMsg';
import OpenWeatherMap from './../api/OpenWeatherMap';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import LinearProgress from 'material-ui/LinearProgress';

var Weather = React.createClass({
 getInitialState : function() {
  return {
   isLoading : false
  }
 },

 handleSearch : function(location) {
  var that = this;

   this.setState({isLoading :true});
   OpenWeatherMap.getTemp(location).then(function(temp){
    that.setState({
     location : location,
     temp : temp,
     isLoading : false
    });
   },function(errorMessage){
    that.setState({isLoading :false});
    alert(errorMessage);
   });
  },

 render : function() {
  var {isLoading, temp, location} = this.state;

  function renderMessage () {
    if(isLoading) {
     return <LinearProgress />;
    }else if(temp && location) {
     return <WeatherMsg location={location} temp={temp}/>;
    }
  }

  return (
   <div>
    <Card >
      <CardTitle title="Get Weather" style={{textAlign : "center"}}/>
      <Divider/>
      <CardActions>
       <WeatherForm onSearch={this.handleSearch}/>
       {renderMessage()}
      </CardActions>
    </Card>
   </div>
  );
 }
});

module.exports = Weather;
