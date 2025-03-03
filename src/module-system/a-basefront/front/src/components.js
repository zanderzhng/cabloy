import combineSearch from './components/action/combineSearch.js';
// category
import categorySelect from './components/category/categorySelect.jsx';
// tag
import tagSelect from './components/tag/tagSelect.jsx';
// atom
import atomList from './components/atom/atomList.jsx';
import atomButton from './components/atom/atomButton.vue';
// listLayoutData
import listLayoutDataAdapter from './components/listLayoutData/adapter.jsx';
import listLayoutDataProviderAll from './components/listLayoutData/providerAll.jsx';
import listLayoutDataProviderContinuous from './components/listLayoutData/providerContinuous.jsx';
import listLayoutDataProviderPaged from './components/listLayoutData/providerPaged.jsx';
import listLayoutDataProviderTree from './components/listLayoutData/providerTree.jsx';
// tools
import developerTool from './components/tools/developerTool.js';

export default {
  combineSearch,
  // category
  categorySelect,
  // tag
  tagSelect,
  // atom
  atomList,
  atomButton,
  // layout
  listLayoutDataAdapter,
  listLayoutDataProviderAll,
  listLayoutDataProviderContinuous,
  listLayoutDataProviderPaged,
  listLayoutDataProviderTree,
  // developerTool
  developerTool,
};
