import React from 'react'
import chevron from '../../assets/chevron-down-icon.svg'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SortIcon = styled.img`
    cursor: pointer;
    ${(props) => props.$ascendant && 'transform: rotate(180deg);'}
`

/**
 * Sort column component
 * @param {Object} props
 * @returns
 */

function Sort({ type, array, attribute, setListSorted }) {
    const handleClick = () => {
        type === 'ascendant'
            ? setListSorted(
                  array.slice().sort((a, b) => {
                      if (
                          a[attribute].toLowerCase() >
                          b[attribute].toLowerCase()
                      )
                          return 1
                      else if (
                          a[attribute].toLowerCase() <
                          b[attribute].toLowerCase()
                      )
                          return -1
                      else {
                          return 0
                      }
                  })
              )
            : setListSorted(
                  array.slice().sort((a, b) => {
                      if (
                          a[attribute].toLowerCase() >
                          b[attribute].toLowerCase()
                      )
                          return -1
                      else if (
                          a[attribute].toLowerCase() <
                          b[attribute].toLowerCase()
                      )
                          return 1
                      else {
                          return 0
                      }
                  })
              )
    }
    return (
        <SortIcon
            src={chevron}
            alt=""
            onClick={handleClick}
            $ascendant={type === 'ascendant' ? true : false}
        />
    )
}

Sort.propTypes = {
    type: PropTypes.string,
    array: PropTypes.array,
    attribute: PropTypes.string,
    setListSorted: PropTypes.func,
}

Sort.defaultProps = {}

export default Sort
