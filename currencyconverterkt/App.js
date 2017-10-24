import React from 'react';
import {Text, View } from 'react-native';

//importing the GenericCurrencyField custom component
import GenericCurrencyField from './src/components/GenericCurrencyField';

export default class App extends React.Component {
  render() {
    return (

      /*This is the topmost (parent container) everything is inside this container*/
      <View style={viewStyles.container}>

        {/* this view represents the headerArea */}
        <View style={viewStyles.headerArea}>
          <Text style={textStyles.header}>CURRENCY CONVERTER</Text>
        </View>

        <View style={viewStyles.currencyBlockBackground}>
          <GenericCurrencyField />
        </View>

        <View style={viewStyles.keypad}>

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
    padding: 30,
    width: '100%',
    height: '60%'
  }
};

const textStyles = {
  header: {
    fontSize: 19,
    fontWeight: '500'
  }
};
