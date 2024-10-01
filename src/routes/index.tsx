import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePageExampleTemplate from '../components/templates/Examples/HomePage/HomePageExampleTemplate'
import Header from '../components/organisms/Header/Header'
import Footer from '../components/organisms/Footer/Footer'
import { Dashboard } from '@mui/icons-material'
import { PrivateRoute } from '../components'
import Help from '../pages/Help'
import { Box } from '@mui/material'

const Features = lazy(() => import('../pages/Features'))
const Pricing = lazy(() => import('../pages/Pricing'))
const Contact = lazy(() => import('../pages/Contact'))
const AboutUs = lazy(() => import('../pages/About'))
const Careers = lazy(() => import('../pages/Careers'))
const Press = lazy(() => import('../pages/Press'))
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'))
const TermsOfService = lazy(() => import('../pages/TermsOfService'))
const Blog = lazy(() => import('../pages/Blog'))
const BlogPost = lazy(() => import('../pages/BlogPost'))
const Developers = lazy(() => import('../pages/Developers'))
const Forums = lazy(() => import('../pages/Forums'))
const ForumTopic = lazy(() => import('../pages/ForumTopic'))
const SignIn = lazy(() => import('../pages/SignIn'))

const AppRoutes =  () => (
  <Router>
    <Header />
    <Suspense fallback={<Box>Loading...</Box>}>
      <Routes>
        <Route path="/" element={<HomePageExampleTemplate />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/press" element={<Press />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/forums" element={<Forums />} />
        <Route path="/forums/:id" element={<ForumTopic />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/help" element={<Help />} />
        <Route path="/dashboard"
                element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                }
            />
      </Routes>
    </Suspense>
    <Footer />
  </Router>
)

export default AppRoutes