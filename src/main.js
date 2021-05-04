import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faSpinner,
  faChevronDown,
  faHome,
  faCameraRetro,
  faUserCircle,
  faCommentDots,
  faInfoCircle,
  faAngleDoubleRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTelegram,
  faInstagram,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./theme.scss";

library.add(
  faEnvelope,
  faChevronDown,
  faSpinner,
  faHome,
  faCameraRetro,
  faUserCircle,
  faCommentDots,
  faInfoCircle,
  faTimes,
  faAngleDoubleRight,
  faTelegram,
  faInstagram,
  faGithub,
  faFacebook
);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
