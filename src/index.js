import CMS from './cms/api'
import CmsDate from './cms/CmsDate.vue'
import CmsEmbed from './cms/CmsEmbed.vue'
import CmsImage from './cms/CmsImage.vue'
import CmsKeyText from './cms/CmsKeyText.vue'
import CmsLink from './cms/CmsLink.vue'
import CmsRichText from './cms/CmsRichText.vue'
import CmsTitle from './cms/CmsTitle.vue'

const install = (Vue, options) => {
  Vue.component('cms-date', CmsDate)
  Vue.component('cms-embed', CmsEmbed)
  Vue.component('cms-image', CmsImage)
  Vue.component('cms-keytext', CmsKeyText)
  Vue.component('cms-link', CmsLink)
  Vue.component('cms-richtext', CmsRichText)
  Vue.component('cms-title', CmsTitle)

  Vue.prototype.$cms = new CMS(options.prismicEndpoint)
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
