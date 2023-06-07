import React from 'react';

function CalixInput(props) {
  return React.createElement("input", { type: "text", value: props.value, onChange: props.onChange });
}

export default CalixInput;