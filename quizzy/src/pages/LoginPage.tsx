import React, { useState } from 'react';

// مكون أيقونة جوجل، يمكن استيراده كملف SVG لتحسين الأداء
const GoogleIcon = () => (
    <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 48 48">
        <path d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" fill="#FFC107"></path>
        <path d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" fill="#FF3D00"></path>
        <path d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" fill="#4CAF50"></path>
        <path d="M43.611,20.083H24v8h19.611c0.34-1.73,0.539-3.47,0.539-5.259C44.15,21.861,43.951,20.931,43.611,20.083z" fill="#1976D2"></path>
    </svg>
);

// مكون شعار Quizzy، يمكن استيراده كملف SVG لتحسين الأداء
const QuizzyLogo = () => (
    <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
    </svg>
);

// مكون الهيدر الخاص بصفحات المصادقة (تسجيل الدخول، إنشاء حساب)
// يتم فصله لضمان إعادة الاستخدام وتوحيد المظهر
const AuthHeader = () => (
    <header className="w-full absolute top-0 hidden md:block">
        <div className="container mx-auto flex items-center justify-between p-4 md:px-6">
            {/* شعار التطبيق */}
            <a className="flex items-center gap-3" href="#">
                <QuizzyLogo />
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Quizzy</h1>
            </a>
            {/* روابط التنقل في الهيدر */}
            <nav className="hidden items-center gap-6 md:flex">
                <a className="text-sm font-medium hover:text-primary dark:hover:text-primary" href="#">الرئيسية</a>
                <a className="text-sm font-medium hover:text-primary dark:hover:text-primary" href="#">المميزات</a>
                <a className="text-sm font-medium hover:text-primary dark:hover:text-primary" href="#">الأسعار</a>
            </nav>
        </div>
    </header>
);

const LoginPage: React.FC = () => {
    // حالة لتخزين البريد الإلكتروني وكلمة المرور
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // دالة لمعالجة إرسال نموذج تسجيل الدخول
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault(); // منع إعادة تحميل الصفحة
        setLoading(true);
        setError('');
        try {
            const response = await fetch('http://localhost:3001/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                // Redirect to the home page or dashboard
                window.location.href = '/';
            } else {
                setError(data.message || 'Failed to login');
            }
        } catch (_error) {
            setError('Server error');
        }
        setLoading(false);
    };

    return (
        // الحاوية الرئيسية للصفحة، تدعم الوضع الليلي وتتوسط المحتوى
        <div dir="rtl" className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200 min-h-screen flex flex-col items-center justify-center">
            {/* Header: يظهر فقط على الشاشات الكبيرة (md فما فوق) */}
            <AuthHeader />

            {/* Main Content */}
            <main className="flex flex-1 items-center justify-center w-full max-w-md p-8 space-y-8 mt-16 md:mt-0">
                <div className="w-full">
                    {/* العنوان الرئيسي: يتغير حجم الخط والنص حسب الشاشة */}
                    <div className="text-center mb-8">
                        <h1 className="md:hidden text-3xl font-bold text-black dark:text-white">Quizzy</h1> {/* للموبايل */}
                        <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">أهلاً بعودتك</h2>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            سجل الدخول للمتابعة إلى Quizzy
                        </p>
                    </div>
                    {/* نموذج تسجيل الدخول */}
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-4 rounded-lg">
                            {/* حقول الإدخال: تم توحيد الـ classes لتكون متجاوبة */}
                            <input
                                id="email-address" // Add id for accessibility
                                name="email"
                                className="relative block w-full appearance-none rounded-lg border border-black/10 dark:border-white/10 bg-background-light dark:bg-background-dark px-3 py-4 text-black dark:text-white placeholder-black/40 dark:placeholder-white/40 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                                placeholder="البريد الإلكتروني"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                id="password" // Add id for accessibility
                                name="password"
                                className="relative block w-full appearance-none rounded-lg border border-black/10 dark:border-white/10 bg-background-light dark:bg-background-dark px-3 py-4 text-black dark:text-white placeholder-black/40 dark:placeholder-white/40 focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                                placeholder="كلمة المرور"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-primary focus:ring-primary focus:ring-offset-background-light dark:focus:ring-offset-background-dark" id="remember-me" name="remember-me" type="checkbox"/>
                                <label className="ms-2 block text-sm text-gray-900 dark:text-gray-300" htmlFor="remember-me">تذكرني</label>
                            </div>
                            {/* رابط نسيت كلمة المرور */}
                            <div className="text-sm">
                                <a className="font-medium text-primary hover:text-primary/80" href="#">نسيت كلمة المرور؟</a>
                            </div>
                        </div>

                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        
                        {/* زر تسجيل الدخول */}
                        <div>
                            <button className="group relative flex w-full justify-center rounded-lg border border-transparent bg-primary py-3 px-4 text-base font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" type="submit" disabled={loading}>
                                {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
                            </button>
                        </div>
                        
                        {/* فاصل "أو" */}
                        <div className="relative flex items-center justify-center">
                            <div className="w-full border-t border-black/10 dark:border-white/10"></div>
                            <div className="absolute bg-background-light dark:bg-background-dark px-2 text-sm text-black/60 dark:text-white/60">أو</div>
                        </div>
                        
                        {/* زر تسجيل الدخول باستخدام جوجل */}
                        <div>
                            <button className="group relative flex w-full items-center justify-center rounded-lg border border-black/10 dark:border-white/10 bg-background-light dark:bg-background-dark py-3 px-4 text-base font-medium text-black dark:text-white hover:bg-primary/10 dark:hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" type="button">
                                <span className="flex items-center gap-3">
                                    <GoogleIcon />
                                    تسجيل الدخول باستخدام جوجل
                                </span>
                            </button>
                        </div>
                    </form>
                    {/* رابط إنشاء حساب جديد */}
                    <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
                        ليس لديك حساب؟
                        <a className="font-medium text-primary hover:underline" href="/signup">انشئ حسابك الآن</a> {/* تم تحديث الرابط ليتناسب مع التوجيه */}
                    </p>
                </div>
            </main>
        </div>
    );
};

export default LoginPage;
