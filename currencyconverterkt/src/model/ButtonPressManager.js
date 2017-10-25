/*
  The purpose of the ButtonManager class is to manage what happens when a button is pressed
*/


class ButtonPressManager {

  /*
    This function will handle when a button is pressed by passing in the value of the button that
    was pressed, whether it is the delete button (boolean), and the value of the button that
    was last pressed.
    Return: This function/method will return a string
  */

  static numberPressed(currentValue, buttonPressedValue, isDeleteButton, lastPressedButtonValue){

    /*
      buttonPressedValue is in string format
      currentValue is in string format also
    */

    /*whatever returnValue is set to at the end of the execution is what will be returned */
    let returnValue = '';

    /* convert the currentValue to an integer with parseInt() and check if it is == 0 (then asign it to isZero variable)
       this will either be true or false, there are no other possible values
    */
    let isZero = (parseInt(currentValue) == 0);
    //this will be a simple true or false, buttonPressedValue either equals a . or it doesn't
    let isDecimalButtonPressed = (buttonPressedValue == '.');

    //if the delete button is pressed
    if (isDeleteButton) {

      /* RULE: if the second to last character is a decimal point when the delete button is pressed
        then delete both the last number and the decimal point */

        let isSecondToLastCharacterDecimalPoint = (currentValue.charAt(currentValue.length - 2) == '.');

        if (isSecondToLastCharacterDecimalPoint) {
          /*Delete the decimal point as well as the last number (take off the last two digits)*/
          let currentValueLessLastTwoDigits = currentValue.slice(0, -2);
          returnValue = currentValueLessLastTwoDigits;
        }
        /* RULE: if the number of digits showing in the field is greater than 1, then remove the last digit*/
        else if (currentValue.length > 1) {
          //take off the last digit
          let currentValueLessLastDigit = currentValue.slice(0, -1);
          returnValue = currentValueLessLastDigit;
        }
        else {
          //set the return value to 0 in EVERY OTHER CASE
          returnValue = '0';
        }

    }
    /*RULE: If the decimal button is pressed AND the lastButtonPressed WAS NOT the decimal button*/
    else if(isDecimalButtonPressed && (lastPressedButtonValue != '.')){
      //add on .0 when the decimal button is pressed
      returnValue = currentValue + '.0';
    }
    //In every other case apart from the Delete button and decimal point button execute the below
    else {
      //if the currentValue (showing in the currenlty highlighted field ) is 0
      if(isZero){
        returnValue = buttonPressedValue;
      }
      /*OTHERWISE if the last button that was pressed was a decimal point*/
      else if(lastPressedButtonValue == '.'){

        /*replace the zero after the decimal with the button that was just pressed*/
        let currentValueLessZeroAfterDecimalPoint = currentValue.slice(0, -1);
        returnValue = currentValueLessZeroAfterDecimalPoint + '' + buttonPressedValue
      }
      /*IN EVERY OTHER CASE, add on the number pressed to what is currently being displayed*/
      else {
        returnValue = currentValue + '' + buttonPressedValue;
      }

    }

    //return whatever is in return value after all the conditional execution
    return returnValue;

  }

}

export default ButtonPressManager;
