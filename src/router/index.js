import { createRouter, createWebHistory } from "vue-router";
 
import dashboard from '../pages/master/dashboard'
import login from '../pages/master/login'
import home from '../pages/home'
import medicalRecord from '../pages/medical_record/medicalRecord'
import addMedicalRecord from '../pages/medical_record/addMedicalRecord'
import medecin from '../pages/medecin/medecin'
import patientData from '../pages/patient/patientData'
import addPatientData from '../pages/patient/addPatientData'
import doctorData from '../pages/doctor/doctorData'
import adminData from '../pages/admin/adminData'
import report from '../pages/report/report'

  const routes = [
    {
      name: 'Dashboard',
      path: '/',
      component: dashboard,
      children: [
        {
          name: 'Home',
          path: '/home',
          component:home
        },
        {
          name: 'Medical Record',
          path: '/medical-record',
          component:medicalRecord
        },
        {
          name: 'Add Medical Record',
          path: '/medical-record/add',
          component:addMedicalRecord
        },
        {
          name: 'Medecin',
          path: '/medecin',
          component:medecin
        },
        {
          name: 'Patient Data',
          path: '/patient',
          component:patientData,
        },
        {
          name: 'Add Patient Data',
          path: '/patient/add',
          component:addPatientData
        },
        {
          name: 'Doctor Data',
          path: '/doctor',
          component:doctorData
        },
        {
          name: 'Admin Data',
          path: '/admin',
          component:adminData
        },
        {
          name: 'Report',
          path: '/report',
          component:report
        },
      ]
    },
    {
      name: 'Login',
      path: '/login',
      component: login,
    }      
  ];
const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = true

//   if(to.name !== 'Login' && !isAuthenticated ) next({ name: 'Login'})
//   if(to.name === 'Login' && isAuthenticated ) next({ name: 'Home'})
//   else next();
// })
  