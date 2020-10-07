export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f7e312069cb2c169fb551e3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-259-studio',
                  apiId: 'fb3ab519-e614-4cc0-83da-94b2f48f6fdb'
                },
                {
                  buildHookId: '5f7e31201d71b71b68e8c3b6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-259',
                  apiId: '0bf7cdf5-5aaa-4389-8ef1-e71cf6bf26f1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/evenwestvang/sanity-gatsby-blog-259',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-259.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
