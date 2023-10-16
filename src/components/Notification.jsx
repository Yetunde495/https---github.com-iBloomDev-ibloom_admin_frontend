import React from 'react'

export default function Notification({title, msg, children, variant}) {
    let cls = variant === 'info' ? 'mb-3 text-2xl font-bold text-primary dark:text-white'
    : variant === 'error' ? 'mb-3 text-2xl font-bold text-danger dark:text-white'
    : variant === 'success' ? 'mb-3 text-2xl font-bold text-success dark:text-white'
    : variant === 'warning' ? 'mb-3 text-2xl font-bold text-warning dark:text-white'
    : 'mb-3 text-2xl font-bold text-black dark:text-white'

  return (
        <div>
            <h2 className={cls}>{title}</h2>
            <p className='font-small'>{msg ||children}</p>
        </div>
    )
}
