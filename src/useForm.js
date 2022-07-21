import {useState, useEffect} from 'react'

const UseForm = (callback,validate) =>{
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        creditCardNumber: '',
        cvv: '',
    })

    const [errors,setErrors] = useState({})
   
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e =>{

        const {name, value} = e.target;

        

        setValues({
            ...values, 
            [name] : value 

        });

    };

    const handleAddition = e =>{
        this.setState({total: parseInt(values.lavaLamp)})
        e.preventDefault();
        
    }

    const handleSubmit = e =>{
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);
    }

    useEffect(() =>{

        //if the errors length is equal to 0.
        if(Object.keys(errors).length === 0 && isSubmitting){
            callback();

        }
    }, [errors]);

    return {handleChange,values,handleSubmit,errors,handleAddition};
};

export default UseForm;