export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '618e3b5299839c57724171aa',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-4hjq8rpw',
                  apiId: 'bb563286-8acc-460b-903b-ac30fa4daa3c'
                },
                {
                  buildHookId: '618e3b536d02d75be95947c0',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-rdpjd61w',
                  apiId: 'b8e31fc6-0785-42c0-b12b-dd29ec3f636f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/buddabic2/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-rdpjd61w.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
