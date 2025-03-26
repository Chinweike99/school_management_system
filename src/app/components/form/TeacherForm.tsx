import React from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import InputField from './InputField';
import { error } from 'console';
import Image from 'next/image';
import { Upload } from 'lucide-react';


const schema = z.object({
    username: z.string().min(4, { message: 'Username Must be least 3 characters' })
        .max(25, { message: 'Username Must  not exceed 25 characters' }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: 'Password must be more than 8 characters' }),
    firstName: z.string().min(2, { message: 'First name is required' }),
    lastName: z.string().min(2, { message: 'last name is required' }),
    phone: z.string().min(1, { message: 'Phone number is required ' }),
    address: z.string().min(1, { message: 'Address is required ' }),
    birthday: z.date({ message: 'Address is required ' }),
    sex: z.enum(["male", "female"], { message: "Sex is required" }),
    imag: z.instanceof(File, { message: "Image is required" }),
});

type Inputs = z.infer<typeof schema>;

const TeacherForm = ({ type, data }: {
    type: "create" | "update",
    data?: any,
}) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });

    return (
        <div>
            <form action="" className='flex flex-col gap-8' onSubmit={handleSubmit((d) => console.log(d))}>

                <h1 className='text-xl font-semibold'>
                    Create New teacher
                </h1>
                <span className='text-xs text-gray-400 font-medium'>
                    Authentication Information
                </span>

                <div className='flex justify-between flex-wrap gap-4'>
                    <InputField
                        label='Username'
                        name='Username'
                        defaultValue={data?.username}
                        register={register} error={errors?.username} />

                    <InputField
                        label='Email'
                        name='email'
                        type='email'
                        defaultValue={data?.email}
                        register={register} error={errors?.email} />

                    <InputField
                        label='Password'
                        name='password'
                        type='password'
                        defaultValue={data?.password}
                        register={register} error={errors?.password} />

                    <InputField
                        label='First Name'
                        name='firstName'
                        type='text'
                        defaultValue={data?.firstName}
                        register={register} error={errors?.firstName} />

                    <InputField
                        label='Last Name'
                        name='lastName'
                        type='text'
                        defaultValue={data?.lastName}
                        register={register} error={errors?.lastName} />

                    <InputField
                        label='Address'
                        name='address'
                        type='text'
                        defaultValue={data?.address}
                        register={register} error={errors?.address} />

                    <InputField
                        label='Phone'
                        name='phone'
                        type='number'
                        defaultValue={data?.phone}
                        register={register} error={errors?.phone} />

                    <InputField
                        label='Birthday'
                        name='birthday'
                        type='date'
                        defaultValue={data?.birthday}
                        register={register} error={errors?.birthday} />

                    <InputField
                        label='sex'
                        name='sex'
                        type='text'
                        defaultValue={data?.sex}
                        register={register} error={errors?.sex} />

                    <InputField
                        label='Image'
                        name='imag'
                        type='text'
                        defaultValue={data?.image}
                        register={register} error={errors?.imag} />

                    {/* defaultValue={defaultValue}
            className='ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm'/>
            {error?.message && <p className='text-sm text-red-500'>{error.message.toString()}</p>} */}
                    <div className='flex-1 lg:max-w-[500px]'>
                        <label className='text-xs text-gray-500'>Sex</label>
                        <select className='ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full' {...register("sex")} defaultValue={data?.sex}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        {
                            errors.sex?.message && (
                                <p className='text-sm text-red-500'>{errors.sex.message.toString()}</p>
                            )
                        }
                    </div>
                    <div className=''>
                        <label className='text-xs text-gray-500 flex items-center gap-2 cursor-pointer'>
                            <Upload />
                            <span>Upload a photo</span>
                        </label>
                        <input type="file" {...register("imag")} />
                        {
                            errors.imag?.message && (
                                <p className='text-sm text-red-500'>{errors.imag.message.toString()}</p>
                            )
                        }
                    </div>

                </div>
                {/* <div>
            <label className='text-xs text-gray-500'>Sex</label>
            <select className='ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full' {...register("sex")} defaultValue={data?.sex}>
                <option value="Male">Male</option>    
                <option value="Female">Female</option>    
            </select>
            </div> */}


                <button className='bg-blue-500 text-white p-2 rounded-md'>
                    {type === "create" ? "Create" : "Update"}
                </button>
            </form>

        </div>
    )
}

export default TeacherForm
