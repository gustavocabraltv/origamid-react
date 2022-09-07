import React, { createContext } from 'react';

const validationType = {
  email: {
    regex:  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    ,
    message: 'Preencha um email válido'
  }
}

const useForm = (type) => {


  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null)

    function validate(value){
        if(type === false) return true;
        if(value.length === 0){
            setError('Preencha um valor');
            return false
        } else if (validationType[type] && !validationType[type].regex.test(value)){
            setError(validationType[type].message);
            return false
        } else {
            setError(null);
            return true;
        }
  
    }

  function onChange({ target }) {
    setValue(target.value);
  }

  return { 
    value, 
    setValue, 
    onChange, 
    error,
    validate: () => validate(value),
    onBlur: () => validate(value)
};
};

export default useForm;