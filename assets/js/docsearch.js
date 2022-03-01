import docsearch from '@docsearch/js';

var searchPlaceholder = document.getElementById('search-placeholder');

if (searchPlaceholder !== null) {
  searchPlaceholder.className = 'd-none';
}

docsearch({
  container: '#docsearch',
  appId: '6YP209XB51',
  indexName: 'netlify_d836a4f4-95a8-4205-8592-79dd339bee3e_master_all',
  apiKey: '5e9e7a5a9ae79dcf00c4762f73c01823',
  debug: false,
});
