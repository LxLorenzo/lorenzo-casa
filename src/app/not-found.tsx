import React from 'react'
import Button from './components/Button'

const PageNotFound = () => {
  return (
    <div className="container mx-auto min-h-[calc(100vh-380px)] flex flex-col items-center pt-28">
      <h1 className="text-4xl font-light text-center text-zinc-950">
        Oops... Você está perdido?
      </h1>
      <Button href="/">Voltar para o início</Button>
    </div>
  )
}

export default PageNotFound