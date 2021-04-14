// TODO: add and export your own actions

export function setLang(ip) {
  const payload = fetch(`http://api.ipstack.com/${ip}?access_key=49ceea9b1409ef0c0674effff735b5bd&format=1`)
    .then(r=>r.json());
  return {
    type: "SET_LANG",
    payload: payload
  }
}
