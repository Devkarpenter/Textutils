
import React,{useState} from 'react'

export default function About() {



  const [myStyle , setmystyle] = useState({
      color: 'white',
      backgroundColor: 'black',
  })

  const [btnText, setbtnText] = useState("Enable drak mode")

  const togglestyle= () => {
    if(myStyle.color == 'black'){
      setmystyle({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white',
      })
      setbtnText("Enable light mode")
    }
    else{
      setmystyle({
        color: 'black',
        backgroundColor: 'white',
        border: '1px solid black',
      }) 
      setbtnText("Enable dark mode")
    }
  }
    


  return (
      <div classNmae="container" style={myStyle}>
        <h1>about us</h1>
    <div classNmae="accordion-item">
      <h2 classNmae="accordion-header">
        <button classNmae="accordion-button"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne" classNmae="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div classNmae="accordion-body" style={myStyle}>
          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div classNmae="accordion-item">
      <h2 classNmae="accordion-header">
        <button classNmae="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Accordion Item #2
        </button>
      </h2>
      <div id="collapseTwo" classNmae="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div classNmae="accordion-body" style={myStyle}>
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div classNmae="accordion-item">
      <h2 classNmae="accordion-header">
        <button classNmae="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Accordion Item #3
        </button>
      </h2>
      <div id="collapseThree" classNmae="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div classNmae="accordion-body" style={myStyle}>
          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div classNmae="container my-2">
    <button onClick= {togglestyle} type="button" classNmae="btn btn-primary ">{btnText}</button>
    </div>
  </div>
  )
};
