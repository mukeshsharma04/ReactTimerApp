import React from 'react';
// var WeatherMsg = (props) => {
//  var {temp,location} = props;
//  return (
//   <div>
//    <h2>It is {temp} in {location}.</h2>
//   </div>
//  );
// }

//we can destruct props as a param to directly in values like here
var WeatherMsg = ({temp,location}) => {
 return (
  <div>
   <h3>IT is {temp} in {location}.</h3>
  </div>
 );
}

module.exports = WeatherMsg;
