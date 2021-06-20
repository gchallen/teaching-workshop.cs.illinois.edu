module.exports = {
  images: {
    domains: ["ws.engr.illinois.edu", "www.seltzer.com"],
  },
}
const withOptimizedImages = require("next-optimized-images")

module.exports = withOptimizedImages({
  handleImages: ["jpeg", "png"],
})
