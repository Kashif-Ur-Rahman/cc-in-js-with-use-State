
import './App.css'
import StyledButton, { FancyButton } from './components/Button/Button'
import UseState from './components/UseState'
function App() {


  return (
    <div className='App'>
      {/* <button>Click me</button> */}
      <StyledButton>Styled Button</StyledButton>
      <div>
        <br />
      </div>
      <StyledButton variant='outline'>Styled Button</StyledButton>
      <div>
        <br />
      </div>
      <FancyButton>Fancy Button</FancyButton>
      <div>
        <br />
        <UseState />
      </div>
    </div>

  )
}

export default App
