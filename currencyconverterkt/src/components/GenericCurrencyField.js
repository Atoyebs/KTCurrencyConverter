//insert React and react native boilerplate code here
import React, {Component} from 'react';
//import the following out of the box components from 'react-native' module
import {Text, Image, TouchableHighlight, View} from 'react-native';


class GenericCurrencyField extends Component {

  //setting up the constructor with passed props
  constructor(props){
    /* this means it will go to the parent component
      and execute the code in the PARENT COMPONENT'S constructor
    */
    super(props);
  }

  //render has to be invoked if the component is to be drawn on the screen.
  render(){

    return (

      <View style={viewStyles.container}>
      </View>

    );

  }

}


/*Setting up styling for GenericCurrencyField*/
const viewStyles = {

  container: {
    backgroundColor: 'lightblue',
    width: '100%', //we know the field will take up the entire width of the screen
  }

}



/* this line of code allows this class/file to be
   accessible in other parts of the app (in other files/classes)
*/
export default GenericCurrencyField;
