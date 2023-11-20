import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from '../components/BreadCrumb';
import Tabs, { Tab } from '../components/tabs';
import AllComponentStep from './AllComponents/tabSteps';

const tabIconStyle = {marginTop:'5px', marginRight: '5px'};

export default function Components() {
  const [tab, setTab] = React.useState<string>('Basic')
  return (
    <DefaultLayout>
      


      <Tabs>
        <Tab tab='Basic' activeTab={tab} onChange={setTab}>
        </Tab>
        <Tab tab='Forms' activeTab={tab} onChange={setTab}>
        </Tab>
        
      </Tabs>
     
       
       <div className='bg-white pb-6 border border-t-0 border-stroke dark:border-strokedark dark:bg-boxdark-2 dark:text-bodydark min-h-[400px]'>
       <AllComponentStep
        step={tab}
      />
       </div>
      
    </DefaultLayout>
  )
}