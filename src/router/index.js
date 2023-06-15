import { createRouter, createWebHistory } from "vue-router";
 
import dashboard from '../pages/master/dashboard'
import login from '../pages/login'
import register from '../pages/master/register'
import home from '../pages/home'
import medicalRecord from '../pages/medical_record/medicalRecord'
import addMedicalRecord from '../pages/medical_record/addMedicalRecord'
import receipt from '../pages/medicine/receipt'
import medicine from '../pages/medicine/medicine'
import addMedicine from '../pages/medicine/addMedicine'
import editMedicine from '../pages/medicine/editMedicine'
import patientData from '../pages/patient/patientData'
import addPatientData from '../pages/patient/addPatientData'
import editPatientData from '../pages/patient/editPatientData'
import doctorData from '../pages/doctor/doctorData'
import addDoctorData from '../pages/doctor/addDoctorData'
import editDoctorData from '../pages/doctor/editDoctorData'
import adminData from '../pages/admin/adminData'
import addAdminData from '../pages/admin/addAdminData'
import editAdminData from '../pages/admin/editAdminData'
import pharmacistData from '../pages/pharmacist/pharmacistData'
import addPharmacistData from '../pages/pharmacist/addPharmacistData'
import editPharmacistData from '../pages/pharmacist/editPharmacistData'
import report from '../pages/report/report'

  const routes = [
    {
      name: 'Dashboard',
      path: '/',
      component: dashboard,
      // meta: { requiresAuth: true },
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
          name: 'Receipt',
          path: '/receipt',
          component:receipt
        },
        {
          name: 'Medicine',
          path: '/medicine',
          component:medicine
        },
        {
          name: 'Add Medicine',
          path: '/medicine/add',
          component:addMedicine
        },
        {
          name: 'Edit Medicine',
          path: '/medicine/edit/:id',
          component:editMedicine
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
          name: 'Edit Patient Data',
          path: '/patient/edit/:id',
          component:editPatientData
        },
        {
          name: 'Doctor Data',
          path: '/doctor',
          component:doctorData
        },
        {
          name: 'Add Doctor Data',
          path: '/doctor/add',
          component:addDoctorData
        },
        {
          name: 'Edit Doctor Data',
          path: '/doctor/edit/:id',
          component:editDoctorData
        },
        {
          name: 'Admin Data',
          path: '/admin',
          component:adminData
        },
        {
          name: 'Add Admin Data',
          path: '/admin/add',
          component:addAdminData
        },
        {
          name: 'Edit Admin Data',
          path: '/admin/edit/:id',
          component:editAdminData
        },
        {
          name: 'Pharmacist Data',
          path: '/pharmacist',
          component:pharmacistData
        },
        {
          name: 'Add Pharmacist Data',
          path: '/pharmacist/add',
          component:addPharmacistData
        },
        {
          name: 'Edit Pharmacist Data',
          path: '/pharmacist/edit/:id',
          component:editPharmacistData
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
      // meta: { requiresAuth: false }
    },      
    {
      name: 'Register',
      path: '/register',
      component: register,
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
//   const isLoggedIn = localStorage.getItem('token'); // Periksa keberadaan token
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//   if (requiresAuth && !isLoggedIn) {
//     // Jika rute memerlukan token dan pengguna belum masuk, arahkan ke halaman login
//     next('/login');
//   } else {
//     next('/home'); // Lanjutkan ke rute berikutnya
//   }
// });

  