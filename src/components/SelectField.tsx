import React from 'react';

type SelectFieldProps = {
    label: string;
    value: string;
    id: string;
    name: string;
    classNames?: string;
    placeholder?: string;
    defaultValue?: string;
    defaultChecked?: boolean;
    description?: string;
    isRequired?: boolean;
    disabled?: boolean;
    children?: React.ReactNode;
    selectProps?: object;
    onChange: (value: string) => void;
}
type SelectFieldOptionProps = {
    value: string;
    isDefault?: boolean;
    children?: React.ReactNode;
    disabled?: boolean;
}

export function SelectFieldOption({
    value, 
    isDefault, 
    children, 
    disabled
}: SelectFieldOptionProps) {
    return (
        <option 
            defaultChecked={isDefault} 
            disabled={disabled} 
            id={value} 
            value={value}
        >{children}</option>
    )
}

export default function SelectField({
    label,
    value,
    onChange,
    id,
    name,
    classNames,
    isRequired,
    disabled,
    defaultValue,
    children,
    description,
    selectProps,
    defaultChecked
}: SelectFieldProps) {
    const containerClass = classNames ? 'w-full ' + classNames : 'w-full';
    const requiredField = isRequired ? <span className='text-danger'>&#42;</span> : null;
    
    return (
        <div className={containerClass}>
            <label htmlFor={name} className='mb-2.5 block text-black dark:text-white'>
                {label}{requiredField}
            </label>
            <div className='relative bg-gray z-20 bg-transparent dark:bg-form-input'>
                <select
                    name={name}
                    value={value}
                    id={id}
                    defaultChecked={defaultChecked} 
                    defaultValue={defaultValue}
                    disabled={disabled} 
                    onChange={e => onChange(e.target.value)} 
                    className='relative z-20 w-full appearance-none rounded 
                    border border-stroke py-3 px-5 outline-none 
                    transition bg-gray focus:border-primary active:border-primary 
                    dark:border-form-strokedark dark:bg-form-input 
                    dark:focus:border-primary' 
                    {...selectProps}>
                    {children}
                </select>
                <span className='absolute top-1/2 right-4 z-30 -translate-y-1/2'>
                    <svg
                        className='fill-current'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <g opacity='0.8'>
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z'
                                fill=''
                            ></path>
                        </g>
                    </svg>
                </span>
            </div>
            {description ? (<small>{description}</small>) : null}
        </div>
    )
}
