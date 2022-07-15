import wayContextmenu from './code'

function install(Vue) {
  Vue.prototype.$contextmenu = wayContextmenu;
}

if (window && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
