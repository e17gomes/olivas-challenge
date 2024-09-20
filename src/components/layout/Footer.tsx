import Facebook from "../ui/icons/Facebook"
import Instagram from "../ui/icons/Instagram"
import Linkedin from "../ui/icons/Linkedin"
import LogoHeader from "../ui/Logo-header"

export default function Footer() {
    return (
      <footer className=" pt-4 bg-gray-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center md:flex-row flex-col">
          <div className="flex flex-col  items-center space-y-6">
        <LogoHeader widthSize="24"  />
            <p className="text-xs text- max-w-md title_gray px-6 md:px-0">
              A Olivas Digital é uma martech (marketing technology company),
              que há mais de 10 anos ajuda empresas de todos os portes e
              segmentos a impulsionarem suas vendas no digital.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <h3 className="font-semibold text-sm mb-1 col-span-2">Fale conosco</h3>
            <article className="">
            <p className="text-xs font-bold text-title_gray">Atendimento</p>
            <p className="text-xs text-gray-600 mb-2">+55 (11) 2391-6090</p>
            </article>

            <div className="flex flex-col justify-center space-x-2 text-xs">
              <p className="text-xs font-bold text-title_gray">Redes Sociais</p>
                <p className="flex gap-2">
                <Facebook/> <Instagram/> <Linkedin/>
                </p>
            </div>
          </div>
        </div>
        <div className="mt-4 h-12  text-center pt-4 text-xs text-white w-full bg-title_gray">
          © 2014-2024 - Olivas Digital
        </div>
      </footer>
    )
  }

