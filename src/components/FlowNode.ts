import { Node } from 'butterfly-dag'

interface Options {
  left: number
  top: number
  options: {
    type: string
    name: string
    logoUrl?: string
    volume?: string
  }
}

class BaseNode extends Node {
  constructor(opts: any) {
    super(opts)
  }

  draw(opts: Options) {
    const container = document.createElement('div')
    container.innerHTML = `
    <div class="border rounded py-2 px-2 position-absolute d-flex flex-column justify-content-center" style="background-color: var(--el-color-info-light-9); width: 144px; height: 100px; cursor: pointer; user-select: none;" >
      {{TEMPLATE}}
      <div class="text-center mt-2">${opts.options.name}</div>
    </div>
  `.replaceAll(
      '{{TEMPLATE}}',
      opts.options.type === 'root'
        ? `<div class="text-center"><img src="${opts.options.logoUrl}" style="height: 48px" /></div>`
        : `<div class="text-center h3 mb-0">${opts.options.volume}</div>`
    )

    const div = container.getElementsByTagName('div')[0]
    if (opts.options.type === 'root') {
      div.classList.add('bg-blue-lt')
    }
    if (opts.options.type === 'inFlow') {
      div.classList.add('bg-lime-lt')
    }
    if (opts.options.type === 'outFlow') {
      div.classList.add('bg-pink-lt')
    }

    div.style.left = `${opts.left}px`
    div.style.top = `${opts.top}px`

    // if (opts.options.type === 'root') {
    //   div.style.left = '200px'
    //   div.style.top = '200px'
    // }
    // if (opts.options.type === 'inFlow') {
    //   div.style.left = '100px'
    // }
    // if (opts.options.type === 'outFlow') {
    //   div.style.left = '300px'
    // }

    // if (opts.options.count % 2 === 1) {
    //   div.style.top = `200px`
    //   const diff = Math.abs(Math.floor(opts.options.count / 2) - opts.options.idx)
    //   if (opts.options.idx < Math.floor(opts.options.count / 2)) {
    //     div.style.top = `calc(200px - ${120 * diff}px)`
    //   }
    //   if (opts.options.idx > Math.floor(opts.options.count / 2)) {
    //     div.style.top = `calc(200px + ${120 * diff}px)`
    //   }
    // } else {
    //   const diff = Math.abs(opts.options.count / 2 - opts.options.idx)
    //   if (opts.options.idx < opts.options.count / 2) {
    //     div.style.top = `calc(200px - ${120 * diff}px + 60px)`
    //   }
    //   if (opts.options.idx >= opts.options.count / 2) {
    //     div.style.top = `calc(200px + ${120 * diff}px + 60px)`
    //   }
    // }
    return div
  }
}

export default BaseNode
