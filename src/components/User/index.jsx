import * as React from 'react'
import styled from 'styled-components'

import GridItem from '../GridItem'

export const Data = styled.div`
  margin: 5px 0 0 5px;
  padding-bottom: 5px;
  display: grid;
  grid-template-columns: 1fr 3fr 2fr 4fr;
  color: #212121;
`
export const DataLabel = styled.div`
  margin: 2px 0;
  font-weight: bold;
`
export const DataValue = styled.div`
  margin: 2px 0;
  word-break: break-all;
  :after {
    content: "\\00a0";
  }
`

export const User = (
  { index, id, name, username, email }) => {
  const url = `/user/${id}`
  return (!index)?(
     <>
      <GridItem>
          <Data>
              <DataLabel>ID</DataLabel>
              <DataLabel>Name</DataLabel>
              <DataLabel>Email</DataLabel>
              <DataLabel>Username</DataLabel>
          </Data>
      </GridItem>
    <GridItem>
      <Data>
        <DataValue><a href={url}>{id}</a></DataValue>
        <DataValue>{name}</DataValue>
        <DataValue>{username}</DataValue>
        <DataValue>{email}</DataValue>
      </Data>
    </GridItem>
   </>
  ):(
    <GridItem>
        <Data>
            <DataValue><a href={url}>{id}</a></DataValue>
            <DataValue>{name}</DataValue>
            <DataValue>{username}</DataValue>
            <DataValue>{email}</DataValue>
        </Data>
    </GridItem>
  )
}

export default User
