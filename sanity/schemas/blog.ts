export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of blog',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of article',
      options: {
        source: 'title'
      }
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image',
    },
    {
      name: 'smallDesc',
      type: 'text',
      title: 'Small Desc of blog',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
