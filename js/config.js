$(function() {

  CMS.init({

    // Name of your site or location of logo file, relative to root directory (img/logo.png)
    siteName: 'CMS-Kurs',

    // Tagline for your site
    siteTagline: 'Installation, Anpassungen & Templating',

    // Email address
    siteEmail: 'christoph.pfeiffer@ur.de',

    // Name
    siteAuthor: 'Christoph Pfeiffer',

    // Navigation items
    siteNavItems: [
      { name: 'Home'},
      { name: 'Mitteilungen', href: '#posts', newWindow: false},
      { name: 'About'},
      { name: 'Nochwas'},
      { name: 'UR', href: 'https://www.ur.de/', newWindow: false}
    ],

    // Posts folder name
    postsFolder: 'posts',

    // Homepage posts snippet length
    postSnippetLength: 120,

    // Pages folder name
    pagesFolder: 'pages',

    // Order of sorting (true for newest to oldest)
    sortDateOrder: true,

    // Posts on Frontpage (blog style)
    postsOnFrontpage: true,

    // Page as Frontpage (static)
    pageAsFrontpage: '',

    // Posts/Blog on different URL
    postsOnUrl: '',

    // Site fade speed
    fadeSpeed: 0,

    // Site footer text
    footerText: 'Dinge und Sachen ... und Link zum <a href="#">Impressum</a>',

    // Mode 'Github' for Github Pages, 'Server' for Self Hosted. Defaults
    // to Github
    mode: 'Server',

     // If Github mode is set, your Github username and repo name.
    githubUserSettings: {
      username: 'yourusername',
      repo: 'yourrepo'
    },

    // If Github mode is set, choose which Github branch to get files from.
    // Defaults to Github pages branch (gh-pages)
    githubSettings: {
      branch: 'gh-pages',
      host: 'https://api.github.com'
    }

  });

  // Markdown settings
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
  });

});
