export const Card = ({children, classNames}) => {
    const cls = classNames 
    ? 'rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark '+classNames 
    : 'rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark' 
    return (
        <div className={cls}>
            {children}
        </div>
    )
}

export const CardHeader = ({title, desc, children}) => (
    <div className='border-b border-stroke py-4 px-7 dark:border-strokedark'>
        <h3 className='font-medium text-black dark:text-white'>
            {title || children}
        </h3>
        <p className='font-medium text-black dark:text-white'>
            {desc}
        </p>
    </div>
)