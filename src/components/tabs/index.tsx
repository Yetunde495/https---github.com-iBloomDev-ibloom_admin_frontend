import React from 'react';
import {FaUbuntu} from 'react-icons/fa';

interface TabsProps {
    tabs?: any; 
    onChange?: (item: any)=> void; 
    activeTab?: string;
    children?: React.ReactNode;
    flexColumnOnMidBreakpoint?: boolean;
    noStyles?: boolean;
}

interface TabProps {
    children?: React.ReactNode;
    tab?: string;
    activeTab: string;
    onChange: (tab: string) => void; 
    
}

export const Tab: React.FC<TabProps> = ({children, tab, activeTab, onChange,}) => {
    let val: any = tab || children

  

    let classNames = "border-b-2 cursor-pointer py-2 text-sm font-medium hover:text-primary md:text-base text-primary";
    let clsN = val === activeTab ? classNames+' flex flex-row text-primary border-primary' : classNames+' flex flex-row border-transparent';
    
    return (
        <div onClick={() => onChange(val)} className={clsN} >
            {children} {tab}
        </div>
    )  
}

export default function Tabs({tabs, onChange, activeTab, children, flexColumnOnMidBreakpoint = false}: TabsProps) {
    let baseClassNames = "border-b-2 py-4 text-sm font-medium hover:text-primary md:text-base text-primary";
    const commonClass = "mb-3 flex flex-wrap"
    const classNames = flexColumnOnMidBreakpoint
    ? `md:flex-col sm:gap-3 gap-3 ${commonClass}`
    : `sm:gap-10 gap-5 ${commonClass}`;
    return (
        <div className="rounded-sm h-full border-stroke bg-white pt-2 px-4 shadow-default dark:border-strokedark dark:bg-boxdark">
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

