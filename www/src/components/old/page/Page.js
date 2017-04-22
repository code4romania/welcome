import React from 'react'
import Route from './Route'
import Home from './Home'
import Login from './authenticate/Login'
import ResetPassword from './authenticate/ResetPassword'
import Forgot from './authenticate/Forgot'
import Signup from './authenticate/Signup'
import ProfileCreation from './authenticate/ProfileCreation'
import Profile from './authenticate/Profile'
import Camps from './camps/Camps'

const pages = [
  {
    name: 'home',
    route: '/',
    component: Home
  },
  {
    name: 'login',
    visible: state => !state.auth.uid,
    route: '/login',
    component: Login
  },
  {
    name: 'resetPassword',
    visible: state => !state.auth.uid && state.router.oobCode && state.router.email,
    route: '/resetPassword',
    component: ResetPassword
  },
  {
    name: 'signup',
    visible: state => !state.auth.uid,
    route: '/signup',
    component: Signup
  },
  {
    name: 'forgot',
    visible: state => !state.auth.uid,
    route: '/forgot',
    component: Forgot
  },
  {
    name: 'create_profile',
    visible: state => state.auth.profile && state.auth.profile.pendingProfile,
    route: 'create_profile',
    component: ProfileCreation
  },
  {
    name: 'profile',
    visible: state => state.auth.uid,
    route: '/profile',
    component: Profile
  },
  {
    name: 'camps',
    visible: state => state.auth.profile && state.auth.profile.owner && !state.auth.profile.pendingProfile,
    route: '/camps',
    component: Camps
  }
]

export default () => (
  <div>
    {pages.map(page => <Route key={page.name} {...page} />)}
  </div>
)