import Cookies from "js-cookie";
export class appState {
  sidebar = {
    opened: Cookies.get("sidebarStatus")
      ? !!+Cookies.get("sidebarStatus")
      : true,
    withoutAnimation: false
  };
  device: String = "desktop";
}
