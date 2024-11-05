import { useTranslation } from "react-i18next";

const ServicesCards = () => {
   
    return (
        <section className="bg-white w-full flex flex-col items-center justify-center my-24 p-2" >
            <div className="">
                <div className=" w-full">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8" >
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
    const { t } = useTranslation();
    return (
        <div key={id}
            className="flex flex-col items-center  shrink-0 transition-transform hover:-translate-y-1 rounded-3xl ">
            <div className="flex flex-col w-full items-center ">
                <p className="absolute text-lg text-footer-text font-medium px-2 md:mt-1 mt-3 text-center ">{t(title)}</p>

                <img
                    src={imgUrl}
                    className="md:h-[250px] md:w-[20vw] w-[80vw] object-cover rounded-3xl"
                    alt={`An image for a fake blog post titled ${title}`}
                />
            </div>

            <div className="flex-col md:w-[250px] w-full rounded-b-3xl">
            </div>
            <p className="text-sm mt-2 text-black max-h-30 line-clamp-7 mx-5 text-center px-2 pb-3">
                {t(description)}
            </p>
        </div>
    );
};

export default ServicesCards;

type PostType = {
    id: number;
    imgUrl: string;
    title: string;
    description: string;
};

const posts: PostType[] = [
    {
        id: 1,
        imgUrl: "/images/Emergency.png",
        title: "Emergency Services",
        description: "Emergency Services disc",
    },
    {
        id: 2,
        imgUrl: "/images/Mobile.png",
        title: "Mobile Veterinary Services",
        description: "Mobile Veterinary Services disc",
    },
    {
        id: 3,
        imgUrl: "/images/Surgical.png",
        title: "Surgical Procedures",
        description: "Surgical Procedures disc",
    },
    {
        id: 4,
        imgUrl: "/images/Specialized.png",
        title: "Specialized Veterinarians",
        description: "Specialized Veterinarians disc",
    },
    {
        id: 5,
        imgUrl: "/images/Examination.png",
        title: "Examination Rooms",
        description: "Examination Rooms disc",
    },
    {
        id: 6,
        imgUrl: "/images/Radiology.png",
        title: "Radiology",
        description: "Radiology disc",
    },
    {
        id: 7,
        imgUrl: "/images/Boarding.png",
        title: "Boarding and Therapeutic",
        description: "Boarding and Therapeutic disc",
    },
    {
        id: 8,
        imgUrl: "/images/Laboratory.png",
        title: "Laboratory",
        description: "Laboratory disc",
    },
    {
        id: 9,
        imgUrl: "/images/Grooming.png",
        title: "Grooming Services",
        description: "Grooming Services disc",
    },
    {
        id: 10,
        imgUrl: "/images/Pet.png",
        title: "Pet Supplies",
        description: "Pet Supplies disc",
    }
];