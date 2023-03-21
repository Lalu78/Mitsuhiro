import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import CountryCode from './CountryCode';

const TextField = ({
    errors,
    register,
    name,
    label,
    type,
    getValues,
    inputboxClass,
    setlabelTop = false,
    disabled = false,
    maxlength = '500',
    countryCode = false,
    ...inputProps
}) => {

    return (


        <div className={`relative w-full flex flex-col gap-1.5 ${inputProps.readOnly && 'opacity-50'} ${inputboxClass} ${inputProps.className} `}>
            <label className='text-Gray-900 font-nromal text-sm'>{label}{inputProps.isRequired && <span className="required">*</span>}</label>
            <div className='flex gap-2'>
                {countryCode && <CountryCode />}
                <input
                    {...(register && { ...register(name) })}
                    type={type}
                    maxLength={maxlength}
                    {...inputProps}

                    className={`${inputProps.inputClassName} ${disabled ? 'disabled-input' : 'bg-white'} textField w-full p-3 text-black border border-[#AAAAAA]  rounded outline-none text-sm transition duration-150 ease-in-out font-normal h-11 border-solid focus:border-2 focus:border-primary-400  placeholder-iron-gray focus:outline-none placeholder-[#A6B0CF] hover:border-gray-400 ${errors?.[name] ? 'focus:border-error' : ''
                        }`}
                    placeholder={inputProps.placeholder}
                    disabled={disabled}
                />
            </div>
            {errors?.[name] && (
                <div className="required">
                    {errors[name].message}
                </div>
            )}
        </div>

    );
};

export default TextField;

