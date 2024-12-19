module.exports = {
  // Ensure this matches your project's routing setup
  routes: async (defineRoutes) => {
    return defineRoutes((route) => {
      route("/", "index.jsx");
      // Add other routes as necessary
    });
  },
};
