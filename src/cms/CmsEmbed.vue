<script>
import { YoutubeEmbedParser } from '../utils/YoutubeEmbedParser'

export default {
  name: 'cms-embed',
  render (createElement) {
    const attrs = this.options ? this.options : {}
    if (this.content.provider_name === 'YouTube') {
      const src = `https://www.youtube.com/embed/${YoutubeEmbedParser(this.content.embed_url)}?feature=oembed`
      attrs.src = src
      return createElement('iframe', {
        attrs
      })
    } else if (this.content.provider_name === 'Vimeo') {
      const src = `https://player.vimeo.com/video/${this.content.video_id}`
      attrs.src = src
      return createElement('iframe', {
        attrs
      })
    } else if (this.content.provider_name.includes('music.')) {
      let params = ''
      if (this.spotify_options) {
        const keys = Object.keys(this.spotify_options)
        params = `&${keys.map(key => `${key}=${this.spotify_options[key]}`).join('&')}`
      }
      const src = `https://open.spotify.com/embed?uri=${this.content.embed_url}${params}`
      attrs.src = src
      return createElement('iframe', {
        attrs
      })
    }
    return ''
  },
  props: {
    content: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      required: false
    },
    spotify_options: {
      type: Object,
      required: false
    }
  }
}
</script>
