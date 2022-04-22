import React from 'react'
import chevron from '../../assets/chevron-down-icon.svg'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SortIcon = styled.img`
    cursor: pointer;
    width: 24px;
    ${(props) => props.$ascendant && 'transform: rotate(180deg);'}
`

/**
 * Sort column component
 * @param {Object} props
 * @returns
 */

function Sort({ type, array, attribute, setListSorted }) {
    const handleClick = () => {
        setListSorted(
            array.slice().sort((a, b) => {
                if (attribute === 'startDate' || attribute === 'birthDate') {
                    const yearA = a[attribute].toLowerCase().split('/')[2]
                    const yearB = b[attribute].toLowerCase().split('/')[2]
                    const monthA = a[attribute].toLowerCase().split('/')[1]
                    const monthB = b[attribute].toLowerCase().split('/')[1]
                    const dayA = a[attribute].toLowerCase().split('/')[0]
                    const dayB = b[attribute].toLowerCase().split('/')[0]

                    if (yearA > yearB) return type === 'ascendant' ? 1 : -1
                    else if (yearA < yearB) return type === 'ascendant' ? -1 : 1
                    else {
                        if (monthA > monthB)
                            return type === 'ascendant' ? 1 : -1
                        else if (monthA < monthB)
                            return type === 'ascendant' ? -1 : 1
                        else {
                            if (dayA > dayB)
                                return type === 'ascendant' ? 1 : -1
                            else if (dayA < dayB)
                                return type === 'ascendant' ? -1 : 1
                            else return 0
                        }
                    }
                } else {
                    if (a[attribute].toLowerCase() > b[attribute].toLowerCase())
                        return type === 'ascendant' ? 1 : -1
                    else if (
                        a[attribute].toLowerCase() < b[attribute].toLowerCase()
                    )
                        return type === 'ascendant' ? -1 : 1
                    else {
                        return 0
                    }
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
