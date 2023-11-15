import { useState } from 'react';

const types = {
    email:{
        regex:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Por favor, preencha com um email válido.'
    }
}

const useForm = (type) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(null);

    function onChange({target}){
        if(error) validate(target.value);
        setValue(target.value)
    };

    function validate(value){
        if (type === false) return true;
        if (value.length === 0){
            setError('Necessário preencher o campo para prosseguir');
            return false;
        }else if(types[type] && !types[type].regex.test(value)){
            setError(types[type].message);
            return false;
        }else{
            setError(null);
            return true;
        } 
    }
    return{
        value,
        setValue,
        onChange,
        error,
        validate: () => validate(value),
        onBlur: () => validate(value)
    }
}

export default useForm;