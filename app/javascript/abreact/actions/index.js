// TODO: add and export your own actions

export function setLang(ip) {
  const payload = fetch(`http://api.ipstack.com/${ip}?access_key=49ceea9b1409ef674effff735b5bd&format=1`)
    .then(r=>r.json())
    .then(json => {return json.location.languages[0].code});
  return {
    type: "SET_LANG",
    payload: payload
  }
}
