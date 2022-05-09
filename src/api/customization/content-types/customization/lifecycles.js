module.exports = {
  async beforeCreate(event) {
    if (!event.params.data.client) {
      throw new Error("Client must be selected");
    }

    const font = event.params.data.font;
    const validFontKeys = ["size", "color"];
    const validFont = Object.keys(font).every((key) => {
      if (validFontKeys.includes(key)) {
        if (key === "size") return typeof font[key] === "number";
        return typeof font[key] === "string";
      }
      return false;
    });

    if (!validFont) throw new Error("Invalid font structure");

    const theme = event.params.data.theme;
    const validThemeKeys = [
      "background",
      "foreground",
      "primary",
      "highlight",
      "highlight_secondary",
      "secondary",
    ];
    const validTheme = Object.keys(theme).every((key) => {
      if (validThemeKeys.includes(key)) {
        return typeof theme[key] === "string";
      }
      return false;
    });

    if (!validTheme) throw new Error("Invalid theme structure");
  },
  // async beforeUpdate(event) {
  //   console.log(event);
  // },
};
