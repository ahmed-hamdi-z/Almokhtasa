
import { useTranslation } from "react-i18next";

const StuffSection = () => {
    const { t } = useTranslation();

    return (
        <section className="bg-white w-full flex flex-col items-center justify-center my-20" >
            <div className="bg-stuff-text w-full flex justify-center h-[40vh]" >
                <h1 className="text-5xl text-white font-semibold mt-4 ">{t("Our Stuff")} </h1>
            </div>
            <div className=" overflow-hidden flex items-center justify-center mt-[-18vh] ">
           
                    <div className=" grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-5 mx-2 ">
                        {posts.map((post) => {
                            return <Post key={post.id} {...post} />;
                        })}
                    </div>
            
            </div>  
        </section>
    );
};

const Post = ({ id, imgUrl, title, description }: PostType) => {
    const { t } = useTranslation();
    return (
        <div 
            key={id}
            className="relative shrink-0 transition-transform hover:-translate-y-1 rounded-3xl ">
            <img
                src={imgUrl}
                className="h-[400px] md:h-[400px] lg:h-[500px] w-full object-cover "
                alt={`An image for a fake blog post titled ${title}`}
            />
            <div className="flex-col text-[#8B8B8B] rounded-b-3xl p-3 max-h-30 items-center justify-center text-center">
                 <p className="text-lg  font-medium ">{t(title)}</p>
                <p className="text-sm mt-2 line-clamp-6 ">
                    {t(description)}
                </p>
            </div>

        </div>
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
        id: 3,
        imgUrl: "/images/Ahmed.jpg",
        title: "Dr/Ahmed Marey",
        description: ["Bachelor of Veterinary"],
    },
    {
        id: 2,
        imgUrl: "/images/Najat.jpeg",
        title: "Dr/Najat Seif Eldin",
        description: ["General Practitioner"],
    },
  
    {
        id: 4,
        imgUrl: "/images/Mark.jpg",
        title: "Dr/Mark Ojuok",
        description: ["General Practitioner"],
    },
    {
        id: 6,
        imgUrl: "/images/AbdEljabar.jpg",
        title: "Mohamed Abd Eljabar",
        description: ["Veterinary Assistant"],
    },
    {
        id: 5,
        imgUrl: "/images/AbdElQadir.jpeg",
        title: "Abd ElQadir",
        description: ["Radiologist"],
    },
    
    {
        id: 7,
        imgUrl: "/images/Qutaiba.jpg",
        title: "Qutaiba Al Khair",
        description: ["Veterinary Assistant"],
    },
    {
        id: 8,
        imgUrl: "/images/Perfecto.jpeg",
        title: "Dr/Perfecto Altares",
        description: ["General Practitioner"],
    },
    {
        id: 1,
        imgUrl: "/images/Eslam.jpg",
        title: "Dr/Eslam Shreef",
        description: ["General Surgeon"],
    },
];
