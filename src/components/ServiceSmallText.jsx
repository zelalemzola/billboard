import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'

const ServiceSmallText = () => {
    const words= `Backed with Professionals we help your Business Strive through`
  return (
    <div>
        <TextGenerateEffect words={words} />
    </div>
  )
}

export default ServiceSmallText