import { Button } from "../ui/Button"
import RendSessions from "@/components/ui/rendSessions"
// import CardBlog from "../ui/CardBlog"
import PostsApi from "@/api/api-blog"


const Blog = () => {
PostsApi()

    return (
        <section className="pb-14 flex flex-col items-center gap-6">
            <article className="flex flex-col gap-6 items-center justify-center w-5/6 m-auto ">
                <h1
                    className="title text-center text-title_gray">
                    Últimas do {' '}
                    <span className="text-icons_color">
                        Blog
                    </span>
                </h1>
            {/* <CardBlog/> */}
            </article>
            <div className="flex flex-col items-center gap-4">

            <RendSessions/>
            <Button>Veja mais</Button>
            </div>
        </section>
    )
}

export default Blog
