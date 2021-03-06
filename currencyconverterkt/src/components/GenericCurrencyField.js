//insert React and react native boilerplate code here
import React, {Component} from 'react';
//import the following out of the box components from 'react-native' module
import {Text, Image, TouchableHighlight, View} from 'react-native';

const amountFontSize = 27;

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

    let amountStyle = (this.props.isHighlighted) ? textStyles.highlightedAmountNumber : textStyles.displayAmountNumber;

    return (

      <TouchableHighlight
        activeOpacity={0.95}
        underlayColor={'transparent'}
        onPress={this.props.fieldTapped.bind(this, this.props.fieldIndex)}
        style={viewStyles.container}
      >
        <View style={viewStyles.container}>

          <View style={viewStyles.amountFieldArea}>
            <Image source={this.props.iconFlag} resizeMode={'cover'} style={viewStyles.flagIcon} />
            {/*Space around will come into effect here and push the display amount to the far right of the field*/}
            <Text style={amountStyle}>{this.props.displayAmountNumber}</Text>
          </View>

          <View style={viewStyles.currencyDescriptionField}>
            <Text style={textStyles.currencyDescriptionText}>{this.props.currencyDescription}</Text>
          </View>

        </View>
      </TouchableHighlight>

    );

  }

}


/*Setting up styling for GenericCurrencyField*/
const viewStyles = {

  container: {
    width: '100%', //we know the field will take up the entire width of the screen
    flex: 2,
    flexDirection: 'row',
    marginBottom: 1.5
  },
  amountFieldArea: {
    backgroundColor: '#414141',
    /* we are doing this because everything within the amountFieldArea is
       going to be laid out on the horizontal axis
    */
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 7.5,
    //we include paddingHorizontal because we don't want anything touching the left or right edges of the field area
    paddingHorizontal: 10
  },
  currencyDescriptionField: {
    backgroundColor: '#D8D8D8',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2.5
  },
  flagIcon: {
    width: 38,
    height: 38
  }

}

const textStyles = {
  currencyDescriptionText: {
    fontSize: 18,
    fontWeight: '500'
  },
  displayAmountNumber: {
    color: 'white',
    fontSize: amountFontSize
  },
  highlightedAmountNumber: {
    color: '#F6A523',
    fontSize: amountFontSize
  }
};

/* this line of code allows this class/file to be
   accessible in other parts of the app (in other files/classes)
*/
export default GenericCurrencyField;
