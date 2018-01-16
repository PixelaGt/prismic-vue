import CMS from './cms/api'
import CmsDate from './cms/date/cms-date.vue'
import CmsEmbed from './cms/embed/cms-embed.vue'
import CmsImage from './cms/image/cms-image.vue'
import CmsKeyText from './cms/keytext/cms-keytext.vue'
import CmsLink from './cms/link/cms-link.vue'
import CmsRichText from './cms/richtext/cms-richtext.vue'
import CmsTitle from './cms/title/cms-title.vue'

const install = (Vue) => {
  Vue.component('cms-date', CmsDate)
  Vue.component('cms-embed', CmsEmbed)
  Vue.component('cms-image', CmsImage)
  Vue.component('cms-keytext', CmsKeyText)
  Vue.component('cms-link', CmsLink)
  Vue.component('cms-richtext', CmsRichText)
  Vue.component('cms-title', CmsTitle)
}

export default {
  install
}

export {
  CMS,
  CmsDate,
  CmsEmbed,
  CmsImage,
  CmsKeyText,
  CmsLink,
  CmsRichText,
  CmsTitle
}
