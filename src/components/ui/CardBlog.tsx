"use client"
import Image from "next/image";
import { ButtonInverse } from "../ui/Button";
import { FC } from "react";
import CardType from "@/types/CardType";
import Link from "next/link";




const CardBlog: FC<CardType> = ({ ImageCard, Text, Title, LinkP }) => {

    return (
        <div 
        className="shadow-multiple rounded-3xl p-6 mb-7 w-fit md:w-96 h-fit md:h-[29rem]"
        >
            <div className="flex flex-col gap-6">
                <section
                    className="bg-red-200 w-full h-44 m-auto rounded-lg relative"
                >
                    <Image src={ImageCard||''} alt={''} layout="fill"  className="rounded-lg" />
                </section>

                <article
                    className="bg-200 w-80 h-56 text-title_gray flex flex-col gap-2 
                     justify-center items-center"

                >
                    <h5 className="line-clamp-2 text-2xl font-bold text-title_gray ">
                        {Title}
                    </h5>
                    <span className="line-clamp-2 text-menu_gray">
                        {Text}
                    </span>

                    <ButtonInverse asChild>
                        <Link href={LinkP} target="_blank">
                         Ler mais
                        </Link>
                    </ButtonInverse>
                </article>
            </div>
        </div>
    )
}

export default CardBlog
