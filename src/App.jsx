// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './singer'
import BookStore from './BookStore'

function App() {
  const actors=['sakib','soriful','jasim','rubel','salman']


  const books=[
    {id:1,name:'physics',price:100},
    {id:2,name:'chemistry',price:200},
    {id:3,name:'biology',price:300},
    {id:4,name:'math',price:400},
  ]

  const singers=[
    {id:1, name:'dr.Mahfuzur', age:68},
    {id:2,name:'Eva Rahman', age:38},
    {id:3,name:'Shurov roy', age:58},
    {id:4,name:'Prithom', age:28},
  ]
  return (
    <>
      <h1>Vite + React</h1>
       
      <BookStore books={books}> </BookStore>


      {
        singers.map(singer=><Singer singer={singer}></Singer>)
      }
      <Actor name={'rong'}></Actor>
      {
        actors.map(actor=><Actor name={actor}></Actor>)
      }
      {/* <Todo task="learn react" isDone={true}></Todo>
      <Todo task="core concepts" isDone={false} ></Todo>
      <Todo task="try JSX" isDone={true}></Todo> */}
      {/* <Device name="laptop" price="55"></Device>
      <Device name="mobile" price="18"></Device>
      <Device name="watch" price="5"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade={12} score="85"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}


function Device(props){
  // console.log(props);
  return <h2>
    This device :{props.name} price:{props.price}
  </h2>
}

function Person(){
  const age=23
  const money=80
  const person={name:'sakib',age:12}
  return <h3>I am a {person.name} with age {age+money}</h3>
}

const {grade,score} ={grade:"7", score:"99"}
function Student({grade=1,score=0}){
  console.log(grade,score);
  return (
  <div className='student'>
    <h3>this is a student</h3>
    <p>Class:{grade}</p>
    <p>Score:{score}</p>
  </div>
  )
}


function Developer(){
  const developerStyle={
    margin:'20px',
    padding:'20px',
    border:'2px solid purple',
    borderRadius:'10px'
  }
  return (
    <div style={developerStyle}>
      <h5>devo devo</h5>
      <p>Coding :</p>
    </div>
  )
}
export default App
