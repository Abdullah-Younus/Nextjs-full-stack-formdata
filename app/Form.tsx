"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function Form() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const formHandler = async (data: any) => {
        console.log(data);
        const res = await fetch("/api/formHandler", {
            method: "POST",
            body: JSON.stringify(data)
        });
        console.log('Response',res);
    }

    return (
        <>
            <div className='mx-10 my-10'>
                <h1>React Hook Form</h1>
                <form className='flex space-x-10' onSubmit={handleSubmit(formHandler)}>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            placeholder='Enter Your Email'
                            {...register("email", {
                                required: true
                            })}
                            className='border'
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            placeholder='Enter Your Password'
                            {...register("password", {
                                required: true
                            })}
                            className='border'
                        />
                    </div>
                    <div>
                        <button type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form;