import React from 'react'
import PropTypes from 'prop-types'

const highlightStyle = {
  color: '#3b7336',
  textDecoration: 'underline',
  fontWeight: 'bold',
}

function createElements(text) {
  if (typeof text === 'string') {
    return text
  } else {
    return text.map(
      (entry, index) => (
        typeof entry === 'string' || !entry.highlight
          ? entry
          : <span key={index} style={highlightStyle}>{entry.text}</span>
      )
    )
  }
}

const SpanWithHighlights = ({
  className = '',
  style = {},
  text,
}) => (
  <span
    className={className}
    style={style}
  >
    {createElements(text)}
  </span>
)
SpanWithHighlights.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
}

export default SpanWithHighlights
