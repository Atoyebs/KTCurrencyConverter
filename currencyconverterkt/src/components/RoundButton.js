import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';

const buttonBackgroundColor = {
  main: '#414141',
  border: 'orange'
};

const buttonDimensions = {
  height: 65,
  width: 65
};

class RoundButton extends Component {

    constructor(props){
      super(props);
    }

    render(){
      return(
        <TouchableHighlight
          /*onPress refers to the function that gets executed when the TouchableHighlight is pressed*/
          onPress={this.props.buttonPressed.bind(this, this.props.number, this.props.isDeleteButton)}
          activeOpacity={0.95}
          underlayColor={'transparent'}
        >
          <View style={[viewStyles.container, this.props.marginStyling]}>
            <Text style={textStyles.numberStyle}>{this.props.number}</Text>
          </View>
        </TouchableHighlight>
      );
    }


}


const viewStyles = {

  container:{
    alignItems: 'center',
    justifyContent: 'center',
    width: buttonDimensions.width,
    height: buttonDimensions.height,
    borderRadius: buttonDimensions.width/2,
    borderWidth: 2.5,
    backgroundColor: buttonBackgroundColor.main,
    borderColor: buttonBackgroundColor.border,
    shadowOpacity: 0.7,
    shadowOffset: {width: 0.5, height: 1},
    shadowColor: 'grey'
  }

};

const textStyles = {
  numberStyle: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  }
};


export default RoundButton;
