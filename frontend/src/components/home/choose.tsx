// Dependencies

import { useTranslation } from "react-i18next";

interface CardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}
const Card: React.FC<CardProps> = ({ icon, title, description }) => {
    const { t } = useTranslation();

    return (
        <div className="bg-gray-100 shadow-md rounded-3xl p-6 flex flex-col items-center text-center ">
            <div className="mb-4">{icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{t(title)}</h3>
            <p className="text-gray-600 text-sm">{t(description)}</p>
        </div>
    )
};

const ChooseUs: React.FC = () => {
    const { t } = useTranslation();
    const cardsData = [
        {
            icon: (
                <img src="/images/Facility.png" alt="State-of-the-Art Facility" className="w-24 h-24" />
            ),
            title: 'State-of-the-Art Facility',
            description: 'Our clinic is equipped with the latest technology',
        },
        {
            icon: <img src="/images/Experienced.png" alt="Experienced Team" className="w-24 h-24" />,
            title: 'Experienced Team',
            description: 'Our team of dedicated professionals has years of experience',
        },
        {
            icon: <img src="/images/Compassionate.png" alt="Compassionate Care" className="w-24 h-24" />,
            title: 'Compassionate Care',
            description: 'We treat every pet like our own',
        },

    ];
    const cardsDataTow = [
        {
            icon: <img src="/images/Convenient.png" alt="Convenient Services" className="w-24 h-24" />,
            title: 'Convenient Services',
            description: "We offer a variety of services to meet your pet's needs",
        },
        {
            icon: <img src="/images/Affordable.png" alt="Affordable Care" className="w-24 h-24" />,
            title: 'Affordable Care',
            description:'We offer competitive prices without compromising on quality',
        },

    ];

    return (
        <div className="flex flex-col items-center justify-center w-full md:h-[190vh] bg-choose bg-cover bg-center overflow-hidden">
            <h1 className="text-4xl text-[#505050] font-bold relative md:bottom-64 my-16 ">{t("why choose us")}</h1>
            <div className="md:max-w-4xl max-w-[300px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:mt-[-20vh]">
                {cardsData.map((card, index) => (
                    <Card
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>

            <div className="md:max-w-4xl max-w-[300px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-5 gap-4 md:ml-72  ">
                {cardsDataTow.map((card, index) => (
                    <Card
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default ChooseUs;
