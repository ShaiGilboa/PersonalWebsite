export default {
  name: 'tech',
  title: 'Tech',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url'
    }
  ],
  prepare(selection) {
    const {status, title, media, subtitle} = selection;
    const EMOJIS = {
      development: '🎫',
      done: '✅',
      "fixer-upper": '🚫'
    }
    console.log('slection',selection)
    return {
      ...selection,
      status: EMOJIS[status]
    }
  }
}
