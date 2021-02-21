module.exports = {
  pwa: {
      manifestOptions: {
          background_color: 'silver'
      },
      name: 'Album',
      themeColor: 'aqua',
      workboxOptions: {
        runtimeCaching: [
         {
           handler: 'NetworkFirst',
           options: {
             networkTimeoutSeconds: 5
           },
           urlPattern: 'https://jsonplaceholder.typicode.com/albums'
         },
         {
            handler: 'NetworkFirst',
            options: {
              networkTimeoutSeconds: 5
            },
            urlPattern: 'https://jsonplaceholder.typicode.com/users'
         },
         {
            handler: 'NetworkFirst',
            options: {
              networkTimeoutSeconds: 5
            },
            urlPattern: 'https://jsonplaceholder.typicode.com/comments'
         },

        ]
      }
  }
}