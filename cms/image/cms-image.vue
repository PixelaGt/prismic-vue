<script>
  export const cmsImage = {
    render(createElement) {
      return createElement('img', {
        attrs: {
          src: this.content.url
        }
      }, this.$slots.default)
    },
    props: {
      content: {
        type: Object,
        required: true
      }
    }
  }

  export default cmsImage;
</script>
