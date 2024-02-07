import React from 'react'
import { ACTIONS } from '../App'

function Operation({ dispatch, operation }) {
  return (
    <div className='operation'>
            <button className='btn' onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}>
                {operation}
            </button>
    </div>
  )
}

export default Operation