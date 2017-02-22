import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';


var WeatherForm = React.createClass({

 onFormSubmit : function(e) {
  e.preventDefault();
  var location = this.refs.location.input.value;

  if(location.length > 0) {
   this.refs.location.input.value = '';
   this.props.onSearch(location);
  }
 },

 render : function() {
  return (
   <div>
    <form id="wform" onSubmit={this.onFormSubmit}>
     <TextField ref="location" hintText="Enter City Name" floatingLabelText="City Name" underlineShow={false}/>
     <Divider /><br/>
     <RaisedButton fullWidth={true} type="submit" label="Get Weather" primary={true} />
    </form>
   </div>
  );
 }
});

module.exports = WeatherForm;
