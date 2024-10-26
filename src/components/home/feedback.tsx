import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ScrollingTestimonials = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white py-12">
      <div className="mb-8 px-4">
        <h3 className="text-4xl text-[#505050] font-bold text-center">
         {t("What our customers say")}
        </h3>

      </div>
      <div className="p-4 overflow-x-hidden relative">
        <div className="absolute top-0 bottom-0 left-0 md:w-24 w-10 z-10 bg-gradient-to-r from-[#FF6600] opacity-35 to-transparent" />

        <div className="flex items-center mb-4">
          <TestimonialList list={testimonials.top} duration={75} reverse />
          <TestimonialList list={testimonials.top} duration={75} reverse />
          <TestimonialList list={testimonials.top} duration={75} reverse />
        </div>

        <div className="absolute top-0 bottom-0 right-0 md:w-24 w-10 z-10 bg-gradient-to-l from-[#FF6600] opacity-35 to-transparent" />
      </div>
    </div>
  );
};

const TestimonialList = ({
  list,
  reverse = false,
  duration = 50,
}: {
  list: typeof testimonials.top;
  reverse?: boolean;
  duration?: number;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {list.map((t) => {
        return (
          <div
            key={t.id}
            className="shrink-0 h-52 w-[500px] grid grid-cols-1 rounded-lg overflow-hidden relative">
            <div className="bg-[#FB8302] bg-opacity-50 text-footer-text p-4 flex flex-col items-center justify-center">
              <span className="block font-semibold text-lg mb-1">{t.name}</span>

              <span className="block text-sm  text-right">{t.info}</span>
              <span className="mt-3 "> <StarRating filledStars={5} /></span>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

type StarRatingProps = {
  totalStars?: number;
  filledStars: number;
};

const StarRating: React.FC<StarRatingProps> = ({ totalStars = 5, filledStars }) => {
  const stars = Array(totalStars).fill(0);

  return (
    <div className="flex">
      {stars.map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={index < filledStars ? "#d4a43f" : "none"}
          viewBox="0 0 24 24"
          stroke="#d4a43f"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      ))}
    </div>
  );
};

const testimonials = {

  top: [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Nada Jeffri", 
      info: "لقد كانت تجربتي مع الدكتور إسلام والعيادة  البيطرية المختصة  مميزة للغاية. عندما أخذت قطي مشمش، الذي كان يعاني من بعض المشاكل الصحية وقصور شديد في وظائف الكلى، كنت متخوفًه بسبب شراسته. لكن الدكتور إسلام وفريقه الرائع تعاملوا معه بكل حنان وصبر، مما ساعده على التحسن بسرعة.",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Amal Morsy.",
      info: "سعيدة ب اول زيارة كان الطاقم جداً محترف بالتعامل وعرفوا المشكلة على طول بدون تهويل واشعات وتحاليل مالها داعي، بالاضافة لان الاسعار جداً منطقية بالخدمات المقدمة يارب ما يتغيرون ولا يرفعون اسعارهم",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
      name: "Mohamed Alfatih",
      info: "عيادة على مستوى عالي من الكفاءة ومتوفر بها جميع الأقسام اللتي يمكن ان يحتاج اليها اليفك( فحص-تطعيم-معامل-ترويش-فندقة… الخ) الدكاترة محترمين جدا وتعاملهم راقي وكذالك التيم العامل بالكامل",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
      name: "Najla Altwaijri",
      info: "افضل عيادة قطط مرت علي من الدكاتره لترتيب ونظافة المكان، قطتي كانت حالتها جداً سيئه ودخلت كم عمليه بالسنه وماتحسنت حالتها.دكتور اسلام ماقصر معانا مسك حالتها وكان well informed وعطانا تقرير كامل عن حالتها بشكل دقيق وعالجها يعطيه العافيه على حرصه حتى بعد العمليه والحمدالله الحين صارت احسن بكثييير، اهنيكم على حسن عنايتكم الكامله اللي وفرتوها لقطتي.",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1625504615927-c14f4f309b63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
      name: "TALAL Altamimi",
      info: "اولًا الحمدلله عالجت قطوي فيه والحمدلله نفع العلاج وشكرًا جدًا ل الدكتور احمد على مساعدته لي بكل الطرق وكلامه الجميل وشكرا للاستقبال فرع جدًا ممتاز ومتميز",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1589729132389-8f0e0b55b91e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Saleh Alluhidan",
      info: "صراحة مريت دكاترة كثيرة مالقيت مع احترامي للجميع دكتور يفهم ويعرف ايش يشخص بالضبط وايش العلاج المطلوب بكل صدق وكل امانة مثل ابو تالا فعلا افتتاحة للعيادة يعتبر نقله نوعيه بالرياض",
    },
  ],

};

export default ScrollingTestimonials;