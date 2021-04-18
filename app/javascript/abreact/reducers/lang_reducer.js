export default function(state = null, action) {
  switch(action.type){
    case "SET_LANG":
    return action.payload;
    default:
      return state
 }
}
