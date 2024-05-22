import React from 'react';
import {FaUbuntu} from 'react-icons/fa';

interface TabsProps {
    tabs?: any; 
    onChange?: (item: any)=> void; 
    activeTab?: string;
    children?: React.ReactNode;
    noStyles?: boolean;
}

interface TabProps {
    children?: React.ReactNode;
    tab?: string;
    activeTab: string;
    onChange: (tab: string) => void; 
    
}

export const ColumnTab: React.FC<TabProps> = ({children, tab, activeTab, onChange,}) => {
    let val: any = tab || children

  

    let classNames = " rounded-sm p-2 text-[14px] hover:bg-white";
    let clsN = val === activeTab ? classNames+' flex flex-row text-[#4d4d4d] bg-white' : classNames+' text-white flex flex-row border-transparent';
    
    return (
        <a onClick={() => onChange(val)} className={clsN} href="#/">
            {children} {tab}
        </a>
    )  
}

export default function ColumnTabs({tabs, onChange, activeTab, children}: TabsProps) {
    let baseClassNames = "border-b-2 py-2 text-sm font-medium hover:text-primary md:text-base text-primary";
    const classNames = "mb-3 flex flex-col sm:gap-3 gap-3"

    return (
        <div 
        className="rounded-sm h-full bg-transparent px-2 py-3">
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