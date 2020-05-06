import {inWords} from './DigitToWord';
import {ErrorMessage} from './Types';
import {MessageConstant} from './MessageConstant';

// Validator to check with regex and return the message and valid flag

export const getValue = (str: string): ErrorMessage=> {
  const regex = /^-?[0-9]*(,[0-9]*)?$/;
    if(!regex.test(str)){  
       return ({
           msg: MessageConstant.ONLY_NUMBER,
           valid: false
       });
    }else if(regex.test(str) && parseInt(str)<0){ 
        return ({
            msg: MessageConstant.NEGATIVE_NUMBER_NOT_ALLOWED,
            valid: false
        });             
      }else if(regex.test(str) && parseInt(str)>=0 && parseInt(str.replace(',',''))<=99999 ){
      let value: string= inWords(str);
        return ({
            msg: value,
            valid: true
        }); 
      }else if(regex.test(str) && parseInt(str.replace(',',''))>99999){
        return ({
            msg: MessageConstant.RANGE_ERROR,
            valid: false
        });
      } else{
        return ({
            msg: MessageConstant.ENTER_VALUE,
            valid: false
        });
      } 
}