# gridsome-plugin-ogp

Adding OGP meta tags to every page can be a pain. This plugin aims to alleviate
that pain. Add the plugin to your project like so.

```sh
npm i gridsome-plugin-ogp
```

In `gridsome.config.js`...

```javascript
plugins: [
  {
    use: 'gridsome-plugin-ogp'
  }
]
```

Then, in any page or template component you have, adjust the `metaInfo` hook
like so.

```javascript
metaInfo() {
  return {
    ...this.$ogp({
      title: 'your-title',
      description: 'your-description',
      keywords: 'your-keyword-list'
      image: 'your-image-url'
      site: 'your-site-name'
      twitterSite: '@your-twitter-site'
      appId: 'someFacebookAppID' // Facebook-only
    })
  }
}
```

This will then populate the meta tags needed for Facebook, Google, and Twitter.
It will also set the standard page title and description at the same time.
