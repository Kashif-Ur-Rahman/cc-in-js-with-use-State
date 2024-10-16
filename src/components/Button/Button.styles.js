import styled from 'styled-components'

export const StyledButton = styled.button`
background-color: ${(props) =>
    props.variant === 'outline' ? '#ffff' : '#4caf50'
};
color: ${(props) =>
    props.variant === 'outline' ? '#4caf50' : '#ffff'
};
font-weight: bold;
padding: 15px 32px;
border: 2px solid #4caf50;
text-align: center;
font-size: 26px;
cursor: pointer;
transition: 0.5s all ease-out;

// pseudo classes.. active,focus, checked, before, after, first-line, first-letter etc.
&: hover{
background-color: ${(props) =>
    props.variant !== 'outline' ? '#ffff' : '#4caf50'};
    color: ${(props) => (props.variant !== 'outline' ? '#4caf50' : '#ffff')};
}
`

export const FancyButton = styled(StyledButton)`
background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
border: none;
`
