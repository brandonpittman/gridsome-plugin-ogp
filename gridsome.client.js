import ogp from './lib/ogp'

export default function (Vue) {
  Vue.prototype.$ogp = ogp

  router.beforeEach((to, _from, next) => {
    head.meta.push({
      property: 'og:url',
      content: process.env.GRIDSOME_BASE_PATH + to.path,
    })
    next()
  })
}
