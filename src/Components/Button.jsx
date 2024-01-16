// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function Button(props) {

  return (
    // eslint-disable-next-line no-undef
    <button onClick={() => props.deleteMsg(event, msgId)}>Delete</button>
  )
}

export default Button;