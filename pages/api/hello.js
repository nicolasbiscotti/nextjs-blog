export default function handler(req, res) {
  res
    .status(200)
    .json({ massage: `Hello ${req.body.name} ${req.body.lastName}` });
}
