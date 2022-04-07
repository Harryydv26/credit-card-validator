import { useState } from "react";
import validateInfo from './ValidateInfo'
const useForm = () => {
  const [values, setValues] = useState({
    name: "",
    number: "",
    expiration: "",
    cvc: "",
    focus: "",
  });

  const [errors, setErrors] = useState({
	cname:"",
	ccvc:"",
cexp:"",
ctype:"",
cnumber:""

});
  const handleFocus = (e) => {
		setValues({...values,
			focus: e.target.name
})
};

  const handleChange = (e) => {
		const {name, value} = e.target
setValues({
	...values,
[name]:value
})
};

  const handleSubmit = (e) => {
	e.preventDefault();	
setErrors(validateInfo(values))
};

  return { handleChange, handleFocus, handleSubmit, values, errors };
};
export default useForm;