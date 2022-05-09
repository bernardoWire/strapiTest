module.exports = {
  async beforeCreate(event) {
    event.params.data.name = event.params.data.name.toLowerCase();
  },
  async beforeUpdate(event) {
    const name = event.params.data.name;
    if (name) event.params.data.name = name.toLowerCase();
  },
};
