export function index(req, res) {
  res.render("index", { title: "Home" });
}

export function error() {
  throw new Error("Error test: this error is a test!");
}
