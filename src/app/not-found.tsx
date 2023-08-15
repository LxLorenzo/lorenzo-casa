import React from 'react'
import Button from './components/Button'

const PageNotFound = () => {
  return (
    <div className="container mx-auto min-h-[calc(100vh-500px)] flex flex-col items-center py-28">
      <h1 className="text-4xl font-light text-center text-zinc-950">
        Oops... Parece que você está perdido!
      </h1>
      <Button href="/">Voltar para o início</Button>
    </div>
  )
}

export default PageNotFound
