export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  fields: [
    {
      name: 'title', 
      title: 'Title',
      type: 'string', 
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'subheading',
      title: 'SubHeading',
      type: 'text'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent'
    },
    
  ]
}