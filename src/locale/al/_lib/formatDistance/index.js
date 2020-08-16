var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'më pak se një sekondë',
    other: 'më pak se {{count}} sekonda'
  },

  xSeconds: {
    one: 'një sekondë',
    other: '{{count}} sekonda'
  },

  halfAMinute: 'alcuni sekonda',

  lessThanXMinutes: {
    one: 'më pak se një minutë',
    other: 'më pak se {{count}} minuta'
  },

  xMinutes: {
    one: 'një minutë',
    other: '{{count}} minuta'
  },

  aboutXHours: {
    one: 'rreth një orë',
    other: 'rreth {{count}} orë'
  },

  xHours: {
    one: 'një orë',
    other: '{{count}} orë'
  },

  xDays: {
    one: 'një ditë',
    other: '{{count}} ditë'
  },

  aboutXWeeks: {
    one: 'rreth una javë',
    other: 'rreth {{count}} javë'
  },

  xWeeks: {
    one: 'una javë',
    other: '{{count}} javë'
  },

  aboutXMonths: {
    one: 'rreth një muaj',
    other: 'rreth {{count}} muaj'
  },

  xMonths: {
    one: 'një muaj',
    other: '{{count}} muaj'
  },

  aboutXYears: {
    one: 'rreth një vit',
    other: 'rreth {{count}} vite'
  },

  xYears: {
    one: 'një vit',
    other: '{{count}} vite'
  },

  overXYears: {
    one: 'më shumë se një vit',
    other: 'më shumë se {{count}} vite'
  },

  almostXYears: {
    one: 'gati një vit',
    other: 'gati {{count}} vite'
  }
}

export default function formatDistance(token, count, options) {
  options = options || {}

  var result
  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token]
  } else if (count === 1) {
    result = formatDistanceLocale[token].one
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count)
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'për ' + result
    } else {
      return result + ' më parë'
    }
  }

  return result
}
