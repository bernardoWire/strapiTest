module.exports = {
  async afterUpdate(event) {
    const { result, params } = event;

    await strapi.plugins["email"].services.email.send({
      to: "bernardo.moya@wirewheel.io",
      from: "bernardo.moya@wirewheel.io",
      subject: "Use strapi email provider successfully",
      text: "Hello world!",
      html: "Hello world!",
    });

    // do something to the result;
  },
};
