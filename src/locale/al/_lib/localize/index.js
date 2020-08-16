import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'

var eraValues = {
  narrow: ['bC', 'aC'],
  abbreviated: ['b.C.', 'a.C.'],
  wide: ['para Krishtit', 'pas Krishtit']
}

var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['T1', 'T2', 'T3', 'T4'],
  wide: [
    'tremujori i parë',
    'tremujori i dytë',
    'tremujori i tretë',
    'tremujori i katërt'
  ]
}

var monthValues = {
  narrow: ['J', 'Sh', 'M', 'P', 'M', 'Q', 'K', 'G', 'Sh', 'T', 'N', 'Dh'],
  abbreviated: [
    'jan',
    'shk',
    'mar',
    'pri',
    'maj',
    'qer',
    'korr',
    'gush',
    'sht',
    'tet',
    'nën',
    'dhj'
  ],
  wide: [
    'janar',
    'shkurt',
    'mars',
    'prill',
    'maj',
    'qershor',
    'korrik',
    'gusht',
    'shtator',
    'tetor',
    'nëntor',
    'dhjetor'
  ]
}

var dayValues = {
  narrow: ['D', 'H', 'M', 'M', 'E', 'P', 'Sh'],
  short: ['di', 'he', 'ma', 'me', 'enj', 'pr', 'sh'],
  abbreviated: ['die', 'hen', 'mar', 'mer', 'enj', 'pre', 'sht'],
  wide: [
    'e diel',
    'e henë',
    'e martë',
    'e mërkurë',
    'e enjte',
    'e premte',
    'e shtunë'
  ]
}

var dayPeriodValues = {
  narrow: {
    am: 'm.',
    pm: 'p.',
    midnight: 'mesnatë',
    noon: 'mesditë',
    morning: 'mëngjes',
    afternoon: 'pasdite',
    evening: 'mbrëmje',
    night: 'natë'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'mesnatë',
    noon: 'mesditë',
    morning: 'mëngjes',
    afternoon: 'pasdite',
    evening: 'mbrëmje',
    night: 'natë'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'mesnatë',
    noon: 'mesditë',
    morning: 'mëngjes',
    afternoon: 'pasdite',
    evening: 'mbrëmje',
    night: 'natë'
  }
}
var formattingDayPeriodValues = {
  narrow: {
    am: 'm.',
    pm: 'p.',
    midnight: 'mesnatë',
    noon: 'mesditë',
    morning: 'e mëngjesit',
    afternoon: 'e pasdites',
    evening: 'e mbrëmjes',
    night: 'e natës'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'mesnatë',
    noon: 'mesditë',
    morning: 'e mëngjesit',
    afternoon: 'e pasdites',
    evening: 'e mbrëmjes',
    night: 'e natës'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'mesnatë',
    noon: 'mesditë',
    morning: 'e mëngjesit',
    afternoon: 'e pasdites',
    evening: 'e mbrëmjes',
    night: 'e natës'
  }
}

function ordinalNumber(dirtyNumber) {
  var number = Number(dirtyNumber)
  return number + 'º'
}

var localize = {
  ordinalNumber: ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function(quarter) {
      return Number(quarter) - 1
    }
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide'
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
}

export default localize
