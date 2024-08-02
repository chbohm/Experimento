import { ILoginError, ILoginProps,ISignUpProps,ISignUpError } from "@/interfaces";

export function validateLoginForm(values:ILoginProps):ILoginError{
const errors:ILoginError = {}
if(errors.email && ! /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
    errors.email="email invalido"
}
if(errors.password && !values.password){
    errors.password="contraseña requerida"
}
return errors
}

export function validateSignUpForm(values:ISignUpProps):ISignUpError{
    const errors:ISignUpError = {}
    if(errors.email && ! /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
        errors.email="email invalido"
    }
    if(errors.password && !values.password){
        errors.password="contraseña requerida"
    }
    if(errors.first_name && !values.first_name){
        errors.first_name="nombre requerido"
    }
    if(errors.last_name && !values.last_name){
        errors.last_name="apellidos requeridos"
    }
    if(errors.phone && !values.phone){
        errors.phone="telefono requerido"
    }
    if(errors.address && !values.address){
        errors.address="direccion requerida"
    }

    return errors
}
