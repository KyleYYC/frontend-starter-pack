import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../components/templates/Home/HomePage'
import Header from '../components/organisms/Header/Header'
import Footer from '../components/organisms/Footer/Footer'
import { Dashboard } from '@mui/icons-material'
import { PrivateRoute } from '../components'
import { Box, Typography } from '@mui/material'
import NotFound from '../pages/NotFound'
import GeniusConfiguration from '../config/config'

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
    <Suspense
      fallback={
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          height='100vh'
          fontSize='24px'
          fontWeight='bold'
          letterSpacing={2}
        >
          <Typography variant='h1'>Loading...</Typography>
        </Box>
      }
    >
      <Routes>
        {GeniusConfiguration.routes.isHomePageEnabled && (
          <Route path='/' element={<HomePage />} />
        )}
        {GeniusConfiguration.routes.isFeaturesPageEnabled && (
          <Route path='/features' element={<Features />} />
        )}
        {GeniusConfiguration.routes.isPricingPageEnabled && (
          <Route path='/pricing' element={<Pricing />} />
        )}
        {GeniusConfiguration.routes.isContactPageEnabled && (
          <Route path='/contact' element={<Contact />} />
        )}
        {GeniusConfiguration.routes.isAboutUsPageEnabled && (
          <Route path='/about' element={<AboutUs />} />
        )}
        {GeniusConfiguration.routes.isPressPageEnabled && (
          <Route path='/press' element={<Press />} />
        )}
        {GeniusConfiguration.routes.isPrivacyPolicyPageEnabled && (
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        )}
        {GeniusConfiguration.routes.isTermsOfServicePageEnabled && (
          <Route path='/terms-of-service' element={<TermsOfService />} />
        )}
        {GeniusConfiguration.routes.isBlogPageEnabled && (
          <Route path='/blog' element={<Blog />} />
        )}
        {GeniusConfiguration.routes.isBlogPostPageEnabled && (
          <Route path='/blog/:id' element={<BlogPost />} />
        )}
        {GeniusConfiguration.routes.isDevelopersPageEnabled && (
          <Route path='/developers' element={<Developers />} />
        )}
        {GeniusConfiguration.routes.isForumsPageEnabled && (
          <Route path='/forums' element={<Forums />} />
        )}
        {GeniusConfiguration.routes.isForumTopicPageEnabled && (
          <Route path='/forums/:id' element={<ForumTopic />} />
        )}
        {GeniusConfiguration.routes.isLoginPageEnabled && (
          <Route path='/login' element={<Login />} />
        )}
        {GeniusConfiguration.routes.isHelpPageEnabled && (
          <Route path='/help' element={<Help />} />
        )}
        {GeniusConfiguration.routes.isSignUpPageEnabled && (
          <Route path='/signup' element={<SignUp />} />
        )}
        {GeniusConfiguration.routes.isAccountPageEnabled && (
          <Route
            path='/account'
            element={
              <PrivateRoute>
                <Account />
              </PrivateRoute>
            }
          />
        )}
        {GeniusConfiguration.routes.isAccountSettingsPageEnabled && (
          <Route
            path='/account/settings'
            element={
              <PrivateRoute>
                <AccountSettings />
              </PrivateRoute>
            }
          />
        )}
        {GeniusConfiguration.routes.isSearchPageEnabled && (
          <Route path='/search' element={<Search />} />
        )}
        {GeniusConfiguration.routes.isNewsletterSignUpPageEnabled && (
          <Route path='/newsletter-signup' element={<NewsletterSignUp />} />
        )}
        {GeniusConfiguration.routes.isComingSoonPageEnabled && (
          <Route path='/coming-soon' element={<ComingSoon />} />
        )}
        {GeniusConfiguration.routes.isMaintenancePageEnabled && (
          <Route path='/maintenance' element={<Maintenance />} />
        )}
        {GeniusConfiguration.routes.isPasswordResetPageEnabled && (
          <Route path='/password-reset' element={<PasswordReset />} />
        )}
        {GeniusConfiguration.routes.isDashboardPageEnabled && (
          <Route
            path='/dashboard'
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        )}
        {GeniusConfiguration.routes.isNotFoundPageEnabled && (
          <Route path='*' element={<NotFound />} />
        )}
      </Routes>
    </Suspense>
    <Footer />
  </Router>
)

export default AppRoutes