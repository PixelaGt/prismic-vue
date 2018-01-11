<script>
  export const cmsLink = {
    render(createElement) {
      var target;

      if(this.newTab) {
        target = '_blank';
      } else if(this.content.target) {
        target = this.content.target;
      } else {
        target = '';
      }

      if(this.content.link_type === 'Media' || this.content.link_type === 'Web') {
        return createElement('a', {
          attrs: {
            href: this.content.url,
            target
          }
        }, this.$slots.default );
      } else if(this.content.link_type === 'Document') {
        return createElement('a', {
          attrs: {
            href: this.prefix + this.content.slug,
            target
          }
        }, this.$slots.default )
      }
    },
    props: {
      content: {
        type: Object,
        required: true
      },
      prefix: {
        type: String,
        required: false
      },
      newTab: {
        type: Boolean,
        required: false
      }
    }
  }

  export default cmsLink;
</script>
