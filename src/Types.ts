//Add all the type here
export interface ErrorMessage{
    msg :string,
    valid: boolean
} 
export interface IState{
    rangeInput : string,
    regexp : RegExp,
    errorMessage: ErrorMessage,
    visible : boolean
  }