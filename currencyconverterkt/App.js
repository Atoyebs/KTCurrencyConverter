import React from 'react';
import {Text, View } from 'react-native';

//importing the GenericCurrencyField custom component
import GenericCurrencyField from './src/components/GenericCurrencyField';
import RoundButton from './src/components/RoundButton';

const buttonMargin = {horizontal: 65, vertical: 30};

export default class App extends React.Component {


  constructor(props){

    super(props);

    //this array will hold all the buttons
    this.buttonArray = ['1', '2', '3', '4', '5', '6', '7' , '8' , '9', '.', '0', 'DEL' ];

  }

  /* this function handles what happens when any button is pressed
     and it has two parameters:
     text - the text that represents the button value (usually an integer)
     isDeleteButton - a boolean value that will tell us whether the delete button
                      was the button pressed.
  */
  buttonPressed = (text, isDeleteButton) => {
    console.log("The button pressed was = " + text + "       & isDeleteButton = " + isDeleteButton);
  }


  render() {
    return (

      /*This is the topmost (parent container) everything is inside this container*/
      <View style={viewStyles.container}>

        {/* this view represents the headerArea */}
        <View style={viewStyles.headerArea}>
          <Text style={textStyles.header}>CURRENCY CONVERTER</Text>
        </View>

        <View style={viewStyles.currencyBlockBackground}>

          <GenericCurrencyField
            currencyDescription={'NGN'}
            iconFlag={require('./src/images/nig_flag.png')}
            displayAmountNumber={0}
          />

          <GenericCurrencyField
            currencyDescription={'GBP'}
            iconFlag={require('./src/images/uk_flag.png')}
            displayAmountNumber={0}
          />

          <View style={viewStyles.exchangeRateDetail}>
            <Text style={textStyles.currencyDescription}>1 NGN = 0.0021 GBP</Text>
            <Text style={textStyles.currencyDescription}>1 GBP = 465.8221 NGN</Text>
          </View>

        </View>

        <View style={viewStyles.keypad}>

          {
            this.buttonArray.map((data, index) => {
                if (data == "DEL") {
                  return (
                    <RoundButton
                      key={index}
                      number={data}
                      isDeleteButton={true}
                      buttonPressed={(text, isDeleteButton) => this.buttonPressed(text, isDeleteButton)}
                      marginStyling={{ marginBottom: buttonMargin.vertical}}
                    />
                  );
                }
                else if((index + 1) % 3 == 0){
                  return(
                    <RoundButton
                      key={index}
                      number={data}
                      buttonPressed={(text, isDeleteButton) => this.buttonPressed(text, isDeleteButton)}
                      marginStyling={{ marginBottom: buttonMargin.vertical}}
                    />
                  );
                }
                else {
                  return (
                    <RoundButton
                      key={index}
                      number={data}
                      buttonPressed={(text, isDeleteButton) => this.buttonPressed(text, isDeleteButton)}
                      marginStyling={{ marginRight: buttonMargin.horizontal, marginBottom: buttonMargin.vertical}}
                    />
                  );
                }
            })
          }



        </View>

      </View>
    );
  }
}

const viewStyles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingTop: 15
  },
  /* the style for the headerArea of the app
     the headerArea will house the title of the app
  */
  headerArea: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  /* This view will be the background to the GenericCurrencyFields and the currency exchange detail*/
  currencyBlockBackground: {
    backgroundColor: '#252525',
    width: '100%',
    height: '30%'
  },
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 25,
    width: '100%',
    height: '60%'
  },
  exchangeRateDetail: {
    flex: 1.5,
    alignItems: 'center',
    paddingTop: 2
  }
};

const textStyles = {
  header: {
    fontSize: 19,
    fontWeight: '500'
  },
  currencyDescription: {
    color:'white',
    margin: 2.5
  }
};
