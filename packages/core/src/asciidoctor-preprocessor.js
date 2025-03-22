const ConditionalDirectiveRx = /^(ifdef|ifndef|ifeval|endif)::(\S*?(?:([,+])\S*?)?)\[([^\n]+)?]$/
const AttributeEntryRx = /^:(!?[a-zA-Z0-9_][^:]*):(?:[ \t]+([^\n]*))?$/
/**
 * @param content
 */
export function preprocess (content) {
  content.split('\n').forEach(line => {
    if (ConditionalDirectiveRx.test(line)) {
      const [, directive, name, operator, value] = ConditionalDirectiveRx.exec(line)
      console.log({
        directive,
        name,
        operator,
        value
      })
    }
    if (AttributeEntryRx.test(line)) {
      const [, key, value] = AttributeEntryRx.exec(line)
      console.log({
        key,
        value
      })
    }
    if (line.startsWith('include::')) {
      console.log({ line })
    }
  })
  return content
}
