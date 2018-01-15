<script>
  export const CMSKeytext = {
    render(createElement) {
      return createElement('span', this.content);
    },
    props: {
      content: {
        type: String,
        required: true
      }
    }
  }

  export default CMSKeytext;
</script>
