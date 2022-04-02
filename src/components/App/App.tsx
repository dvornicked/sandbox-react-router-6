import styles from './App.module.scss'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {
  HomePage,
  BlogPage,
  PostPage,
  AboutPage,
  NotFoundPage,
  EditPage,
  LoginPage,
} from '../Pages'
import { Layout } from '../Layout/Layout'
import { AuthProvider, RequireAuth } from '..'

export const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<HomePage />} />
              <Route path='/blog' element={<BlogPage />} />
              <Route path='/blog/:id' element={<PostPage />} />
              <Route
                path='/blog/:id/edit'
                element={
                  <RequireAuth>
                    <EditPage />
                  </RequireAuth>
                }
              />
              <Route path='/about' element={<AboutPage />} />
              <Route
                path='/about-us'
                element={<Navigate to='/about' replace />}
              />
              <Route path='/login' element={<LoginPage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Route>
          </Routes>
        </AuthProvider>
      </div>
    </BrowserRouter>
  )
}
