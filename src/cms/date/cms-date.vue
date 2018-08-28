<script>
export default {
  name: 'cms-date',
  render (createElement) {
    return createElement(
      'span',
      this.formattedDate
    )
  },
  computed: {
    formattedDate () {
      const d = new Date(this.content)

      return d.toLocaleDateString(this.locale || 'en', this.format)
    }
  },
  props: {
    content: {
      type: String,
      required: true
    },
    format: {
      type: Object,
      required: false
    },
    locale: {
      type: String,
      required: false
    }
  }
}
</script>
