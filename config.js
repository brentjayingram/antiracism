const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://antiracismdocs.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://raw.githubusercontent.com/bingr001/antiracism/master/src/components/images/antiracism-logo.png',
    logoLink: '/',
    title:
      "Anti-Racism Docs",
    
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/antiracismdocs" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      // '/introduction', // add trailing slash if enabled above
      
      // '/communities'
    ],
    collapsedNav: [
      // add trailing slash if enabled above
    ],
    links: [{ text: 'Created by Brent Jay Ingram', link: 'https://www.brentjingram.com/' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='/'>Resources for the American Church </a>",
  },
  siteMetadata: {
    title: 'Anti-Racism Docs',
    description: 'Resources for the American Church',
    ogImage: null,
    
    
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/components/images/antiracism-logo.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
