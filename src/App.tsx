import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';

// Lazy-loaded pages
const AboutPage = lazy(() => import('./pages/AboutPage.tsx'));
const AccommodationPage = lazy(() => import('./pages/services/AccommodationPage.tsx'));
const TransportPage = lazy(() => import('./pages/services/TransportPage.tsx'));
const MaterialSupplyPage = lazy(() => import('./pages/services/MaterialSupplyPage.tsx'));
const VendorManagementPage = lazy(() => import('./pages/services/VendorManagementPage.tsx'));
const EventManagementPage = lazy(() => import('./pages/services/EventManagementPage.tsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.tsx'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage.tsx'));
const TermsPage = lazy(() => import('./pages/TermsPage.tsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.tsx'));

// Minimal loading fallback
function PageLoading() {
  return (
    <div
      className="flex items-center justify-center"
      style={{ minHeight: '60vh', background: '#F3F7FA' }}
      aria-live="polite"
      aria-label="Page loading"
    >
      <div
        className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
        style={{ borderColor: '#FF6B00', borderTopColor: 'transparent' }}
        aria-hidden="true"
      />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<PageLoading />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services/accommodation" element={<AccommodationPage />} />
              <Route path="/services/transport" element={<TransportPage />} />
              <Route path="/services/material-supply" element={<MaterialSupplyPage />} />
              <Route path="/services/vendor-management" element={<VendorManagementPage />} />
              <Route path="/services/event-management" element={<EventManagementPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}
