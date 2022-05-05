module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS", [
      "jBijbKslT7kBHV3T7JlIbg==",
      "hj+jI7vqaFSUQaA+e8/1bg==",
      "wxYxbGF6k1ZwLhYAnZGCyw==",
      "1WWIG3DEcIz5kCgaEtaqhA==",
    ]),
  },
});
