
import { Link } from "react-router-dom";

const CARD_WIDTH = 350;
const MARGIN = 20;

const BlogSection = () => {

    return (
        <section className="bg-white w-full flex flex-col items-center justify-center my-24 " >
            <h1 className="text-4xl text-[#505050] font-bold mb-10 ">Blog</h1>
            <div className=" overflow-hidden max-w-[70rem] ">
                <div className="mx-auto max-w-full">
                    <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 " >
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
            className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1 rounded-3xl"
            style={{
                width: CARD_WIDTH,
                marginRight: MARGIN,
            }}
        >
            <img
                src={imgUrl}
                className="h-[200px] w-full object-cover rounded-t-3xl"
                alt={`An image for a fake blog post titled ${title}`}
            />
            <div className="flex-col bg-[#FB8302] rounded-b-3xl"> <p className="5 text-lg text-white font-medium px-2">{title}</p>
                <p className="text-sm mt-2 text-white max-h-30 line-clamp-6 px-2 pb-3">
                    {description}
                </p>
            </div>

        </Link>
    );
};

export default BlogSection;

type PostType = {
    id: number;
    imgUrl: string;
    title: string;
    description: string[];
};

const posts: PostType[] = [
    {
        id: 1,
        imgUrl: "/images/Surgical.png",
        title: "Factors for the success",
        description: ["Factors for the success disc"],
    },
    {
        id: 2,
        imgUrl: "/images/Surgical.png",
        title: "Lighting distribution factors",
        description: ["Lighting distribution factors disc"],
    },
    {
        id: 3,
        imgUrl: "/images/Surgical.png",
        title: "The most popular interior decoration",
        description: ["The most popular interior decoration styles disc"],
    },

];
