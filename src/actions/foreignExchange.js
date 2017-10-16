
export function getAccountStep(step) {
  return dispatch => {
    dispatch({ type: 'GETACCOUNT_STEP', step },()=>{alert(33)})
  }
}
