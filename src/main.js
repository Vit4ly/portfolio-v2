import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faSpinner,
  faChevronDown,
  faChevronRight,
  faChevronLeft,
  faHome,
  faCameraRetro,
  faUserCircle,
  faCommentDots,
  faInfoCircle,
  faAngleDoubleRight,
  faTimes,
  faUser,
  faMobileAlt,
  faFilePdf,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTelegram,
  faInstagram,
  faGithub,
  faFacebook,
  faSkype,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./theme.scss";
import LazyLoad from "@/directives/LazyLoad";

library.add(
  faEnvelope,
  faChevronDown,
  faChevronRight,
  faChevronLeft,
  faSpinner,
  faHome,
  faCameraRetro,
  faUserCircle,
  faCommentDots,
  faInfoCircle,
  faTimes,
  faUser,
  faFilePdf,
  faMobileAlt,
  faAngleDoubleRight,
  faAngleRight,
  faAngleLeft,
  faTelegram,
  faInstagram,
  faGithub,
  faFacebook,
  faSkype,
  faLinkedin
);

createApp(App)
  .directive("lazyLoad", LazyLoad)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
