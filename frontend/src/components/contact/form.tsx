import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Form: React.FC = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setErrors({});
      } else {
        if (result.errors) {
          // Display validation errors
          const errorMessages: { [key: string]: string } = {};
          result.errors.forEach((err: { path: string[]; message: string }) => {
            errorMessages[err.path[0]] = err.message;
          });
          setErrors(errorMessages);
        } else {
          alert(result.message || "Failed to submit form.");
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center -space-y-[38px] md:-space-y-[68px]">
      <div className="z-10">
        <img
          src="/images/contact-img.png"
          alt="#"
          className="md:w-[600px] w-[330px]"
        />
      </div>
      <form
        className=" bg-white shadow-md rounded-[30px] px-10  pb-8 mb-4 md:w-[60%] w-[90%]"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <h1 className="text-4xl md:text-7xl font-bold text-[#757575] text-center mt-10 mb-2 ">
          {t("Contact")}
          </h1>

          <label className="block text-[#757575] p-1.5 font-medium"> {t("name")}</label>
          <input
            type="text"
            name="name"
            placeholder={t("name")}
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2  border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-[#757575] p-1.5 font-medium">{t("Email")}</label>
          <input
            type="email"
            name="email"
            placeholder={t("Email")}
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2  border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-[#757575] p-1.5 font-medium"> {t("Phone")}</label>
          <input
            type="tel"
            name="phone"
            placeholder={t("Phone")}
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2  border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-[#757575] p-1.5 font-medium"> {t("Notes")} </label>
          <textarea
            name="message"
            placeholder={t("Notes")}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2  border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-32 bg-teal-500 text-white px-10 py-2 rounded-full hover:bg-teal-600 transition duration-300 "
        >
          {t("Submit")}
        </button>
      </form>
    </div>
  );
};

export default Form;
