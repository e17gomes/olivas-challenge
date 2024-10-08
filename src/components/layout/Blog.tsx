import { Button } from "../ui/Button"
import BlogList from "../ui/BlogList"



const Blog = () => {


    return (
        <section id="BLG" 
         className="pb-14 flex flex-col items-center gap-6">
            <article className="flex flex-col gap-6 items-center justify-center w-5/6 m-auto ">
                <h1
                    className="text-2xl md:text-5xl font-extrabold text-center text-title_gray">
                    Últimas do {' '}
                    <span className="text-icons_color">
                        Blog
                    </span>
                </h1>
                <BlogList />
            </article>
            <div className="flex flex-col items-center gap-4">


                <Button>Veja mais</Button>
            </div>
        </section>
    )
}

export default Blog
