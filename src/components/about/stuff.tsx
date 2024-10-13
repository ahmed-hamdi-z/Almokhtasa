
import { Link } from "react-router-dom";

const CARD_WIDTH = 350;
const MARGIN = 20;

const StuffSection = () => {

    return (
        <section className="bg-white w-full flex flex-col items-center justify-center my-24 " >
            <h1 className="text-4xl text-[#505050] font-bold mb-10 ">Our Stuff</h1>
            <div className="bg-black w-full flex  h-[50vh]" >
                <p className="text-white px-10 py-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolore et possimus repudiandae! Autem accusamus, rem magni
                    voluptatem est esse doloribus quaerat non itaque id in assumenda blanditiis magnam odio sunt repellendus,
                    veniam quidem aliquid iste quis voluptatibus
                    fugiat expedita distinctio? Voluptatem laborum officiis
                    reiciendis maxime tempora odio nihil veritatis? Autem!</p>
            </div>
            
            <div className=" overflow-hidden flex items-center justify-center mt-[-18vh] ">
                <div className="mx-auto max-w-full">
                    <div className="flex flex-col gap-4 md:flex-row " >
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

export default StuffSection;

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
