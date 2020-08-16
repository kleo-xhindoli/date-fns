import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index.js'
import buildMatchFn from '../../../_lib/buildMatchFn/index.js'

var matchOrdinalNumberPattern = /^(\d+)(r|t)?/i
var parseOrdinalNumberPattern = /\d+/i

var matchEraPatterns = {
  narrow: /^(bC|aC)/i,
  abbreviated: /^(b\.?\s?C\.?|p\.?\s?e\.?\s?v\.?|a\.?\s?C\.?|e\.?\s?v\.?)/i,
  wide: /^(para Krishtit|para Er[e|ë]s son[e|ë]|pas Krishtit|Er[e|ë]s son[e|ë])/i
}
var parseEraPatterns = {
  any: [/^p/i, /^pas/i]
}

// TODO:
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^t[1234]/i,
  wide: /^tremujori i? (par[e|ë]|dyt[e|ë]|tret[e|ë]|kat[e|ë]rt|[1234])/i
}
var parseQuarterPatterns = {
  any: [/(1|par)/i, /(2|dyt)/i, /(3|tre)/i, /(4|kat)/i]
}

var matchMonthPatterns = {
  narrow: /^[jshmpmqkgshtndh]/i,
  abbreviated: /^(jan|shk|mar|pri|maj|qer|korr|kor|gush|gus|sht|tet|n[e|ë]n|dhj)/i,
  wide: /^(janar|shkurt|mars|prill|maj|qershor|korrik|gusht|shtator|tetor|n[e|ë]ntor|dhjetor)/i
}
var parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^sh/i,
    /^m/i,
    /^p/i,
    /^m/i,
    /^q/i,
    /^k/i,
    /^g/i,
    /^sh/i,
    /^t/i,
    /^n/i,
    /^dh/i
  ],
  any: [
    /^j/i,
    /^shk/i,
    /^mar/i,
    /^p/i,
    /^maj/i,
    /^q/i,
    /^k/i,
    /^g/i,
    /^sht/i,
    /^t/i,
    /^n/i,
    /^d/i
  ]
}

var matchDayPatterns = {
  narrow: /^[dhmmepsh]/i,
  short: /^(h[e|ë]|ma|m[e|ë]|enj|pr|sh|di)/i,
  abbreviated: /^(die|hen|mar|m[e|ë]r|enj|pre|sht)/i,
  wide: /^(e diel[e|ë]|e h[e|ë]n[e|ë]|e mart[e|ë]|e m[e|ë]rkur[e|ë]|e enjte|e premte|e shtun[e|ë])/i
}
var parseDayPatterns = {
  narrow: [/^d/i, /^h/i, /^m/i, /^m/i, /^e/i, /^p/i, /^s/i],
  any: [/^d/i, /^h/i, /^ma/i, /^m[e|ë]/i, /^e/i, /^p/i, /^s/i]
}

var matchDayPeriodPatterns = {
  narrow: /^(a|m\.|p|mesnat[e|ë]|mesdit[e|ë]|e (m[e|ë]ngjesit|pasdites|mbr[e|ë]mjes|nat[e|ë]s))/i,
  any: /^([ap]\.?\s?m\.?|mesnat[e|ë]|mesdit[e|ë]|e (m[e|ë]ngjesit|pasdites|mbr[e|ë]mjes|nat[e|ë]s))/i
}
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mesd/i,
    noon: /^mesn/i,
    morning: /m[e|ë]n/i,
    afternoon: /pas/i,
    evening: /mbr/i,
    night: /nat/i
  }
}

var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function(value) {
      return parseInt(value, 10)
    }
  }),

  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),

  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function(index) {
      return index + 1
    }
  }),

  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),

  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),

  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
}

export default match
