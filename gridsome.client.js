import ogp from './lib/ogp'

export default function (Vue, _options, {router, head}) {
  Vue.prototype.$ogp = ogp

  if (!process.env.GRIDSOME_BASE_PATH) return

  router.beforeEach((to, _from, next) => {
    head.meta.push({
      property: 'og:url',
      content: process.env.GRIDSOME_BASE_PATH + to.path,
    })
    next()
  })
}
