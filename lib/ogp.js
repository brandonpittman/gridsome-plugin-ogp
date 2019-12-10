export default function ({
  title,
  description,
  url,
  image
} = {}) {
  const google = [
    {
      itemprop: 'name',
      content: title
    },
    {
      itemprop: 'description',
      content: description
    },
    {
      itemprop: 'image',
      content: image
    }
  ]

  const twitter = [
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: title
    },
    {
      name: 'twitter:description',
      content: description
    },
    {
      name: 'twitter:image',
      content: image
    }
  ]

  const facebook = [
    {
      property: 'og:url',
      content: url ? url : (process.isClient ? window.location.href : '')
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:title',
      content: title
    },
    {
      property: 'og:description',
      content: description
    },
    {
      property: 'og:image',
      content: image
    }
  ]

  this.$once('hook:mounted', () => {
    this.$meta().refresh();
  })

  return {
    title: title,
    meta: [
      {
        key: 'description',
        name: 'description',
        content: description
      },
      ...google,
      ...twitter,
      ...facebook
    ]
  }
}
