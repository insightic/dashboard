import moment from 'moment'
import { marked } from 'marked'

export function formatDateTime(date: string | Date, fromNow: boolean = false): string {
  const time = moment(date)
  if (!fromNow) {
    return `${time.format('YYYY/MM/DD HH:mm:ss')}`
  }
  return `${time.fromNow()}, ${time.format('YYYY/MM/DD HH:mm:ss')}`
}

export function formatDate(date: string | Date, fromNow: boolean = false): string {
  const time = moment(date)
  if (!fromNow) {
    return `${time.format('YYYY/MM/DD')}`
  }
  return `${time.fromNow()}, ${time.format('YYYY/MM/DD')}`
}

export function toTitleCase(str: string) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

export function ratingColor(rating: string): string {
  rating = rating.replaceAll('-', '').replaceAll('+', '').toLowerCase()
  if (rating === 'a') {
    return 'text-success'
  } else if (rating === 'b') {
    return 'text-primary'
  } else if (rating === 'c') {
    return 'text-warning'
  } else if (rating === 'd') {
    return 'text-danger'
  }
  return ''
}

export function notEmpty(obj: any) {
  if (!obj) return false
  if (Array.isArray(obj)) return obj.length > 0
}

export function render(str: string) {
  return marked.parse(str || '')
}
