<template><div v-html="richText"></div></template>
<script>
  import PrismicDOM from 'prismic-dom';

  export const cmsRichtext = {
    computed: {
      richText() {
       return PrismicDOM.RichText.asHtml(this.content);
      }
    },
    render(createElement) {
    },
    props: {
      content: {
        type: Array,
        required: true
      }
    }
  }

  export default cmsRichtext;
</script>
