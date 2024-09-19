import Link from "next/link"
import { Button } from "../ui/Button"


const FormDesk = () => {
    return (
        <div className="py-16 flex flex-col items-center gap-16 justify-center w-5/6 m-auto">

            <article className="text-title_gray flex flex-col items-center justify-center w-[54.2rem] gap-6 ">
                <h1 className='title'>
                    Entre em contato e {' '}
                    <span className="text-Ybutton">
                        receba atendimento
                    </span>
                </h1>

                <span className="text-center">
                    Por favor, preencha o formulário abaixo com suas informações e a sua mensagem. Nossa equipe entrará em contato com você o mais breve possível.
                </span>
            </article>

            <section className="grid grid-cols-2 gap-6 w-4/6 text-title_gray">
                <div>
                    <h6 className="text-title-gray font-bold">Nome completo <span className="text-Ybutton font-bold">*</span></h6>
                    <input type="text" className="border-[1.5px] border-Ybutton rounded-lg w-full outline-none p-4 py-2" />
                </div>
                <div>
                    <h6 className="text-title-gray font-bold">Email completo <span className="text-Ybutton font-bold">*</span></h6>
                    <input type="text" className="border-[1.5px] border-Ybutton rounded-lg w-full outline-none p-4 py-2" />
                </div>
                <div>
                    <h6 className="text-title-gray font-bold">Telefone <span className="text-Ybutton font-bold">*</span></h6>
                    <input type="text" className="border-[1.5px] border-Ybutton rounded-lg w-full outline-none p-4 py-2" />
                </div>
                <div>
                    <h6 className="text-title-gray font-bold">Qual a sua função na empresa <span className="text-Ybutton font-bold">*</span></h6>
                    <select className="border-[1.5px] border-Ybutton rounded-lg w-full outline-none p-4 py-2">
                        <option value="">Selecione um cargo</option>
                        <option value="desenvolvedor">Desenvolvedor</option>
                        <option value="designer">Designer</option>
                        <option value="gerente">Gerente</option>
                    </select>
                </div>
                <div className="col-span-2">
                    <h6 className="text-title-gray font-bold">Mensagem <span className="text-Ybutton font-bold">*</span></h6>
                    <textarea className="border-[1.5px] resize-none h-36 border-Ybutton rounded-lg w-full outline-none p-4 py-2" />
                </div>
                <div className="col-span-2">
                    <label className="flex w-full pl-1 pr-8">
                        <input type="checkbox" className="peer hidden" />
                        <div className="w-6 h-6 border-[1.5px] border-Ybutton rounded-md peer-checked:bg-Ybutton peer-checked:border-Ybutton mr-6"></div>
                        <span className="flex-1 ">
                            Ao informar meus dados, eu concordo com a {' '}
                            <Link href={"https://www.olivas.digital/politica-de-privacidade/"} target={'_blank'} className="underline">
                                Política de Privacidade 
                            </Link>
                            {' '}  e concordo em receber comunicações.
                        </span>
                    </label>
                </div>

            </section>
                <Button>
                Receber atendimento
                </Button>
        </div>
    )
}

export default FormDesk
