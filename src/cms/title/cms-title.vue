<script>
  export const CMSTitle = {
    render(createElement) {
      const headingLevel =  this.content[0].type.replace('heading', 'h');
      return createElement(headingLevel, this.content[0].text)
    },
    props: {
      content: {
        type: Array,
        required: true
      }
    }
  }

  export default CMSTitle;
</script>
