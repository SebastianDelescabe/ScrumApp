import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion';

import { Login } from './views/login/Login';
import { Register } from './views/register/Register';
import { Tasks } from './views/tasks/Tasks';
import './App.css';

const Error404 = lazy(() => import("./views/error404/Error404"))

const RequireAuth = ({ children }) => { //Recibe como propiedad los hijos EN ESTE CASO TASKS
  if (!localStorage.getItem("logged")) {
    return <Navigate to='/login' replace={true} />
  }
  return children
}

const pageTransition = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0
  }
}
const App = () => {
  const location = useLocation()
  //AnimatePresence Esta atento a cuando un componente se monta y desmonta para ejecutar una transicion
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/'
          element={
            <RequireAuth>
              <motion.div
                className='page'
                initial='out'
                animate='in'
                exit='out'
                variants={pageTransition}>
                <Tasks />
              </motion.div>
            </RequireAuth>
          }
        />
        <Route path='/login'
          element={
            <motion.div
              className='page'
              initial='out'
              animate='in'
              exit='out'
              variants={pageTransition}>
              <Login />
            </motion.div>
          }
        />
        <Route path='*'
          element={
            <motion.div
              className='page'
              initial='out'
              animate='in'
              exit='out'
              variants={pageTransition}>
              <Suspense fallback={<div className='container'>Cargando...</div>}>
                <Error404 />
              </Suspense>
            </motion.div>
          }
        />
        {/* <Register /> */}
      </Routes>
    </AnimatePresence>
  );
}

export default App;
