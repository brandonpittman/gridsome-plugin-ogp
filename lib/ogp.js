export default function ({
  title,
  description,
  url = window.location.href,
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
      name: 'card',
      content: 'summary_image_large'
    },
    {
      name: 'title',
      content: title
    },
    {
      name: 'description',
      content: description
    },
    {
      name: 'image',
      content: image
    }
  ]

  const facebook = [
    {
      name: 'url',
      content: url
    },
    {
      name: 'type',
      content: 'website'
    },
    {
      name: 'title',
      content: title
    },
    {
      name: 'description',
      content: description
    },
    {
      name: 'image',
      content: image
    }
  ]

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
