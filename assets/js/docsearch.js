import docsearch from '@docsearch/js';

var searchPlaceholder = document.getElementById('search-placeholder');

if (searchPlaceholder !== null) {
  searchPlaceholder.className = 'd-none';
}

docsearch({
  container: '#docsearch',
  appId: '6YP209XB51',
  indexName: 'netlify_d836a4f4-95a8-4205-8592-79dd339bee3e_master_all',
  apiKey: '6c5db5fe7b95a66bac9d52c18a63657a',
  debug: false,
});
