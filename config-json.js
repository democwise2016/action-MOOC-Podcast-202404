let CONFIG = {
  publicURL: `https://democwise2016.github.io/action-MOOC-Podcast-202404/`,
  publicURLShorten: `https://rb.gy/j56mc5`,  // https://democwise2016.github.io/action-MOOC-Podcast-202404/
  thumbnailBorderColor: '44001A',
  titleAppend: '[MC+202405]',
  titleSuffix: '[MC+202404]',
  idAppend: false,

  maxDownloadItemPerFeed: 500000,
  maxDownloadFeed: 5000000,
  newArrialMax: 500000,
  maxDownloadItems: 1000000,
  maxExcutionMinutes: 15,
  maxSameTime: 2,
}

// let test = '1780'
// CONFIG.publicURL = `https://dangerous-lizard-99.telebit.io/`
// CONFIG.titleAppend = '[MC+] 20240125-' + test
// CONFIG.idAppend = '20240125-' + test
// CONFIG.maxDownloadItemPerFeed = 100
// CONFIG.debug = true

module.exports = CONFIG
