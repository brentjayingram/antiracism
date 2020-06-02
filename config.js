const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://antiracismdocs.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: "<a href='https://antiracism.netlify.app'><img class='img-responsive' src='https://github.com/bingr001/antiracism/blob/master/src/components/images/Anti-Racism%20Docs.png' alt='Learn logo' /></a>",
    logoLink: 'https://antiracism.netlify.app',
    title:
      "<a href='https://antiracism.netlify.app'><img class='img-responsive' src='https://github.com/bingr001/antiracism/blob/master/src/components/images/Anti-Racism%20Docs.png' alt='Learn logo' /></a>",
    
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/hasurahq" target="_blank" rel="noopener">
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
    links: [{ text: 'Created by Brent Jay Ingram', link: 'https://brentjingram.com' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://hasura.io/learn/'>graphql </a><div class='greenCircle'></div><a href='https://hasura.io/learn/graphql/react/introduction/'>react</a>",
  },
  siteMetadata: {
    title: 'Anti-Racism Docs',
    description: 'Resources for the American Church',
    ogImage: null,
    docsLocation: 'https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content',
    
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
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
