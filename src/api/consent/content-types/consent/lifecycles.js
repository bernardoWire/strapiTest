module.exports = {
  async beforeCreate(event) {
    console.log(event);
    if (!event.params.data.client) {
      throw new Error("Client must be selected");
    }
  },
  // async beforeUpdate(event) {
  //   console.log(event);
  // },
};
