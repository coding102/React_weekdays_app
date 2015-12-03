
// Import Code
var Moment = require ('moment');
var React = require('react-native');
var {
    AppRegistry,
	   StyleSheet,
	   Text,
	   View,
} = React;
var DayItem = require('./SRC/day-item');

    
// Create a react component    
var weekdays = React.createClass ({
	   render: function() {
        return <View style = {styles.container}>
            {this.days()}
			 </View>
        
},
days: function() {
    var daysItems = [];
    
    for (var i = 0; i < 7; i++){
        var day = Moment().add(i, 'days').format('dddd');
        daysItems.push(
            <DayItem day={day} daysUntil = {i} />
        )
    }
    
    return daysItems
    }
});


//Style the component center, flex-start, flex-end, flexDirection: 'row'
var styles = StyleSheet.create({
	   container: {
		  flex: 1,
		  justifyContent: 'center', // y axis
		  alignItems: 'center',     // x axis
	   },
	});

//Show the react component on the screen
AppRegistry.registerComponent('weekdays', () => weekdays);
