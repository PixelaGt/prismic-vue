<script>
export default {
  name: 'cms-keytext',

  render (createElement) {
    return createElement('span', this.content)
  },
  props: {
    content: {
      type: String,
      required: true
    }
  }
}
</script>
