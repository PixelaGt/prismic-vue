<script>
  import moment from 'moment';

  export default {
    name: "cms-date",
    render(createElement) {
      return createElement('span',
                moment(this.content).format(this.format? this.format : '')
              );
    },
    props: {
      content: {
        type: String,
        required: true
      },
      format: {
        type: String,
        required: false
      }
    }
  }
</script>
