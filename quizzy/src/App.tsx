import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // استيراد صفحة الرئيسية
import LoginPage from './pages/LoginPage'; // استيراد صفحة تسجيل الدخول
import SignUpPage from './pages/SignUpPage'; // استيراد صفحة إنشاء حساب
import CreateDeck from './pages/CreateDeck'; // استيراد صفحة إنشاء مجموعة
import MyDecksPage from './pages/MyDecksPage'; // استيراد صفحة مجموعاتي
import DeckPage from './pages/DeckPage'; // استيراد صفحة تفاصيل المجموعة

// المكون الرئيسي للتطبيق الذي يدير التوجيه (Routing)
const App: React.FC = () => {
  return (
    // BrowserRouter يوفر وظائف التوجيه للتطبيق
    <Router>
      {/* Routes يحدد مجموعة من المسارات */}
      <Routes>
        {/* Route يربط مسار URL بمكون React */}
        <Route path="/" element={<HomePage />} /> {/* المسار الرئيسي */}
        <Route path="/login" element={<LoginPage />} /> {/* مسار تسجيل الدخول */}
        <Route path="/signup" element={<SignUpPage />} /> {/* مسار إنشاء حساب */}
        <Route path="/create-deck" element={<CreateDeck />} /> {/* مسار إنشاء مجموعة */}
        <Route path="/my-decks" element={<MyDecksPage />} /> {/* مسار مجموعاتي */}
        <Route path="/decks/:id" element={<DeckPage />} /> {/* مسار تفاصيل المجموعة */}
        <Route path="/study/:deckId" element={<StudyPage />} /> {/* مسار صفحة الدراسة */}
        <Route path="/leaderboard" element={<LeaderboardPage />} /> {/* مسار صفحة المتصدرين */}
      </Routes>
    </Router>
  );
};

export default App;