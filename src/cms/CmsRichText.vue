<template><div v-html="richText"></div></template>
<script>
import PrismicDOM from 'prismic-dom'

export default {
  name: 'cms-richtext',
  computed: {
    richText () {
      return PrismicDOM.RichText.asHtml(this.content)
    }
  },

  props: {
    content: {
      type: Array,
      required: true
    }
  }
}
</script>
