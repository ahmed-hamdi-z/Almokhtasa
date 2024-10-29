import React from "react";
import { useParams } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { posts } from "@/data";


const Details: React.FC = () => {

    const { id } = useParams<{ id: string }>();
    const post = posts.find((post) => post.id === parseInt(id || "", 10));

    const { t } = useTranslation();

    if (!post) {
        return <p>Post not found</p>;
    }

    return (
        <div className="flex flex-col  w-full h-full pt-28 ">
            <div className="flex flex-col items-center justify-center text-center ">
                <h1 className="text-3xl font-semibold px-3">
                    {t(post.title)}
                </h1>
                <img
                    src={post.imgUrl}
                    alt=""
                    className="mt-10 px-3"
                />
                <p className="text-3xl md:mx-10 font-semibold m-3 ">
                    {t(post.subtitle)}
                </p>
                <div className=" rtl:text-right md:mx-10 text-xl md:px-20 ">
                    <p className="text-center m-3">{t(post.title1)}</p>
                    {post.description.map((description, index) => (
                        <ul className="leading-10 text-xl mx-3 p-2 list-disc">
                            <li  className="" key={index} >
                                {t(description)}
                            </li>
                        </ul>
                    ))}
                    <p className="text-xl md:mx-10 p-2 text-center mb-10">
                        {t(post.subtitle2)}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Details;
