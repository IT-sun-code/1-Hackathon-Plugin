import {moment} from 'moment'
import 'moment-precise-range-plugin'

export function getToDayDate(date) {
  return moment(date).format('MMM Do YY')
}

export function leftUntilNewYear(date1, date2) {
  const date1Form = moment(date1)
  const date2Form = moment(date2)
  return moment.preciseDiff(date1Form, date2Form)
}