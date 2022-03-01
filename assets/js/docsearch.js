import docsearch from '@docsearch/js';

var searchPlaceholder = document.getElementById('search-placeholder');

if (searchPlaceholder !== null) {
  searchPlaceholder.className = 'd-none';
}

docsearch({
  container: '#docsearch',
  appId: '6YP209XB51',
  indexName: 'prod_tempusowl',
  apiKey: '6c5db5fe7b95a66bac9d52c18a63657a',
  debug: false,
});
