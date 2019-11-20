export default class SchemaCache {
  constructor() {
    this.schemaData = [];
  }

  getSchemaData() {
    return this.schemaData;
  }

  setSchemaData(schema) {
    this.schemaData = schema || [];
  }

  getOneSchema(className) {
    const schema = this.schemaData.find(cachedSchema => {
      return cachedSchema.className === className;
    });
    if (schema) {
      return Promise.resolve(schema);
    }
    return Promise.resolve(null);
  }

  clear() {
    this.schemaData = [];
    return Promise.resolve();
  }
}
