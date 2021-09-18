import validateItem from './validateItem.jsx';
export default {
  meta: {
    global: true,
  },
  name: 'eb-validate',
  components: {
    validateItem,
  },
  render() {
    // slot
    if (!this.auto) {
      return <div>{this.$scopedSlots.default()}</div>;
    }
    // schema
    if (this.auto && this.ready) {
      // custom
      if (this.custom) {
        const context = {
          validate: this,
          parcel: this.parcel,
          readOnly: this.readOnly,
          onSubmit: this.onSubmit,
        };
        return (
          <eb-component
            module={this.custom.module}
            name={this.custom.name}
            options={{
              props: {
                context,
              },
            }}
          ></eb-component>
        );
      }
      // auto
      return this.renderSchema();
    }
    return <div></div>;
  },
  props: {
    host: {
      type: Object,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    auto: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
    },
    params: {
      type: Object, // module,validator,schema
    },
    meta: {
      type: Object,
    },
    onPerform: {
      type: Function,
    },
    dataPathRoot: {
      type: String,
      default: '/',
    },
    errors: {
      type: Array,
    },
    searchStates: {
      type: Object,
    },
  },
  data() {
    return {
      schema: null,
      verrors: null,
      vSearchStates: null,
      custom: null,
      schemaModuleName: null,
      renderModuleName: null,
      dataCopy: null,
    };
  },
  computed: {
    ready() {
      return this.data && this.dataCopy && this.schema;
    },
    parcel() {
      if (!this.ready) return null;
      return {
        data: this.dataCopy,
        dataSrc: this.data,
        schema: this.schema,
        properties: this.schema.properties,
        pathParent: '',
      };
    },
  },
  watch: {
    params() {
      this.schemaMaybeChanged();
    },
    'meta.schema': function () {
      this.schemaMaybeChanged();
    },
    data() {
      this.initData();
    },
    parcel(newValue) {
      this.$emit('parcelChanged', newValue);
    },
    errors(newValue) {
      this.verrors = newValue;
    },
    searchStates(newValue) {
      this.vSearchStates = newValue;
    },
  },
  created() {
    this.initData();
    this.vSearchStates = this.searchStates;
  },
  mounted() {
    this.fetchSchema();
  },
  methods: {
    schemaMaybeChanged() {
      this.custom = null;
      this.$nextTick(() => {
        this.fetchSchema();
      });
    },
    initData() {
      this.dataCopy = this.$meta.util.extend({}, this.data);
    },
    reset() {
      this.verrors = null;
      this.$emit('errorsReset');
    },
    async perform(event, context) {
      if (this.auto && !this.ready) return null;
      if (!this.onPerform) return null;
      try {
        const data = await this.onPerform(event, context);
        this.reset();
        return data;
      } catch (err) {
        if (err) {
          if (err.code !== 422) throw err;
          this.verrors = err.message;
          this.$emit('errorsSet', this.verrors);
          const _err = new Error(this.$text('Data Validation Error'));
          _err.code = -422;
          throw _err;
        }
      }
    },
    getError(dataPath) {
      if (!this.verrors || !dataPath) return '';
      dataPath = this.adjustDataPath(dataPath);
      const error = this.verrors.find(item => {
        if (dataPath.charAt(dataPath.length - 1) === '/') return item.dataPath.indexOf(dataPath) > -1;
        return item.dataPath === dataPath;
      });
      return error ? error.message : '';
    },
    clearError(dataPath) {
      if (!this.verrors || !dataPath) return;
      dataPath = this.adjustDataPath(dataPath);
      while (true) {
        const index = this.verrors.findIndex(item => item.dataPath === dataPath);
        if (index > -1) {
          this.verrors.splice(index, 1);
        } else {
          break;
        }
      }
    },
    adjustDataPath(dataPath) {
      if (!dataPath) return dataPath;
      if (dataPath[0] !== '/') return this.dataPathRoot + dataPath;
      return dataPath;
    },
    fetchSchema() {
      if (this.meta && this.meta.schema) {
        this.schemaModuleName = this.meta.schema.module || this.$page.$module.name;
        this.$meta.module.use(this.schemaModuleName, () => {
          this.__schemaReady(this.meta.schema.schema, this.schemaModuleName);
        });
        return;
      }
      if (!this.params) return;
      const moduleName = this.params.module || this.$page.$module.name;
      this.schemaModuleName = moduleName;
      this.$meta.module.use(moduleName, () => {
        this.$api
          .post('/a/validation/validation/schema', {
            module: moduleName,
            validator: this.params.validator,
            schema: this.params.schema,
          })
          .then(data => {
            this.__schemaReady(data.schema, moduleName);
          });
      });
    },
    __schemaReady(schema, moduleMaybe) {
      const _componentName = schema.meta && schema.meta.custom && schema.meta.custom.component;
      if (!_componentName) {
        this.renderModuleName = moduleMaybe;
        this.__schemaReady2(schema);
        return;
      }
      // custom
      const moduleName = schema.meta.custom.module || moduleMaybe;
      this.renderModuleName = moduleName;
      this.$meta.module.use(moduleName, () => {
        this.custom = {
          module: moduleName,
          name: _componentName,
        };
        this.__schemaReady2(schema);
      });
    },
    __schemaReady2(schema) {
      this.schema = schema;
      if (this.errors) this.verrors = this.errors;
      // event
      this.$emit('schema:ready', this.schema);
      this.$emit('schemaReady', this.schema);
    },
    renderSchema() {
      return <validateItem parcel={this.parcel} dataKey={null} property={null} meta={null} root={true}></validateItem>;
    },
    onSubmit(event) {
      this.$emit('submit', event);
    },
  },
};
