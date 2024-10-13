import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePageExampleTemplate from '../components/templates/Home/HomePageExampleTemplate'
import Header from '../components/organisms/Header/Header'
import Footer from '../components/organisms/Footer/Footer'
import { Dashboard } from '@mui/icons-material'
import { PrivateRoute } from '../components'
import { Box } from '@mui/material'
const Account = lazy(() => import('../pages/Account'))
const AccountSettings = lazy(() => import('../pages/AccountSettings'))
const ComingSoon = lazy(() => import('../pages/ComingSoon'))
const Maintenance = lazy(() => import('../pages/Maintenance'))
const NewsletterSignUp = lazy(() => import('../pages/NewsletterSignUp'))
const PasswordReset = lazy(() => import('../pages/PasswordReset'))
const SignUp = lazy(() => import('../pages/SignUp'))
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
const Login = lazy(() => import('../pages/Login'))
const Help = lazy(() => import('../pages/Help'))
const Search = lazy(() => import('../pages/Search'))

const AppRoutes = () => (
  <Router>
    <Header />
    <Suspense fallback={<Box>Loading...</Box>}>
      <Routes>
        <Route path='/' element={<HomePageExampleTemplate />} />
        <Route path='/features' element={<Features />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/press' element={<Press />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-of-service' element={<TermsOfService />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<BlogPost />} />
        <Route path='/developers' element={<Developers />} />
        <Route path='/forums' element={<Forums />} />
        <Route path='/forums/:id' element={<ForumTopic />} />
        <Route path='/login' element={<Login />} />
        <Route path='/help' element={<Help />} />
        <Route path='/signup' element={<SignUp />} />
        <Route
          path='/account'
          element={
            <PrivateRoute>
              <Account />
            </PrivateRoute>
          }
        />
        <Route
          path='/account/settings'
          element={
            <PrivateRoute>
              <AccountSettings />
            </PrivateRoute>
          }
        />
        <Route path='/search' element={<Search />} />
        <Route path='/newsletter-signup' element={<NewsletterSignUp />} />
        <Route path='/coming-soon' element={<ComingSoon />} />
        <Route path='/maintenance' element={<Maintenance />} />
        <Route path='/password-reset' element={<PasswordReset />} />
        <Route
          path='/dashboard'
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
