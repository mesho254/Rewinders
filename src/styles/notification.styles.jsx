
import styled from "styled-components";

export const NotificationIcon=styled.div`
position: relative;
cursor: pointer;
top: 2%;
left: 8000%;

@media only screen and (max-width:600px){
  position: relative;
  left: fit-screen;
}
`
export const UnreadCount =styled.span`
position: absolute;
top: -5px;
right: -5px;
background: red;
color: white;
padding: 2px 5px;
border-radius: 50%;
font-size: 12px;
`

export const NotificationList = styled.div`
    position: absolute;
    top: 50px;
    left: 0;
    width: 300px;
    background: white;
    border: 1px solid #ccc;
    box-shadow: 2px 2px 8px #ccc;
    padding: 10px;
    z-index: 1;
    display:${props => props.clicked ? 'block' : 'none' };
   
`
export const Notification = styled.div`
padding: 10px;
border-bottom: 1px solid #ccc;
margin-bottom: 10px;


`

export const NotificationUnread = styled.div`
background: #f9f9f9;
`
export const NotificationP =styled.p`
margin: 0;
`
export const NotificationMessage =styled.p`
font-size: 18px;
`

export const NotificationTime = styled.p`
font-size: 14px;
  color: #555;
`
export const MarkAsRead =styled.button`
background: #555;
color: white;
border: none;
border-radius: 4px;
padding: 4px 8px;
cursor: pointer;

&:hover{
  background: #333;
}
`


