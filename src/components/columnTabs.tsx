import React from 'react';
import {FaUbuntu} from 'react-icons/fa';

interface TabsProps {
    tabs?: any; 
    onChange?: (item: any)=> void; 
    activeTab?: string;
    children?: React.ReactNode;
    flexColumnOnMidBreakpoint?: boolean;
}

interface TabProps {
    children?: React.ReactNode;
    tab?: string;
    activeTab: string;
    onChange: (tab: string) => void; 
    
}

export const ColumnTab: React.FC<TabProps> = ({children, tab, activeTab, onChange,}) => {
    let val: any = tab || children

  

    let classNames = " rounded-md py-1 px-2 text-sm font-medium hover:text-primary hover:bg-[#3c50e030] md:text-base";
    let clsN = val === activeTab ? classNames+' flex flex-row text-primary bg-[#3c50e030]' : classNames+' flex flex-row border-transparent';
    
    return (
        <a onClick={() => onChange(val)} className={clsN} href="#/">
            {children} {tab}
        </a>
    )  
}

export default function ColumnTabs({tabs, onChange, activeTab, children, flexColumnOnMidBreakpoint = false}: TabsProps) {
    let baseClassNames = "border-b-2 py-2 text-sm font-medium hover:text-primary md:text-base text-primary";
    const commonClass = "mb-3 flex flex-wrap border-b border-stroke dark:border-strokedark"
    const classNames = flexColumnOnMidBreakpoint
    ? `md:flex-col sm:gap-3 gap-3 ${commonClass}`
    : `sm:gap-10 gap-5 ${commonClass}`;
    return (
        <div 
        className="rounded-sm h-full border-stroke bg-white px-2 py-3 shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className={classNames}>

                {
                    tabs ? tabs?.map((item: any, index: string) => {
                        let clsN = activeTab === item ? baseClassNames+' flex flex-row text-primary border-primary' : baseClassNames+' flex flex-row border-transparent'
                        return (<a key={index+'-'+item} 
                        onClick={() => typeof onChange === 'function' ? onChange(item) : {}} 
                        className={clsN} 
                        href="#/">
                        <FaUbuntu style={{marginTop:'5px', marginRight: '5px'}}/>
                        {item}
                    </a>)  
                    }): children                    
                }
            </div>
        </div>
    )
}