import React, { useState } from 'react';
import EventItem from './EventItem';
import styled from 'styled-components';


const StyledWrapperEventList = styled.div`
  height: 100%;
  padding: 100px 200px 50px 100px;
  box-sizing: border-box;

`

const StyledEventList = styled.div`
  display: grid;
  padding: 20px;
  padding-right: 5px;
  box-sizing: border-box;
  border-collapse: collapse;
  height: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  gap: 20px;
  
  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 4px;
    background-color: #dedede;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #2185fb;
    border-radius: 9em;
  }
`

const EventsList = ({ users, events, togoEvents, likedEvents, changeStatusTogoEvent, changeIsLikedStatus }) => {
  return (
    <StyledWrapperEventList>
      <StyledEventList>
          {events.map(eventData => 
            <EventItem 
              user={users.filter(user => user.id === eventData.author)}
              changeIsLikedStatus={changeIsLikedStatus} 
              changeStatusTogoEvent={changeStatusTogoEvent} 
              togoEvents={togoEvents} 
              likedEvents={likedEvents} 
              eventData={eventData} 
              key={eventData.id}
            />
            )
          }
      </StyledEventList>
    </StyledWrapperEventList>
  )
}

export default EventsList;
