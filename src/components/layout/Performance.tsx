import Image from "next/image"
import Affiliate from "@/assets/Affiliate.png"
import seo from "@/assets/seo.png"
import ima from "@/assets/ima.png"
import peao from "@/assets/peao.png"
const Performance = () => {
    return (
        <section>
            <div className="flex flex-col gap-16 p-16">
                <h1 className="title text-icons_color text-center">
                    Acelere o seu site e melhore sua Performance!
                </h1>

                <article className="flex flex-row gap-20 items-center justify-center w-5/6 m-auto">
                    <div>
                        <Image src={Affiliate} alt={"Marketing"}></Image>
                    </div>
                    <div className="w-[36.8rem] h-[19.3rem] text-title_gray flex flex-col space-y-6">
                        <h2 className="text-3xl font-bold">
                            Para {' '}
                            <span className="text-Ybutton">
                                aumentar o faturamento {' '}
                            </span>
                            da sua empresa
                        </h2>
                        <p className="text-lg">
                            Você está pronto para transformar a velocidade do seu site e oferecer a melhor experiência possível aos seus usuários? Nossa equipe de especialistas em otimização de sites está aqui para ajudar. Utilizamos as mais avançadas técnicas de SEO técnico e as melhores práticas de desenvolvimento web para garantir que seu site não só carregue rapidamente, mas também se mantenha seguro, acessível e otimizado para todos os dispositivos.
                        </p>
                    </div>
                </article>

                <div className="flex flex-row gap-20 items-center justify-center w-5/6 m-auto py-2 px-20 text-title_gray">
                    <article className="w-40 text-center flex flex-col items-center  gap-2 ">
                        <Image src={peao} alt="Velocidade" width={64} height={64} />
                        <span>Melhore a Velocidade
                        do Carregamento</span>
                    </article>
                    <article className="w-40 text-center  flex flex-col items-center gap-2 ">
                        <Image src={ima} alt="IMÃ" width={64} height={64} />
                        <span>Otimização
                        para Mobile</span>
                    </article >
                    <article className="w-40 text-center  flex flex-col items-center gap-2 ">
                        <Image src={seo} alt="SEO" width={64} height={64} />
                        <span>
                        SEO Técnico
                        </span>
                    </article >
                </div>

            </div>
        </section>
    )
}

export default Performance
