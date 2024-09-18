import LogoHeader from "../ui/Logo-header"

export default function Footer() {
    return (
      <footer className=" py-4 bg-gray-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center ">
          <div className="flex flex-col items-center">
        <LogoHeader widthSize="120" heightSize="64"/>
            <p className="text-xs text-gray-600 max-w-md">
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
              <a href="#" className="text-gray-400">
                <img src="/placeholder.svg?height=20&width=20" alt="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400">
                <img src="/placeholder.svg?height=20&width=20" alt="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400">
                <img src="/placeholder.svg?height=20&width=20" alt="LinkedIn" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 h-12  text-center py-2 text-xs text-white w-full bg-gray-800">
          © 2014-2024 - Olivas Digital
        </div>
      </footer>
    )
  }

