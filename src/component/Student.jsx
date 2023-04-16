import React, {useRef, useState } from "react";
import './student.css'
export function Student() {
  const list = [
    {
      id : 1,
      name : 'Genos',
      email : 'Genos@gmail.com',
      number : '8549621735'
    },
    {
      id : 2,
      name : 'Portgas D. Ace',
      email : 'PortgasDAce@gmail.com',
      number : '9651253547'
    },
    {
      id : 3,
      name : 'Naruto Uzumaki',
      email : 'NarutoUzumaki@gmail.com',
      number : '7465544367'      
    }
  ]


  const[lists, setList] = useState(list)

  const[update,setUpdate] = useState(-1)

  return (
    <div className="crud">
      
      <div>
      <h1>Student detail</h1>
        <Addlist  
        setList={setList} />
      <form onSubmit={handleSumbit}>
      <table>
        {
          lists.map((element) => (
            update === element.id ? <EditList element={element}
            lists = {lists}
            setList={setList}
            /> :
            <tr>
              <td>{element.name}</td>
              <td>{element.email}</td>
              <td>{element.number}</td>
              <td>

                <button 
                className="edit" 
                onClick={() => handleEdit(element.id)}>
                  Edit
                </button>
                
                <button 
                className="delete" 
                type="button" 
                onClick={() => handleDelete(element.id)}>
                  Delete
                </button>
              
              </td>
            
            </tr>
          ))
        }
      </table>
      </form>
      </div>
    </div>
  )

  function handleEdit(id){
    setUpdate(id)
  }

function handleDelete(id){
 const newlist =lists.filter((li) => li.id !== id)
 setList(newlist)
}


function handleSumbit(event){
  event.preventDefault()
  const name = event.target.elements.name.value
  const email = event.target.elements.email.value
  const number = event.target.elements.number.value
  const newlist = lists.map((li) => (
    li.id === update ? {...li, name:name, email:email, number: number}: li
  ))
  setList(newlist)
  setUpdate(-1)

}

}


function EditList({element, lists, setList}){

  function handleInputname(event){
    
    const value =  event.target.value;
    const newlist = lists.map((li) => (
      li.id === element.id ? {...li, name:value}: li
    ))
    setList(newlist)
  }
  function handleInputemail(event){
    
    const value =  event.target.value;
    const newlist = lists.map((li) => (
      li.id === element.id ? {...li, email:value}: li
    ))
    setList(newlist)
  }
  function handleInputnumber(event){
    
    const value =  event.target.value;
    const newlist = lists.map((li) => (
      li.id === element.id ? {...li, number:value}: li
    ))
    setList(newlist)
  }



  return(
    <tr>
      <td>
        <input type="text"  onChange={handleInputname} name="name" value={element.name}/>
      </td>
      <td>
        <input type="email" onChange={handleInputemail} name="email"  value={element.email}/>
      </td>
      <td>
        <input type="number" onChange={handleInputnumber} name="number" value={element.number}/>
      </td>
      <td>
        <button type="submit">Update</button>
      </td>
    </tr>
  )
}


function Addlist({setList}){

  const nameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();


  function handleSubmit(event){

    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const number = event.target.elements.number.value;
    const newlist = {
      id : 4,
      name,
      email,
      number
    }

    setList((prevList)=>{
      return prevList.concat(newlist);
    })
    nameRef.current.value = ""
    emailRef.current.value =""
    numberRef.current.value =""
  }

  return(
    <form className="addformclass" onSubmit={handleSubmit}>
      <input type="text" name = 'name' placeholder="Enter the name" ref ={nameRef}/>
      <input type="email" name = 'email' placeholder="abc@gmail.com" ref ={emailRef}/>
      <input type="number" name = 'number' placeholder="Phone Number" ref ={numberRef}/>
      <button type="submit">Submit</button>
    </form>
  )
}
