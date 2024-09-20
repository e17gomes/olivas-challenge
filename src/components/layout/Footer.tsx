import LogoHeader from "../ui/Logo-header"

export default function Footer() {
    return (
      <footer className=" pt-4 bg-gray-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center md:flex-row flex-col">
          <div className="flex flex-col items-center">
        <LogoHeader widthSize="89" heightSize="80" className="md:w-24 h-12"/>
            <p className="text-xs text-gray-600 max-w-md px-6 md:px-0">
              A Olivas Digital é uma martech (marketing technology company),
              que há mais de 10 anos ajuda empresas de todos os portes e
              segmentos a impulsionarem suas vendas no digital.
            </p>
          </div>
          <div className="text-right">
            <h3 className="font-semibold text-sm mb-1">Fale conosco</h3>
            <p className="text-xs text-gray-600">Atendimento</p>
            <p className="text-xs text-gray-600 mb-2">+55 (11) 2391-6090</p>
            <div className="flex justify-end space-x-2">
              <p className="text-xs text-gray-600">Redes Sociais</p>

            </div>
          </div>
        </div>
        <div className="mt-4 h-12  text-center pt-4 text-xs text-white w-full text-">
          © 2014-2024 - Olivas Digital
        </div>
      </footer>
    )
  }

