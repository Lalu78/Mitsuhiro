import React from 'react'
import TextField from '../Form/TextField';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextArea from '../Form/TextArea';
import axios from 'axios'

function Enquiry() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(
            yup.object().shape({
                fullName: yup.string().matches(/^[a-zA-Z0-9\s-]*$/, 'Invalid characters in name').required(),
                phoneNumber: yup.string().required(),
                email: yup.string(),
                city: yup.string().required(),
                state: yup.string().required(),
                message: yup.string()
            })
        ),
        defaultValues: {}
    });


    const onSubmit = (data) => {
        console.log(data);
        reset()
        alert("Form is submited successfully")

        axios.post('https://sheet.best/api/sheets/d4cfd7f2-a2c1-42ba-9972-6384470fba36', data).then(response => {
            console.log('response',response);
         
        })
    };


    return (
        <div className={`h-auto min-h-[570px] px-5  flex  w-full justify-center  bg-no-repeat bg-cover bg-center     `} style={{ backgroundImage: 'url("/images/ENQUIRY VV.png")', backgroundRepeat: 'no-repeat' }}>
            <div className='w-full max-w-[800px]'>
                <h1 className='pt-8 font-semibold md:font-bold text-2xl md:text-4xl text-center'> Become a Dealer</h1>
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
                        <div className='flex flex-col md:flex-row gap-3 md:gap-6'>
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
                            <TextField
                                type="email"
                                placeholder="Enter your mail Id"
                                label='E-mail ID'
                                name="email"
                                id="email"
                                register={register}
                                errors={errors}

                            />
                        </div>
                        <div className='flex flex-col md:flex-row gap-3 md:gap-6'>
                            <TextField
                                type="text"
                                placeholder="Enter your city"
                                label='City *'
                                name="city"
                                id="city"
                                register={register}
                                errors={errors}

                            />
                            <TextField
                                type="text"
                                placeholder="Enter your State"
                                label='State*'
                                name="state"
                                id="state"
                                register={register}
                                errors={errors}

                            />
                        </div>
                        <TextArea
                            type="text"
                            placeholder="Anything you want to say"
                            label='Message'
                            name="message"
                            id="message"
                            register={register}
                            errors={errors}

                        />
                        <div className='flex justify-center w-full  pb-10'>
                            <input
                                type="submit"
                                className='bg-black text-white font-bold text-base rounded-[6px] h-12 w-40 cursor-pointer '
                                value={'Submit'}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Enquiry
