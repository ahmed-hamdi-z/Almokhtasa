// Dependencies
import React, { useRef, useState } from 'react';
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { IoCloseSharp } from "react-icons/io5";

const Form: React.FC = () => {
    const { t } = useTranslation();

    const [message, setMessage] = useState<string | null>(null);
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (form.current) {
            emailjs
                .sendForm(
                    "service_fov8fd6",
                    "template_bfmic6h",
                    form.current,
                    "4a4DTJQWlAsWrODSA"
                )
                .then(
                    () => {
                        setMessage("تم تسجيل ردكم بنجاح");
                        form.current;
                    },
                    (error) => {
                        setMessage(`FAILED... ${error.text}`);
                    }
                );
        }
    };
    return (
        <div className=" w-full h-full flex flex-col-reverse items-center ">
            <form className="bg-white shadow-md rounded-[30px] px-10 pt-6 pb-8 mb-4 md:w-[60%] w-[90%] " ref={form} onSubmit={sendEmail}>
                <h2 className="text-4xl md:text-7xl font-bold text-[#757575] text-center mt-10 mb-2"> {t("Contact")}</h2>
                <p className="text-md md:text-lg text-center mb-10 text-[#757575]">  {t("Get in touch")}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    {/* First Name */}
                    <div className="flex flex-col">
                        <label htmlFor="firstName" className="text-[#757575] ">
                            {t("First name")}
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="first_name"
                            placeholder={t("First name")}
                            className="mt-2 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Last Name */}
                    <div className="flex flex-col">
                        <label htmlFor="lastName" className="text-[#757575]">
                            {t("Last name")}
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="last_name"
                            placeholder={t("Last name")}
                            className="mt-2 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Email Address */}
                <div className="mt-4">
                    <label htmlFor="email" className="text-[#757575]">
                        {t("Email")}
                    </label>
                    <input
                        name="user_email"
                        type="email"
                        id="email"
                        placeholder={t("Email")}
                        className="w-full mt-2 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                {/* Phone */}
                <div className="mt-4">
                    <label htmlFor="phone" className="text-[#757575]">
                        {t("Phone")}
                    </label>
                    <input
                        type="tel"
                        id="country"
                        name="phone"
                        placeholder={t("Phone")}
                        className="w-full mt-2 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Notes */}
                <div className="mt-4">
                    <label htmlFor="notes" className="text-[#757575]">
                        {t("Notes")}
                    </label>
                    <textarea
                        id="notes"
                        name="message"
                        placeholder={t("Notes")}
                        className="w-full mt-2 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Submit Button */}
                <div className="mt-6 flex justify-center">
                    <button type="submit"
                        className="bg-teal-500 text-white px-10 py-2 rounded-full hover:bg-teal-600 transition duration-300">
                        {t("Submit")}
                    </button>
                </div>
            </form>
            {message && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="relative bg-gradient-to-br from-[#764095] via-purple-500 to-pink-500 bg-black bg-opacity-50 text-white p-6 rounded-2xl shadow-2xl w-96 h-40 flex flex-col items-center justify-center transform transition-transform duration-300">

                        {/* Close Button */}
                        <button
                            onClick={() => setMessage(null)}
                            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200"
                            aria-label="Close"
                        >
                            <IoCloseSharp size={24} />
                        </button>

                        {/* Message Text */}
                        <p className="text-xl font-bold mb-4">{message}</p>

                        {/* Close Button */}
                        <button
                            onClick={() => setMessage(null)}
                            className="bg-white text-[#764095] px-6 py-2 rounded-full font-semibold hover:bg-[#764095] hover:text-white transition-colors duration-200 ease-in-out shadow-md"
                        >
                            {t("Close")}
                        </button>
                    </div>
                </div>

            )}
            <div className='z-10 md:mb-[-11vh] mb-[-5vh]'>
                <img src="/images/contact-img.png" alt="#" className='md:w-[600px] w-[330px]' />
            </div>
        </div>
    )
};

export default Form;
