import isSameUTCWeek from '../../../../_lib/isSameUTCWeek/index.js'

var weekdays = [
  'e diel',
  'e henë',
  'e martë',
  'e mërkurë',
  'e enjte',
  'e premte',
  'e shtunë'
]

function lastWeek(day) {
  switch (day) {
    default:
      return "'të " + weekdays[day] + "n e kaluar në orën' p"
  }
}

function thisWeek(day) {
  return "'të " + weekdays[day] + "n në orën' p"
}

function nextWeek(day) {
  switch (day) {
    default:
      return "'të " + weekdays[day] + "n e ardhshme në orën' p"
  }
}

var formatRelativeLocale = {
  lastWeek: function(date, baseDate, options) {
    var day = date.getUTCDay()
    if (isSameUTCWeek(date, baseDate, options)) {
      return thisWeek(day)
    } else {
      return lastWeek(day)
    }
  },
  yesterday: "'dje në orën' p",
  today: "'sot në orën' p",
  tomorrow: "'nesër në orën' p",
  nextWeek: function(date, baseDate, options) {
    var day = date.getUTCDay()
    if (isSameUTCWeek(date, baseDate, options)) {
      return thisWeek(day)
    } else {
      return nextWeek(day)
    }
  },
  other: 'P'
}

export default function formatRelative(token, date, baseDate, options) {
  var format = formatRelativeLocale[token]

  if (typeof format === 'function') {
    return format(date, baseDate, options)
  }

  return format
}
