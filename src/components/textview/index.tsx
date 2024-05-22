import React from 'react';

type colors = 'primary' | 'success' | 'danger' | 'warning'

const getColor = (name: colors) => {
    return name === 'primary' ? 'text-primary'
    : name === 'success' ? 'text-success'
    : name === 'danger' ? 'text-danger'
    : name === 'warning' ? 'text-warning'
    : 'text-black'
}

export default function TextView(
    {children, title, value, titleColor, valueColor, className}: 
    {children?: React.ReactNode, title: string, value?: string, titleColor?: colors, valueColor?: colors, className?: string}
){
    let containerClass = '';
    let titleClass = 'mb-0 text-sm font-medium';
    let valueClass = 'mb-1 text-sm text-black';

    containerClass += className ? className : ''
    titleClass += titleColor ? ' '+getColor(titleColor) : ''
    valueClass += valueColor ? ' '+getColor(valueColor) : ''

    return (
        <div className={containerClass}>
            <h4 className={`${titleClass} dark:text-white`}>{title}</h4>
            <h6 className={`${valueClass} dark:text-white`}>{value || children}</h6>
        </div>
    )
}