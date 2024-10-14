
import { Link } from "react-router-dom";

const ServicesCards = () => {

    return (
        <section className="bg-white w-full flex flex-col items-center justify-center my-24 p-2" >
          
            <div className=" ">
                <div className=" w-full">
                    <div className="grid md:grid-cols-4 grid-cols-1 gap-8" >
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
            className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1 rounded-3xl mx-auto">
            <img
                src={imgUrl}
                className="h-[200px] w-[250px] object-cover rounded-3xl"
                alt={`An image for a fake blog post titled ${title}`}
            />
            <div className="flex-col w-[250px] rounded-b-3xl"> <p className=" text-lg text-black font-medium px-2">{title}</p>
                <p className="text-sm mt-2 text-black max-h-30 line-clamp-5 px-2 pb-3">
                    {description}
                </p>
            </div>

        </Link>
    );
};

export default ServicesCards;

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
        title: "The most popular interior ",
        description: ["The most popular interior decoration styles disc"],
    },
    {
        id: 3,
        imgUrl: "/images/Surgical.png",
        title: "The most popular interior ",
        description: ["The most popular interior decoration styles disc"],
    },
    {
        id: 3,
        imgUrl: "/images/Surgical.png",
        title: "The most popular interior ",
        description: ["The most popular interior decoration styles disc"],
    },
    {
        id: 3,
        imgUrl: "/images/Surgical.png",
        title: "The most popular interior ",
        description: ["The most popular interior decoration styles disc"],
    },
    {
        id: 3,
        imgUrl: "/images/Surgical.png",
        title: "The most popular interior ",
        description: ["The most popular interior decoration styles disc"],
    },
    {
        id: 3,
        imgUrl: "/images/Surgical.png",
        title: "The most popular interior ",
        description: ["The most popular interior decoration styles disc"],
    },
    {
        id: 3,
        imgUrl: "/images/Surgical.png",
        title: "The most popular interior ",
        description: ["The most popular interior decoration styles disc"],
    },
    {
        id: 3,
        imgUrl: "/images/Surgical.png",
        title: "The most popular interior ",
        description: ["The most popular interior decoration styles disc"],
    },
];
