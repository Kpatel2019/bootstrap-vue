import Vue from '../../utils/vue'
import formOptionsMixin from '../../mixins/form-options'
import normalizeSlotMixin from '../../mixins/normalize-slot'
import { htmlOrText } from '../../utils/html'

// @vue/component
export default Vue.extend({
  name: 'BFormDatalist',
  mixins: [formOptionsMixin, normalizeSlotMixin],
  props: {
    id: {
      type: String,
      default: null,
      required: true
    }
  },
  render(h) {
    const options = this.formOptions.map((option, index) => {
      return h('option', {
        key: `option_${index}_opt`,
        attrs: { disabled: option.disabled },
        domProps: { ...htmlOrText(option.html, option.text), value: option.value }
      })
    })
    return h('datalist', { attrs: { id: this.id } }, [options, this.normalizeSlot('default')])
  }
})
