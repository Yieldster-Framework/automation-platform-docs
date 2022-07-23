import theme from '@nuxt/content-theme-docs'

export default theme({
  target: 'static',
  router: {
    base: '/automation-platform-docs/'
  },
  docs: {
    primaryColor: '#38D4FF'
  },
  loading: { color: '#ff40ff' },
})
