import Plausible from 'plausible-tracker'

const { trackPageview } = Plausible({
  domain: 'tempusowl.com',
})

trackPageview()
