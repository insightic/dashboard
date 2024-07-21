import moment from 'moment'
import { marked } from 'marked'
import Autolinker from 'autolinker'

export function formatDate(
  date: string | Date,
  format: string = 'YYYY/MM/DD',
  fromNow: boolean = false
): string {
  const time = moment(date)
  if (!fromNow) {
    return `${time.format(format)}`
  }
  return `${time.fromNow()}, ${time.format(format)}`
}

export function toTitleCase(str: string) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

export function formatTime(hourIdx: number | string) {
  hourIdx = +hourIdx
  if (hourIdx < 0) {
    hourIdx = 0
  }
  if (hourIdx > 23) {
    hourIdx = 23
  }

  const now = new Date()
  return moment(new Date(now.getFullYear(), now.getMonth(), now.getDate(), hourIdx, 0, 0))
}

export function ratingColor(rating: string): string {
  if (!rating) return ''
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
  const linkedText = Autolinker.link(str || '')
  return marked.parse(linkedText || '')
}

export function formatNumber(num: number) {
  if (num < 1000) {
    if (Number.isInteger(num)) return num
    return num.toFixed(7)
  }
  if (num < 1000000) return `${(num / 1000).toFixed(1)}K`
  if (num < 1000000000) return `${(num / 1000000).toFixed(1)}M`
  if (num < 1000000000000) return `${(num / 1000000000).toFixed(1)}B`
  return `${(num / 1000000000000).toFixed(1)}T`
}
