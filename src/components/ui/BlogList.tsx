"use client";

import { FC, useEffect, useState } from "react";
import CardBlog from "@/components/ui/CardBlog";
import getDataPosts from "@/api/api-blog";
import { GetNewsType } from "@/types/TypesApi";
import RendSessions from "@/components/ui/rendSessions"; 
import { Loader } from "lucide-react";


const BlogList: FC = () => {
    const [posts, setPosts] = useState<GetNewsType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await getDataPosts();
                setPosts(data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch posts" + err);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) return <div className="animate-spin"><Loader size="100"/></div>;
    if (error) return <div>Error: {error}</div>;

    // Calcula o índice inicial e final dos posts a serem exibidos
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPosts = posts.slice(startIndex, endIndex);

    // Calcula o número total de páginas
    const totalPages = Math.ceil(posts.length / itemsPerPage);

    // Corrige a página atual para não exceder o número total de páginas
    const correctedPage = Math.min(Math.max(currentPage, 1), totalPages);

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-6">
                {currentPosts.map((post) => (
                    <CardBlog
                        key={post.id}
                        ImageCard={post.yoast_head_json.og_image?.[0]?.url || ""}
                        Title={post.title.rendered}
                        Text={post.excerpt.rendered}
                        LinkP={post.link}
                    />
                ))}
            </div>

            <RendSessions
                currentPage={correctedPage}
                totalPages={3}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default BlogList;
