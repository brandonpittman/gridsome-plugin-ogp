import ogp from './lib/ogp'

export default function (Vue, _options, {router, head}) {
  Vue.prototype.$ogp = ogp
}
