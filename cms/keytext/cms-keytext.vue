<script>
  export const cmsKeytext = {
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

  export default cmsKeytext;
</script>
