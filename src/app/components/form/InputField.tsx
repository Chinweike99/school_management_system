import React from 'react'
import { FieldError } from "react-hook-form"

type InputFieldProps = {
    label: string;
    type?: string;
    register: any;
    name: string;
    error?: FieldError;
    defaultValue?: string;
    inputProps?: React.HTMLAttributes<HTMLInputElement>;

}


const InputField = ({label, type, register, name, defaultValue, 
    error, inputProps}: InputFieldProps) => {
  return (
    <div className='flex flex-col gap-2 w-full md:w-1/4'>
       <label className='text-xs text-gray-500'>{label}</label>
            <input type={type} {...register(name)} {...inputProps} 
            defaultValue={defaultValue}
            className='ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm'/>
            {error?.message && <p className='text-sm text-red-500'>{error.message.toString()}</p>}

            
    </div>
  )
}

export default InputField
