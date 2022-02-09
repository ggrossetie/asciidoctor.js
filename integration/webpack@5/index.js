import Asciidoctor from '@asciidoctor/core'

const processor = Asciidoctor()
const html = processor.convert('Hello *world*')
console.log(html)
