import React from 'react'
import styled from 'styled-components'
import Form from './Form';
import StepsContainer from './StepsContainer';
import { StyledLogo } from './StyledLogo';
import { StyledMainView } from './StyledMainView'

const Standard_cnt = styled.div`
    width: 1080px;
    display: flex;
    align-elements: center;
    justify-content: space-between;
`
const ChatIcon = styled.img`
    width: 90px;
    height: 90px;
    position: absolute;
    bottom: 10px;
    right: 50px;
`

function MainView() {
  return (
    <StyledMainView>
        <Standard_cnt>
            <div>
                {/*Logo Rebill */}
                <StyledLogo src="https://rebill.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fecf7d8a0-3173-4458-a7ed-84cea0357db7%2FUntitled.png?id=d9b6a80c-4834-474b-a894-23261d7890ca&table=block&spaceId=2a97411f-39ec-4af0-b17b-04538c236891&width=600&userId=&cache=v2" alt="Rebill logo" />
                <h1 style={{"fontSize": "2.2em", "lineHeight":"36px", "color": "#033046"}}>
                    Go global, <br/> 
                    scaling locally
                </h1>
                {/* Steps section */}
                <StepsContainer />
            </div>
            <div>
                <Form />
            </div>
            
        </Standard_cnt>
        <ChatIcon src="https://rebill.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F44631036-32cc-4aba-bcfd-72112ac5b632%2FUntitled.png?id=5f37776f-2678-4739-9756-1ccd6c610fef&table=block&spaceId=2a97411f-39ec-4af0-b17b-04538c236891&width=460&userId=&cache=v2" alt="chat icon" />
    </StyledMainView>
  );
}

export default MainView