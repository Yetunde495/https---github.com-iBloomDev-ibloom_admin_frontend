import React from 'react';
import {Option} from '../../../components/MultiSelect';
import { FilterCollapsible } from '../../../components/Collapsible';

const Checkbox: React.FC<{
    isSelected: boolean;
    value: string;
    name: string;
    onChecked: (name: string, value: string) => void;
}> = ({ isSelected, onChecked, value, name }) => (
    <div className="my-2">
        <input value={value} checked={isSelected} onChange={() => onChecked(name, value)} type="checkbox" id={name} />
        <label htmlFor={name} className="ml-2 text-[14px]">{value}</label>
    </div>
)





export const SearchpageFilter = () => {
    const [ageOpen, setAgeOpen] = React.useState(true);
    const [genderOpen, setGenderOpen] = React.useState(true);
    const [classOpen, setClassOpen] = React.useState(true);
    const [ages, setAges] = React.useState<any>({});
    const [gender, setGender] = React.useState<any>({});
    const [status, setStatus] = React.useState<any>({});
    const [setEdu] = React.useState<any>({});
    const [selectedOptions] = React.useState<Option[]>([]);

    const handleCheckedEvent = (key: string, val: string) => {
        if (key.match(/age-(\w+)/)) {
            if (ages[key]) {
                let ns = Object.assign({}, status);
                delete ns[key];
                setAges(ns);
            } else {
                setAges((ps: any) => ({ ...ps, [key]: val }))
            }
        }

        if (key.match(/status-(\w+)/)) {
            if (ages[key]) {
                let ns = Object.assign({}, status);
                delete ns[key];
                setStatus(ns);
            } else {
                setStatus((ps: any) => ({ ...ps, [key]: val }))
            }
        }

        if (key.match(/gender-(\w+)/)) {
            if (ages[key]) {
                let ns = Object.assign({}, status);
                delete ns[key];
                setGender(ns);
            } else {
                setGender((ps: any) => ({ ...ps, [key]: val }))
            }
        }

        if (key.match(/edu-(\w+)/)) {
            if (ages[key]) {
                let ns = Object.assign({}, status);
                delete ns[key];
                setEdu(ns);
            } else {
                setEdu((ps: any) => ({ ...ps, [key]: val }))
            }
        }
    }
    // const handleMultiSelectChange = (newSelectedOptions: Option[]) => {
    //     setSelectedOptions(newSelectedOptions);
    //     console.log('Selected options:', newSelectedOptions);
    //   };

   
   
    
    React.useEffect(() => {
        if (selectedOptions.length > 0) {
            console.log(selectedOptions)
        }
    })
    return (
        <div className='w-full max-w-md mx-auto'>
    <FilterCollapsible title="Age" isOpen={ageOpen} onToggle={() => setAgeOpen(!ageOpen)}>
    <Checkbox name="age-18-24" value="18-24" isSelected={ages['age-18-24']} onChecked={handleCheckedEvent} />
                        <Checkbox name="age-25-30" value="24-30" isSelected={ages['age-25-30']} onChecked={handleCheckedEvent} />
                        <Checkbox name="age-31-35" value="31-35" isSelected={ages['age-31-35']} onChecked={handleCheckedEvent} />
                        <Checkbox name="age-36-40" value="36-40" isSelected={ages['age-36-40']} onChecked={handleCheckedEvent} />
                        <Checkbox name="age-above-40" value="above 40" isSelected={ages['age-above-40']} onChecked={handleCheckedEvent} />
                    
      </FilterCollapsible>

      <FilterCollapsible title="Class" isOpen={classOpen} onToggle={() => setClassOpen(!classOpen)}>
                       <Checkbox name="kg" value="KG & Nurs" isSelected={ages['cls-kg-nurs']} onChecked={handleCheckedEvent} />
                        <Checkbox name="pry-1-6" value="Primary" isSelected={ages['pri-1-6']} onChecked={handleCheckedEvent} />
                        <Checkbox name="pry-1-3" value="PRI 1-3" isSelected={ages['pri-1-3']} onChecked={handleCheckedEvent} />
                        <Checkbox name="pri-4-6" value="PRI 4-6" isSelected={ages['pri-4-6']} onChecked={handleCheckedEvent} />
                        <Checkbox name="sec-1-6" value="Secondary" isSelected={ages['sec-1-6']} onChecked={handleCheckedEvent} />
                        <Checkbox name="sec-1-3" value="JSS 1-3" isSelected={ages['sec-1-3']} onChecked={handleCheckedEvent} />
                        <Checkbox name="sec-4-6" value="SSS 1-3" isSelected={ages['SSS 1-3']} onChecked={handleCheckedEvent} />
                        <Checkbox name="sec-4-6" value="SSS 1-3" isSelected={ages['SSS 1-3']} onChecked={handleCheckedEvent} />
                    
      </FilterCollapsible>

      <FilterCollapsible
        title="Gender"
        isOpen={genderOpen}
        onToggle={() => setGenderOpen(!genderOpen)}
      >
       <Checkbox name="gender-male" value="male" isSelected={gender['gender-male']} onChecked={handleCheckedEvent} />
                        <Checkbox name="gender-female" value="female" isSelected={gender['gender-female']} onChecked={handleCheckedEvent} />
                        <Checkbox name="gender-other" value="other" isSelected={gender['gender-other']} onChecked={handleCheckedEvent} />
                    
      </FilterCollapsible>
     
            

 

          

          
        </div>
    )
}