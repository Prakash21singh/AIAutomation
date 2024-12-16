"use client"
import { useQueryAutomation } from '@/hooks/use-queries';
import React from 'react'
import ActiveTrigger from './active';
import { Separator } from '@/components/ui/separator';
import ThenAction from '../then/then-action';

type Props = {
    id:string;
}

function Trigger({id}: Props) {

  const {data} = useQueryAutomation(id);


  // if(data?.data && data?.data?.trigger.length > 0){
    return <div className='flex flex-col gap-y-6 items-center '>
      {/* WIP: Add this for type data?.data?.trigger[0].type*/}
      <ActiveTrigger 
        keywords={[
          {
            id:"sdkfhds",
            automationId:id,
            word:"PRODUCT"
          }
        ]}
        type={"COMMENT"}
      />
      {/*WIP:add this for the type data.data.trigger.length  */}
      {/* {data?.data?.trigger.length > 0 && <></>} */}

      <>
        <div className='relative w-6/12 mt-4'>
        <p className='absolute transform px-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>Or</p>
          <Separator
          orientation='horizontal'
          className='border-background-80 border-[1px]'
          />
        </div>

        <ActiveTrigger
          type='MESSAGE'
          keywords={[
            {
              automationId:id,
              id:"sdlkfj",
              word:"Mbappe"
            }
          ]}
        />
      </>


      <ThenAction   id=''/>
    </div>
  // }  
}

export default Trigger