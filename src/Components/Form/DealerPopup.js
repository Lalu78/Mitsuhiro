import React from 'react'
import Modal from './Modal';
import TextField from '../Form/TextField';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextArea from '../Form/TextArea';
import axios from 'axios'


function DealerPopup({ onCancel, show }) {

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
                email: yup.string().required().email(),
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
        <Modal
            width='w-full md:w-[650px] lg:w-[850px]'
            show={show}
            heading="Become a Dealer"
            onCancel={onCancel}
        >
            <div>
                <p>Our motto is to promote green energy and eco system for a pollution free environment, we bring you an opportunity to start your own business, star a new gateway of work, life, and needs into an integrated existence.</p>
                <p className='mt-10 text-[#F7911E] font-medium text-lg italic'>Please fill this form</p>
                <div className='mt-8'>

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
                                label='E-mail ID *'
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
                                className={`bg-[#F7911E] h-12 w-40 rounded font-bold text-base text-black cursor-pointer`}
                                value={'Submit'}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    )
}

export default DealerPopup