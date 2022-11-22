import {useState, useReducer} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';


function reducer(state, action) {
    switch(action.type) {
        case 'first': 
         return {autoplay: !state.autoplay}
        case 'second': 
         return {autoplay: 200}
        case 'three': 
          return {autoplay: 300}
        default:
            throw new Error('error2131')
      }
}



const Slider = () => {
    const [slide, setSlide] = useState(0);
    const [autoplay, dispatch] = useReducer(reducer, false);

    console.log(Object.values(autoplay).join())

    function changeSlide(i) {
        setSlide(slide => slide + i);
    }

    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img style={{marginTop:'30px'}} className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {slide} <br/>{autoplay ? 'auto' : null} </div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type: 'first'})}>{autoplay ? '+' : '-'}</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type: 'second'})}>{Object.values(autoplay) == 200 ? '200' : '-'}</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => dispatch({type: 'three'})}>{Object.values(autoplay) == 300 ? '300' : '-'}</button>
                </div>
            </div>
        </Container>
    )
}

function App() {
    return (
        <Slider/>
    );
}

export default App;