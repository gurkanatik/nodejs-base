export const notFoundMiddleware = (req, res, _next) => {
  res.status(404).render("404", { title: "Page Not Found" });
};
