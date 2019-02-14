import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types';


const fadeOut = keyframes`
  from {
    opacity: 1
  }
  to {
    opacity: .1
  }
`

export const FadeOut = styled.div`
  will-change: opacity;
  animation: ${fadeOut} ${p => p.duration}s;
`

FadeOut.propTypes = {
  duration: PropTypes.number,
}

FadeOut.defaultProps = {
  duration: 1,
}
