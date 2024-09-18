"use client"
import Image from "next/image";
import { ButtonInverse } from "../ui/Button";
import { FC } from "react";
import CardType from "@/types/CardType";



const CardBlog: FC<CardType> = ({ ImageCard, Text, Title }) => {

    
    return (
        <div 
        className="shadow-multiple rounded-3xl p-6 mb-7 w-96 h-[29rem]"
        >
            <div className="flex flex-col gap-6">
                <section
                    className="bg-red-200 w-full h-44 m-auto rounded-lg"
                >
                    <Image src={ImageCard} alt={''} width={'100'} height={'192'} />
                </section>

                <article
                    className="bg-200 w-80 h-56 text-title_gray flex flex-col gap-2 
         justify-center items-center"

                >
                    <h5 className="line-clamp-2 text-2xl font-bold text-title_gray">
                        {Title}
                    </h5>
                    <span className="line-clamp-2 text-menu_gray">
                        {Text}
                    </span>

                    <ButtonInverse>
                        Ler mais
                    </ButtonInverse>
                </article>
            </div>
        </div>
    )
}

export default CardBlog
