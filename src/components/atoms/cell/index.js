import styled from 'styled-components'
import PropTypes from 'prop-types';


const colors = {
  default: 'inherit',
  blue: 'blue',
  red: 'red',
}

export const Cell = styled.div`
  padding: 5px;
  border: 1px solid #fff;
  cursor: ${p => (p.single ? 'default' : 'pointer')};
  background: #f3f3f3;
  position: relative;
  width: 55px;
  text-align: center;
  font-size: 13px;
  height: 30px;
  color: ${p => colors[p.mode]}
  
  &:hover {
    border-color: ${p => (p.single ? '#fff' : '#000')}
  }
`

Cell.propTypes = {
  single: PropTypes.bool,
  mode: PropTypes.oneOf(['default', 'blue', 'red']),
}

Cell.defaultProps = {
  single: false,
  mode: 'default',
}
