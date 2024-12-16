import { useListener } from '@/hooks/use-automation'
import React from 'react'
import TriggerButton from '../trigger-button'

type Props = {
  id:string
}

function ThenAction({
  id
}: Props) {

  const {
    isPending,
    listener,
    onFormSubmit,
    onSetListener,
    register
  } = useListener(id)

  return <TriggerButton label={"Then"}>
    Children
  </TriggerButton>
}

export default ThenAction