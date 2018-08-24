<script>
export default {
  name: 'cms-link',

  render(createElement) {
    let target;

    if (this.newTab) {
      target = '_blank';
    } else if (this.content.target) {
      target = this.content;
    } else {
      target = '';
    }

    if (this.content.link_type === 'Media' || this.content.link_type === 'Web') {
      return createElement('a', {
        attrs: {
          href: this.content.url,
          target,
        },
      }, this.$slots.default);
    } else if (this.content.link_type === 'Document') {
      return createElement('a', {
        attrs: {
          href: this.prefix + this.content.slug,
          target,
        },
      }, this.$slots.default);
    }
    return '';
  },
  props: {
    content: {
      type: Object,
      required: true,
    },
    prefix: {
      type: String,
      required: false,
    },
    newTab: {
      type: Boolean,
      required: false,
    },
  },
};
</script>
