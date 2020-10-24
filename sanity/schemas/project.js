export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
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
      name: 'description',
      title: 'Description',
      type: 'text'
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
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string'   // 'done' | 'development' | 'fixer-upper'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'description',
      status: 'status',
    },
    prepare(selection) {
      const {status, title, media, subtitle} = selection;
      const EMOJIS = {
        development: '🎫',
        done: '✅',
        "fixer-upper": '🚫'
      }
      return {
        ...selection,
        status: <span style={{fontSize: '1.5rem'}}>{status ? EMOJIS[status] : '🎫'}</span>
      }
    }
  }
}
