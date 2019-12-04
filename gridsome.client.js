import ogp from './lib/ogp'

export default function (Vue, {head}, {isClient}) {
  if (isClient) {
    Vue.prototype.$ogp = ogp
  }
}
