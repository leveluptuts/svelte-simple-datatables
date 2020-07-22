import { columns } from '../store.js'

export default class Header {

    getColumns() {
        const columnList = []
        let i = 0
        document.querySelectorAll('.datatable table thead th').forEach(th => {
            columnList.push({
                index: i,
                html: th.innerHTML,
                key: th.dataset.key,
                sort: null,
                classList: th.classList,
            })
            i++
        })
        columns.set(columnList)
        return columnList       
    }

    removeOriginalThead() {
        const elem = document.querySelector('.datatable table thead')
        const originHeight = elem.getBoundingClientRect().height
        elem.parentNode.style.marginTop = '-' + originHeight + 'px'
        elem.style.visibility = 'hidden'
    }

    getOrginalHeaderClassList() {
        return document.querySelector('.datatable table thead').classList
    }
}