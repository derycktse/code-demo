var xssFilters = require('xss-filters');

const data = 'javascript:alert(1)'
change(data)
change('/my-asdasd');
change('https://www.baid.com/');
change('//www.baid.com/');
change('//www.baid.com/');
function change(data) {
  console.log(data)
  console.log('uriInHTMLData():   ', xssFilters.uriInHTMLData(data))
  console.log('uriInHTMLComment():   ', xssFilters.uriInHTMLComment(data))
  console.log('uriInSingleQuotedAttr():   ', xssFilters.uriInSingleQuotedAttr(data))
  console.log('uriInDoubleQuotedAttr():   ', xssFilters.uriInDoubleQuotedAttr(data))
  console.log('uriInUnQuotedAttr():   ', xssFilters.uriInUnQuotedAttr(data))
  console.log('uriPathInHTMLData():   ', xssFilters.uriPathInHTMLData(data))
  console.log('uriPathInHTMLComment():   ', xssFilters.uriPathInHTMLComment(data))
  console.log('uriPathInSingleQuotedAttr():   ', xssFilters.uriPathInSingleQuotedAttr(data))
  console.log('uriPathInDoubleQuotedAttr():   ', xssFilters.uriPathInDoubleQuotedAttr(data))
  console.log('uriPathInUnQuotedAttr():   ', xssFilters.uriPathInUnQuotedAttr(data))
  console.log('uriQueryInHTMLData():   ', xssFilters.uriQueryInHTMLData(data))
  console.log('uriQueryInHTMLComment():   ', xssFilters.uriQueryInHTMLComment(data))
  console.log('uriQueryInSingleQuotedAttr():   ', xssFilters.uriQueryInSingleQuotedAttr(data))
  console.log('uriQueryInDoubleQuotedAttr():   ', xssFilters.uriQueryInDoubleQuotedAttr(data))
  console.log('uriQueryInUnQuotedAttr():   ', xssFilters.uriQueryInUnQuotedAttr(data))
  console.log('uriComponentInHTMLData():   ', xssFilters.uriComponentInHTMLData(data))
  console.log('uriComponentInHTMLComment():   ', xssFilters.uriComponentInHTMLComment(data))
  console.log('uriComponentInSingleQuotedAttr():   ', xssFilters.uriComponentInSingleQuotedAttr(data))
  console.log('uriComponentInDoubleQuotedAttr():   ', xssFilters.uriComponentInDoubleQuotedAttr(data))
  console.log('uriComponentInUnQuotedAttr():   ', xssFilters.uriComponentInUnQuotedAttr(data))
  console.log('uriFragmentInHTMLData():   ', xssFilters.uriFragmentInHTMLData(data))
  console.log('uriFragmentInHTMLComment():   ', xssFilters.uriFragmentInHTMLComment(data))
  console.log('uriFragmentInSingleQuotedAttr():   ', xssFilters.uriFragmentInSingleQuotedAttr(data))
  console.log('uriFragmentInDoubleQuotedAttr():   ', xssFilters.uriFragmentInDoubleQuotedAttr(data))
  console.log('uriFragmentInUnQuotedAttr():   ', xssFilters.uriFragmentInUnQuotedAttr(data))

  console.log('\n\n')
}
