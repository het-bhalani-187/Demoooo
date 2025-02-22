import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar1 from './components/Navbar1';

// Pages
import Home from './pages/Homepage';
import Features from './pages/Features';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import VerifyEmail from './pages/VerifyEmail';
import Unauthorized from './pages/Unauthorized';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import BlogCreate from './pages/BlogCreate';
import BlogEdit from './pages/BlogEdit';
import BlogDetail from './pages/BlogDetail';
import PromptBar from './components/PromptBar';
import BubbleChat from './pages/BubbleChat';
import Courtroom from './pages/Courtroom';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar1 />
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/features" element={<Features />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/verify-email/:token" element={<VerifyEmail />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* Protected routes for all authenticated users */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/promptbar"
            element={
              <ProtectedRoute>
                <PromptBar />
                <BubbleChat/>
                {/* <a href="https://lawyer-c79df0.zapier.app/"></a>  */}
              </ProtectedRoute>
            }
          />

          {/* Protected routes for civilian, law student, and lawyer */}
          <Route
            path="/courtroom"
            element={
              <ProtectedRoute
                allowedRoles={['civilian', 'lawstudent', 'lawyer']}
                requireVerified={true}
              >
                <Courtroom>
                  <a href="http://localhost:3010" target="_blank" rel="noopener noreferrer">Go to Courtroom</a>
                </Courtroom>
              </ProtectedRoute>
            }
          />

          {/* Protected routes for law student and lawyer
          <Route
            path="/promptbar"
            element={
              <ProtectedRoute
                allowedRoles={['lawstudent', 'lawyer']}
                requireVerified={true}
              >
                <PromptBar />
              </ProtectedRoute>
            }
          /> */}

          {/* Blog routes - accessible by law student and lawyer */}
          <Route
            path="/blog"
            element={
              <ProtectedRoute
                allowedRoles={['lawstudent', 'lawyer']}
                requireVerified={true}
              >
                <Blog />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog/create"
            element={
              <ProtectedRoute
                allowedRoles={['lawstudent', 'lawyer']}
                requireVerified={true}
              >
                <BlogCreate />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog/:id"
            element={
              <ProtectedRoute
                allowedRoles={['lawstudent', 'lawyer']}
                requireVerified={true}
              >
                <BlogDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog/edit/:id"
            element={
              <ProtectedRoute
                allowedRoles={['lawyer']}
                requireVerified={true}
              >
                <BlogEdit />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;