module.exports = {
  routes: [
    {
      // Path defined with a URL parameter
      method: "GET",
      path: "/sports/count",
      handler: "sport.count",
    },
  ],
};
