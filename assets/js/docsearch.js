import docsearch from '@docsearch/js';

var searchPlaceholder = document.getElementById('search-placeholder');

if (searchPlaceholder !== null) {
  searchPlaceholder.className = 'd-none';
}

docsearch({
  container: '#docsearch',
  appId: 'G8T010XTUJ',
  indexName: 'prod_db-blog',
  apiKey: 'd54380e2d56c2d40875475900ae9d1fe',
  debug: false,
});
