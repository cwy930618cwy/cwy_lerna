import router from "./router";
import store from "./store";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { getToken } from "@/utils/auth"; // get token from cookie

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ["/login", "/auth-redirect"]; // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();

  // set page title

  // determine whether the user has logged in
  const hasToken = getToken();

  const hasRoles = store.state.user.roles && store.state.user.roles.length > 0;

  console.log("hasRoles", hasRoles);
  if (hasToken) {
    if (hasRoles) {
      next();
    } else {
      store.dispatch("user/setRoles", [0]);
      // const { roles } = await store.dispatch("user/getInfo");

      // console.log("permisson-=---", roles);
      // get user info
      // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
      // const { roles } = await store.dispatch('user/getInfo')

      // generate accessible routes map based on roles
      const accessRoutes = await store.dispatch("permission/generateRoutes", [
        "admin"
      ]);

      // dynamically add accessible routes
      router.addRoutes(accessRoutes);

      // hack method to ensure that addRoutes is complete
      // set the replace: true, so the navigation will not leave a history record
      next({ ...to, replace: true });
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next();
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login`);
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
