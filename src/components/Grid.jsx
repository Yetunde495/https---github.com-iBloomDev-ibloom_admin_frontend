export const GridRow3 = ({ children }) => (
    <div className='grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3'>
        {children}
    </div>
)

export const GridRow2 = ({ children }) => (
    <div className='grid grid-cols-1 gap-9 sm:grid-cols-2'>
        {children}
    </div>
)

export const FlexRow = ({ children, rtl }) => {
    let cls = rtl ? 'flex flex-row justify-end' : 'flex flex-row'
    return (
        <div className={cls}>
            {children}
        </div>
    )
}

export const FlexCol = ({ children, btt }) => {
    let cls =  btt ? 'flex flex-col justify-end' : 'flex flex-col'
    return (
        <div className={cls}>
            {children}
        </div>
    )
}

export const InputGridRow = ({children}) => (
    <div class="mb-5.5 mt-3 flex flex-col gap-5.5 sm:flex-row">
        {children}
    </div>
)