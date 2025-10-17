import React, { ButtonHTMLAttributes } from 'react';

// تعريف خصائص (Props) مكون Button
// يرث جميع خصائص HTML القياسية لزر (ButtonHTMLAttributes)
// ويضيف خاصية اختيارية 'variant' لتحديد نوع الزر (أساسي، ثانوي، إلخ.)
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'; // أنواع مختلفة للزر
}

// مكون Button قابل لإعادة الاستخدام
const Button: React.FC<ButtonProps> = ({ variant = 'primary', className, children, ...props }) => {
  // تحديد الأنماط الأساسية للزر
  const baseStyles = "inline-flex items-center justify-center rounded-lg px-5 py-3 text-base font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  // تحديد الأنماط بناءً على الـ variant
  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary/90 focus-visible:outline-primary",
    secondary: "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 focus-visible:outline-gray-500",
    outline: "border border-primary text-primary hover:bg-primary/10 focus-visible:outline-primary",
    ghost: "text-primary hover:bg-primary/10 focus-visible:outline-primary",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children} {/* محتوى الزر (نص، أيقونات) */}
    </button>
  );
};

export default Button;
