import Image from "next/image"
import { Button } from "../ui/Button"
import ImageLP from '@/assets/ImageLP.png';



const SobreTeste = () => {
    return (
        <main>
            <div className="flex flex-col md:flex-row gap-2 items-center justify-center w-5/6 m-auto">

                <section className='w-full md:w-[45rem] space-y-6 p-4 md:p-12 pl-0'>
                    <h1 className='text-xl font-extrabold md:text-5xl text-title_gray'>
                        Teste de desenvolvimento
                        <span className='text-Ybutton block'>
                            Front-end Next.JS
                        </span>
                    </h1>

                    <article className="text-menu_gray text-xs md:text-xl ">
                        Bem-vindo ao nosso desafio de codificação React!
                        Este teste avalia suas habilidades em desenvolver aplicações web
                        interativas com React. Sua tarefa é construir uma aplicação que interaja
                        com APIs externas e exiba dados de forma clara e eficiente.
                        Estamos ansiosos para ver sua criatividade e qualidade de código em prática.
                    </article>

                    <Button className="text-xs px-6 md:text-xl md:px-16" >Entrar em contato</Button>
                </section>
                {/* Desk */}
                <div className="hidden md:block" >
                    <Image src={ImageLP} alt={'First Image'} width={530} height={528} priority />
                </div>
                {/* Mobile */}
                <div className="block md:hidden w-40" >
                    <Image src={ImageLP} alt={'First Image'} width={530} height={528} priority />
                </div>
            </div>
        </main>
    )
}

export default SobreTeste
