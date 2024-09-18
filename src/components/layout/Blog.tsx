import Image from "next/image";
import Affiliate from "@/assets/Affiliate.png";
import { ButtonInverse } from "../ui/Button";



const Blog = () => {
  return (
    <section className="pb-14">
        <div className="flex flex-col gap-6 items-center justify-center w-5/6 m-auto ">
                <h1 
            className="title text-center text-title_gray">
                Últimas do {' '}
                <span className="text-icons_color">
                 Blog
                </span>
            </h1>

            <div className="shadow-multiple rounded-3xl p-6 w-96 h-[29rem]">
                <div className="flex flex-col gap-6">
                    <section className="bg-red-200 w-full h-48 m-auto rounded-3xl">
                    <Image src={Affiliate} alt={''} width={'100'} height={'192'}/>
                    </section>
                    <article className="bg-200 w-80 h-56 text-title_gray flex flex-col gap-2 
                    justify-center items-center
                    ">
                        <h3 className="line-clamp-2 text-xl font-bold text-title_gray">
                        Como aumentar em mais de 700% a captação de leads
                        </h3>
                        <span className="line-clamp-2 text-menu_gray">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro facere voluptates ex, consectetur dicta sed, assumenda in quos voluptatibus corrupti blanditiis obcaecati pariatur harum quaerat quidem quo dolorem dignissimos cum?
                        </span>

                        <ButtonInverse>
                            Ler mais
                        </ButtonInverse>
                    </article>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Blog
