import React from 'react'
import TextField from '../Form/TextField';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextArea from '../Form/TextArea';
import CountryCode from '../Form/CountryCode';

function Enquiry() {

    const {
        register,
        clearErrors,
        control,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors, isSubmitSuccessful, isValid, },
        reset
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(
            yup.object().shape({
                fullName: yup.string().matches(/^[a-zA-Z0-9\s-]*$/, 'Invalid characters in name').required(),
                email: yup.string().required().email(),
                phoneNumber: yup.string().required(),
                subject: yup.string().required(),
            })
        ),
        defaultValues: {}
    });

    const onSubmit = (data) => {
        console.log(data);
        reset()
        alert("Form is submited successfully")
    };


    return (
        <div className={`h-auto min-h-[570px] px-5  flex  w-full justify-center border  bg-no-repeat bg-cover bg-center     `} style={{ backgroundImage: 'url("/images/ENQUIRY.svg")', backgroundRepeat: 'no-repeat' }}>
            <div className='w-full max-w-[800px]'>
                <h1 className='pt-8 font-semibold md:font-bold text-2xl md:text-4xl text-center'>  Enquire Now </h1>
                <div className=' mt-6 w-full '>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
                        <TextField
                            type="text"
                            placeholder="Enter your name"
                            label='Full Name *'
                            name="fullName"
                            id="fullName"
                            register={register}
                            errors={errors}

                        />
                        <div >
                            <TextField
                                type="text"
                                placeholder="Enter your mobile number"
                                label='Phone Number *'
                                countryCode={true}
                                name="phoneNumber"
                                id="phoneNumber"
                                register={register}
                                errors={errors}

                            />

                        </div>
                        <TextField
                            type="email"
                            placeholder="Enter your mail Id"
                            label='E-mail ID *'
                            name="email"
                            id="email"
                            register={register}
                            errors={errors}

                        />
                        <TextArea
                            type="text"
                            placeholder="For what this enquiry is about"
                            label='Subject'
                            name="subject"
                            id="subject"
                            register={register}
                            errors={errors}

                        />
                        <div className='flex justify-center w-full  pb-10'>
                            <input type='submit' value={'Submit'} className='bg-black text-white font-bold text-base rounded-[6px] h-12 w-40 cursor-pointer ' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Enquiry