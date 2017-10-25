/*
  1 GBP = 477.34 NGN
  1 USD = 360.50 NGN
  1 NGN = 0.0021 GBP
  1 NGN = 0.0028 USD
*/

class Currency {

  constructor(identifier, nairaEquivalent, sterlingEquivalent, dollarEquivalent, currencySign ){
    this.shorthand = identifier;
    this.nairaEquivalent = nairaEquivalent;
    this.sterlingEquivalent = sterlingEquivalent;
    this.dollarEquivalent = dollarEquivalent;
    this.currencySign = currencySign;
    this.currentStringDisplayValue = '0';
  }


  toNaira(amount){
    return (amount * this.nairaEquivalent);
  }

  toPound(amount){
    return (amount * this.sterlingEquivalent);
  }

  toUSD(amount){
    return (amount * this.dollarEquivalent);
  }

  exchangeRateDetail(alternateCurrency){
    let string = "1 " + this.shorthand + " = " + this.exchangeRateForAlternateCurrency(alternateCurrency) + " " + alternateCurrency.shorthand;
    return string;
  }

  exchangeRateForAlternateCurrency(alternateCurrency){
    //switch depending on the currency passed in to the function
    switch (alternateCurrency.shorthand) {

      case currencyList.nigeria:
        return this.nairaEquivalent;
        break;

      case currencyList.britain:
        return this.sterlingEquivalent;
        break;

      default:
        return this.dollarEquivalent;
    }

  }

}

/*We do this to safeguard against future change. If for whatever reason any of
  the below currency identifiers change, we only need to change it in one place
  and it'll change outside the app.
*/
const currencyList = {
  nigeria: 'NGN',
  britain: 'GBP',
  america: 'USD'
};

Currency.currencyList = currencyList;

export default Currency;
