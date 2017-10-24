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
    height: '35%'
  },
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 30,
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
    margin: 5
  }
};
