import ogp from './lib/ogp'

export default function (Vue, {head}, {isClient}) {
  Vue.prototype.$ogp = ogp
}
