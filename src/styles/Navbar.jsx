   import styled from "styled-components";

  export const Navbar = styled.nav`
  height: 60px;
  background-color: #333;
  color: #fff;
  display: flex;
  align-items: center;

  @media only screen and (max-width:600px){
    height: 80px;
  }
  `
  export const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
 
  @media only screen and (max-width:600px){
    flex-direction: row;
    justify-content: space-between;
  }
  `
export const NavbarLog = styled.a`
font-size: 20px;
font-weight: bold;
color: #fff;
text-decoration: none;
margin-left: 20px;

@media only screen and (max-width:600px){
  margin-left: 0;
  position: relative;
  left: 70px;
}
`

export const NavbarMenu = styled.div`
    display: flex;
    align-items: center;

    @media only screen and (max-width:600px){
      display: none;
    }
`

export const NavbarItem = styled.a`
font-size: 16px;
margin-left: 20px;
cursor: pointer;
color: #fff;
text-decoration: none;

&:hover { 
  color: #ccc;
}
`

export const NavbarResponsive = styled.div`
display: none;
    margin-left: 2px;

    @media only screen and (max-width:600px){
      display: flex;
      align-items: center;
      position: relative;
      right: 350px;
    }
`

export const NavbarResponsiveIcon = styled.div`
font-size: 24px;
position: relative;
margin-right: 20px;
cursor: pointer;

@media only screen and (min-width:360px){
  position: relative;
  right: 500px;
}

`
  
export const NavbarResponsiveMenu = styled.div`
display: none;
position: absolute;
top: 56px;
left: -200px;
width:200px;
height:250px;
background-color: #fff;
border: 1px solid #ccc;
z-index: 1;

@media only screen and (max-width:600px){
  display:${props => props.clicked ? 'block' : 'none' };
  
}

`
export const NavbarResponsiveItem = styled.a`
display: block;
width: 100%;
padding: 12px 20px;
color: #333;
text-decoration: none;

&:hover{
  background-color: #f2f2f2;
}
`
export const Avatar = styled.div`
    position: relative;
    right: 50px;
    display: inline-block;
`
export const AvatarImage = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
cursor: pointer;
position: relative;
background-color: grey;
align-items: center;
right: -40px;
display: ${(props)=>props.display ? 'block' : 'none'};
`
export const DropdownMenu = styled.a`
display:${props => props.clicked ? 'block' : 'none' };
position: absolute;
top: 150%;
right: -90px;
height: fit-content;
list-style: none;
margin: 0;
width: fit-content;
padding: 10px 10px;
gap:30px;
background-color: #fff;
color: black;
border: 1px solid #ccc;
z-index: 1;
`
export const DropdownMenuLists= styled.a`
  display: block;
  padding: 15px 20px;
  cursor: pointer;

  &:hover{
    text-decoration: underline;
    cursor: pointer;
  }
`
export const AvatarUser = styled.div`
font-size: 20px;
position: relative;
left: 10px;
top: 6px;
`
export const LoginBtn = styled.button`
  background-color: #B2A6A6;
  padding: 10px 20px;
  border: none;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  `