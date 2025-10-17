import React from 'react';
import { Link } from 'react-router-dom'; // لاستخدام روابط React Router
import QuizzyLogo from '../components/common/QuizzyLogo'; // استيراد مكون الشعار
import Button from '../components/common/Button'; // استيراد مكون الزر
import { useTheme } from '../hooks/useTheme'; // استيراد هوك إدارة الوضع الليلي

// مكون الهيدر الرئيسي للتطبيق
const MainHeader: React.FC = () => {
  const { theme, toggleTheme } = useTheme(); // استخدام هوك الوضع الليلي

  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-lg">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* شعار التطبيق */}
        <Link className="flex items-center gap-3" to="/">
          <QuizzyLogo />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Quizzy</h1>
        </Link>
        {/* روابط التنقل الرئيسية */}
        <div className="hidden md:flex items-center space-x-8 text-lg">
          <Link className="hover:text-primary transition-colors duration-300" to="/my-decks">مجموعاتي</Link>
          <Link className="hover:text-primary transition-colors duration-300" to="/create-deck">إنشاء</Link>
          <Link className="hover:text-primary transition-colors duration-300" to="/study">دراسة</Link>
        </div>
        {/* زر تبديل الوضع الليلي وزر تسجيل الدخول */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" onClick={toggleTheme}>
            <span className="material-icons dark:hidden">{theme === 'light' ? 'dark_mode' : 'light_mode'}</span>
            <span className="material-icons hidden dark:inline">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
          </button>
          <Link to="/login">
            <Button variant="primary" className="animate-subtle-glow">تسجيل الدخول</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

// مكون صفحة الرئيسية
const HomePage: React.FC = () => {
  return (
    <div dir="rtl" className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark transition-colors duration-500">
      {/* هيدر الصفحة الرئيسية */}
      <MainHeader />

      <main className="overflow-x-hidden">
        {/* قسم البطل (Hero Section) */}
        <section className="relative h-screen flex items-center justify-center text-center -mt-[80px] pt-[80px]">
          {/* خلفية القسم */}
          <div className="absolute inset-0 bg-cover bg-center z-0 opacity-10 dark:opacity-20" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBAS5V-e6ilpHNYQeqE0rscJclIMexjkqyLOD4nuodot5rY3tenPjzfoVYSlUcPnoVUY2exEkyofMgp_hrClXvla1LMjBxzAbMpdPEGzzebfEDJoP_U5hq-RvI_agSGKzqs1h0XHZL30zgZn0kpw39SCGj8xnOC7g0n2StKxohiApM2VQ-SwAwwP4ti6ankhglj0j2P1XpkslcD9iX7harAs4JHSbIt9DPFI47EFv2cIt4twhbiIZSXivYtM-Whu2dzeRyDDYYIIlk')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-light via-transparent to-transparent dark:from-background-dark z-10"></div>
          <div className="container mx-auto px-6 z-20">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                ادرس بذكاء أكبر مع بطاقات
                <span className="relative inline-block">
                  <span className="glitch-effect" data-text="الذكاء الاصطناعي">الذكاء الاصطناعي</span>
                </span>
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto text-subtext-light dark:text-subtext-dark mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                حوّل ملاحظاتك وملفات PDF وأفكارك إلى بطاقات تعليمية تفاعلية. ترجم فورًا، وادرس في أي مكان، وتفوق في امتحاناتك باستخدام أدوات التعلم المتقدمة.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <Link to="/signup">
                  <Button variant="primary" className="w-full sm:w-auto text-lg animate-subtle-glow">
                    <span className="material-icons mr-2">rocket_launch</span>
                    ابدأ مجانًا
                  </Button>
                </Link>
                <Button variant="outline" className="w-full sm:w-auto text-lg">
                  تعلم المزيد
                </Button>
              </div>
            </div>
            {/* ميزات سريعة */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="bg-card-light/50 dark:bg-card-dark/50 backdrop-blur-sm p-4 rounded-lg flex items-center gap-4 border border-gray-200 dark:border-gray-800">
                <span className="material-icons text-primary text-3xl">auto_awesome</span>
                <div>
                  <h3 className="font-bold">إنشاء بالذكاء الاصطناعي</h3>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark">أنشئ بطاقات من أي موضوع فورًا.</p>
                </div>
              </div>
              <div className="bg-card-light/50 dark:bg-card-dark/50 backdrop-blur-sm p-4 rounded-lg flex items-center gap-4 border border-gray-200 dark:border-gray-800">
                <span className="material-icons text-primary text-3xl">upload_file</span>
                <div>
                  <h3 className="font-bold">رفع المستندات</h3>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark">حوّل ملفات PDF و Word إلى بطاقات.</p>
                </div>
              </div>
              <div className="bg-card-light/50 dark:bg-card-dark/50 backdrop-blur-sm p-4 rounded-lg flex items-center gap-4 border border-gray-200 dark:border-gray-800">
                <span className="material-icons text-primary text-3xl">translate</span>
                <div>
                  <h3 className="font-bold">ترجمة فورية</h3>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark">ادعم العربية، الإنجليزية، و+20 لغة.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* قسم الميزات التفصيلية */}
        <section className="py-20 sm:py-32">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-4">كل ما تحتاجه للتفوق</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-subtext-light dark:text-subtext-dark mb-16">
              ميزات قوية مصممة خصيصًا لطلاب الجامعات لتعزيز تجربتهم التعليمية.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* مثال لميزة واحدة، يمكن تكرارها لباقي الميزات */}
              <div className="bg-card-light dark:bg-card-dark p-8 rounded-xl border border-gray-200 dark:border-gray-800 text-right transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-2xl hover:shadow-primary/20">
                <div className="p-4 inline-block bg-primary/10 rounded-lg mb-6">
                  <span className="material-icons text-primary text-4xl">auto_awesome</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">إنشاء بالذكاء الاصطناعي</h3>
                <p className="text-subtext-light dark:text-subtext-dark">أنشئ بطاقات تعليمية من أي موضوع. فقط صف ما تدرسه ودع الذكاء الاصطناعي في Quizzy ينشئ البطاقات لك.</p>
              </div>
              {/* ... كرر لباقي الميزات ... */}
            </div>
          </div>
        </section>

        {/* قسم الدعوة لاتخاذ إجراء (Call to Action) */}
        <section className="py-20 sm:py-32 bg-card-light dark:bg-card-dark">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-4">جاهز لتحويل دراستك؟</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-subtext-light dark:text-subtext-dark mb-10">
              انضم إلى آلاف الطلاب الجامعيين الذين يدرسون بالفعل بشكل أكثر ذكاءً مع Quizzy.
            </p>
            <Link to="/create-deck">
              <Button variant="primary" className="text-lg animate-subtle-glow">
                <span className="material-icons mr-2">add_circle</span>
                أنشئ مجموعتك الأولى
              </Button>
            </Link>
          </div>
        </section>
      </main>
      {/* يمكن إضافة مكون Footer هنا */}
    </div>
  );
};

export default HomePage;