import imagePC from "@/assets/imagePC.png"
import Image from "next/image"
import GroupUsers from "@/components/ui/icons/GroupUsers"
import Lead from "../ui/icons/Lead"
import Chart from "../ui/icons/Chart"
import Cart from "../ui/icons/Cart"
import Clock from "../ui/icons/Clock"


const SEO = () => {
    const results = [
        {describe:'Visitas do seu site',
          icon: <GroupUsers/>  
        },
        {describe:'Mais leads gerados por mês',
          icon: <Lead/>  
        },
        {describe:'Oportunidades geradas por mês',
          icon: <Chart/>  
        },
        {describe:'Vendas realizadas por mês',
          icon: <Cart/>  
        },
        {describe:'Tempo de carregamento do site',
          icon: <Clock/>  
        },
     
    ]

    const renderResult =  results.map((result, index)=>(
        <li key={index}
        className="flex gap-1 p-2"
        >
            {result.icon} {result.describe}
        </li>
    ))
 
    return (
        <section id="SEO">

            <div className="py-[5.6rem] flex flex-row gap-2 items-center justify-center w-5/6 m-auto">

                <article className="shadow-multiple rounded-[2rem]">
                    <h1 className='text-2xl md:text-5xl font-extrabold text-title_gray text-center'>
                        SEO, ou {' '}
                        <span className='text-Ybutton'>
                            otimização
                        </span>
                    </h1>

                    <section className="grid md:grid-cols-2  justify-center items-center text-title_gray p-8 text-xs md:text-lg">
                        <div>É uma estratégia crucial para melhorar a visibilidade e o ranking de um site nos resultados de pesquisa orgânica de motores de busca como Google, Bing e Yahoo.  A prática de SEO envolve uma série de técnicas e metodologias que visam otimizar aspectos internos e externos de um website para torná-lo mais atrativo

                         
                         <span className="block py-2">            
                            O que pode ajudar com os seguintes resultados
                         </span>
                            <ul>
                               {renderResult}
                            </ul>
                            
                         </div>
                        <div className="flex items-center justify-center">
                            <Image src={imagePC} alt="SEO" width={468} height={416}/>
                        </div>
                    </section>
                </article>

            </div>

        </section>
    )
}

export default SEO
