import Currency from './Currency';

/*
  The purpose of this factory is to help us to easily create different Currency objects
*/

/*
  1 GBP = 477.34 NGN
  1 USD = 360.50 NGN
  1 NGN = 0.0021 GBP
  1 NGN = 0.0028 USD
*/

class CurrencyFactory {

  /*The factory will have a static method/function which means that we do not have to
    instantiate this class (make it an object) in order to use the createCurrencyWithIdentifier
    function.
  */

  /* The createCurrencyWithIdentifier function will only take the shorthand for the currency
     as a parameter but set up the whole currency object for us with all its details.
     For example when it takes NGN as its ONLY parameter it will set up the entire Nigerian
     naira currency.
  */
  static createCurrencyWithIdentifier(identifier){

    switch (identifier) {
      case Currency.currencyList.nigeria:
        let nigerianCurrency = new Currency(identifier, 1, 0.0021, 0.0028, 'N');
        return nigerianCurrency;
        break;

      case Currency.currencyList.britain:
        let britishCurrency = new Currency(identifier, 477.34, 1, 1.32, '£');
        return britishCurrency;
        break;

      default:
        let usaCurrency = new Currency(identifier, 360.50, 0.76, 1, '$');
        return usaCurrency;
        break;
    }

  }

}

export default CurrencyFactory;
