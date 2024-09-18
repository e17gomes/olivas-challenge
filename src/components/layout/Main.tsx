import Image from "next/image"
import { Button } from "../ui/Button"
import ImageLP from '@/assets/ImageLP.png';



const SobreTeste = () => {
  return (
    <main className='flex flex-row gap-10 items-center justify-center container '>
      <section className='w-[43rem] space-y-6'>
  <h1 className='title text-title_gray'>
    Teste de desenvolvimento  
    <span className='text-Ybutton block'>
      Front-end Next.JS
    </span>
  </h1>

  <article className="text-menu_gray">
    Bem-vindo ao nosso desafio de codificação React!
    Este teste avalia suas habilidades em desenvolver aplicações web
    interativas com React. Sua tarefa é construir uma aplicação que interaja
    com APIs externas e exiba dados de forma clara e eficiente.
    Estamos ansiosos para ver sua criatividade e qualidade de código em prática.
  </article>

  <Button>Entrar em contato</Button>
</section>
      <div>
        <Image src={ImageLP} alt={'First Image'} width={544} height={529} priority/>

        
      </div>
    </main>
  )
}

export default SobreTeste
