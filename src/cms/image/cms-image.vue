<script>
  export default {
    name: 'cms-image',
    render(createElement) {
      return createElement('img', {
        attrs: {
          src: this.content.url,
        },
      }, this.$slots.default);
    },
    props: {
      content: {
        type: Object,
        required: true,
      },
    },
  };
</script>
