export default function(state = null, action) {
  switch(action.type){
    case "SET_LANG":
    return action.payload.location.languages[0].code;
    default:
      return state
 }
}
