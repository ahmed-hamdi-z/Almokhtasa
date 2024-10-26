
import { Link } from "react-router-dom";
import { posts, PostType } from "../../data";


const BlogCards = () => {

    return (
        <section className="w-full flex flex-col items-center justify-center  " >
       
            <div className=" overflow-hidden max-w-[70rem] mx-3 ">
                <div className="mx-auto max-w-full">
                    <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  " >
                        {posts.map((post) => {
                            return <Post key={post.id} {...post} />;
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Post = ({ id, imgUrl, title, description }: PostType) => {

    return (
        <Link
            to={`/details/${id}`}
            key={id}
            className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1 rounded-3xl ">
            <img
                src={imgUrl}
                className="h-[200px] w-full object-cover rounded-2xl"
                alt={`An image for a fake blog post titled ${title}`}
            />
            <div className="flex-col text-[#8B8B8B] text-center my-3"> <p className="text-lg font-medium px-2">{title}</p>
                <p className="text-sm mt-2 max-h-20 line-clamp-6 px-2 pb-3">
                    {description}
                </p>
            </div>
        </Link>
    );
};

export default BlogCards;

