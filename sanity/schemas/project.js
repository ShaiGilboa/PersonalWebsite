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
      name: 'techs',
      title: 'Techs',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tech'}}],
      options: {
        layout: 'grid',
        // list: true,
      },
      validation: Rule => Rule.unique()
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',   // 'done' | 'development' | 'fixer-upper' | 'demo-only',
      options: {
        list: [
          {title: 'Done', value: 'done'},
          {title: 'In Development', value: 'development'},
          {title: 'Fixer-Upper', value: 'fixer-upper'},
          {title: 'Demo version', value: 'demo'},
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
      }
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{
        title: 'info',
        type: 'object',
        fields: [
          {name: 'url', type: 'url', title: 'Info Link'},
          {name: 'description', type: 'string', title: 'Link Description'}
        ]
      }]
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
        status: EMOJIS[status]
      }
    }
  }
}
