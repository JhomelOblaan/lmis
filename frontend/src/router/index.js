import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Home.vue";


const routes = [
    {
        path: "/login",
        component: Login,
    
        meta: { requiresLogin: false },
        children: [
          {
            path: "/login",
            alias: "/login",
            component: Login,
            meta: {
              requiresLogin: false,
              title: 'Login'
            },
    
          },
        ],
    },
      // evaluator
    // {
    //     path: "/evaluator",
    //     component: Main,
    //     meta: { requiresLogin: true },
    //     children: [
    //     {
    //         path: "/evaluator",
    //         alias: "/evaluator/evaldashboard",
    //         component: Home,
    //         name: 'Evaluators Home',
    //         meta: {
    //         requiresLogin: false,
    //         title: 'Dashboard'
    //         },

    //     },
    //     {
    //         path: "history",
    //         component: History,
    //         meta: {
    //         requiresLogin: false,
    //         title: 'Evaluate'
    //         },
    //     },
    //     ],
    // },
    // // admin

    // {
    //     path: "/admin",
    //     component: Main,
    //     meta: { requiresLogin: true },
    //     children: [
    //       {
    //         path: "/admin",
    //         alias: "/admin/home",
    //         component: Home,
    //         name: "Admin Home",
    //         meta: {
    //           requiresLogin: true,
    //           title: "Dashboard"
    //         },
    //         // name: "Dashboard",     meta: { requiresLogin: true },
    //       },
       
    //       {
    //         path: "history",
    //         // name: "History",
    //         component: History,
    //         meta: {
    //           requiresLogin: true,
    //           title: 'Evaluate'
    //         },
    //       },
    //       {
    //         path: "qcereportiaas",
    //         // name: "QCE(LMS)-Repiaas",
    //         component: QCEReportiaas,
    //         meta: {
    //           requiresLogin: true,
    //           title: 'IAAS Report'
    //         },
    //       },
    //       {
    //         path: "qcereportited",
    //         // name: "QCE(LMS)-Repited",
    //         component: QCEReportited,
    //         meta: {
    //           requiresLogin: true,
    //           title: 'ITED Report'
    //         },
    //       },
    //       {
    //         path: "qcereportilegg",
    //         // name: "QCE(LMS)-Repilegg",
    //         component: QCEReportilegg,
    //         meta: {
    //           requiresLogin: true,
    //           title: 'ILEGG Report'
    //         },
    //       }
    //     ],
    // },

];









const router = createRouter({
    history: createWebHistory(),
    base: "http://localhost:8080",
    routes,
  });

//   router.beforeEach((to, from, next) => {
//     let user = store.state.user;
//     // console.log("authentctre",store.state.isAuthenticated)
//     document.title = to.meta.title;
//     if (to.matched.some((record) => record.meta.requiresLogin == true)) {
//       if (store.state.isAuthenticated) {
  
  
//         next();
//       } else {
  
  
//         next("/");
//       }
//     } else {
//       if (store.state.isAuthenticated) {
//         if(store.state.isAuthenticated == true){
//           if (store.state.user.usertype == 1) {
  
//             next({ path: "/admin/" + rating });
    
//           } else if (store.state.user.usertype == 2) {
    
    
//             next({ path: "/manager/" + rating});
            
//           } else if (store.state.user.usertype == 3) {
    
//             next({ path: "/evaluator" });
//           }
//         }else{
//           if (store.state.user.usertype == 1) {
  
//             next({ path: "/admin"  });
    
//           } else if (store.state.user.usertype == 2) {
    
    
//             next({ path: "/manager"});
            
//           } else if (store.state.user.usertype == 3) {
    
//             next({ path: "/evaluator" });
//           }
//         }
     
//       } else {
  
  
  
//         next();
//       }
//     }
//   });
  