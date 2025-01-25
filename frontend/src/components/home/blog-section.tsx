
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
 import { posts, PostType } from "../../data";

const BlogSection = () => {
    const { t } = useTranslation();

    return (
        <section className="bg-white w-full flex flex-col items-center justify-center md:mt-0 mt-16 mb-24" >
            <h1 className="text-4xl text-[#505050] font-bold mb-10 ">{t("Blog")}</h1>
            <div className=" overflow-hidden max-w-[70rem] mx-3">
                <div className="mx-auto max-w-full">
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 " >
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
        <Link
            to={`/details/${id}`}
            key={id}
            className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1 rounded-3xl">
            <img
                src={imgUrl}
                className="h-[230px] w-full object-cover rounded-t-3xl"
                alt={`An image for a fake blog post titled ${title}`}
            />
            <div className="flex-col max-h-24 bg-stuff-text rounded-b-3xl p-3 rtl:text-right"> <p className="5 text-lg text-white font-medium ">{t(title)}</p>
                <p className="text-sm mt-2 text-white max-h-10 line-clamp-6 ">
                    {t(description)}
                </p>
            </div>

        </Link>
    );
};

export default BlogSection;
