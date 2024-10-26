import { FC } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IoLogoWhatsapp } from "react-icons/io5";

const Consultation: FC = () => {
    const { t } = useTranslation();
    const phoneNumber = '966509130845'; 

    return (
      <div className="flex items-center justify-center h-64 ">
        <div className=" flex flex-row-reverse items-center  bg-green-500 rounded-full p-2">
        <h1> WhatsApp</h1>
             <Link className="flex-col flex items-center " to={`https://api.whatsapp.com/send/?phone=${phoneNumber}`} target="_blank" rel="noopener noreferrer">
        <IoLogoWhatsapp className='w-10 h-10 text-white font-semibold' />
        </Link>
        </div>
       
      </div>
    );
};
export default Consultation;