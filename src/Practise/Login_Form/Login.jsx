import React from 'react'

const Login = () => {

    const[form,setForm]=React.useState("")
    const[lname,setLname]=React.useState("")
    const[name,setName]=React.useState()
    const[lastname,setLastName]=React.useState()
    const handleClick=(e) => {
        e.preventDefault()
        setName(form)
    }
    const inputEvent=(e) =>{
        console.log(e.target.value)
        setForm(e.target.value)
    }
    
    const inputEvent1=(e) =>{
        console.log(e.target.value)
        setLname(e.target.value)
        setLastName(e.target.value)
    }
  return (
    <div>
        <form onSubmit={handleClick}>
        <h1>Hello {name}{lastname}</h1>
        <input type="text" value={form} onChange={inputEvent}/><br />
        <input type="text" value={lname} onChange={inputEvent1}/><br />
        <input type="submit"/>
        </form>
    </div>
  )
}

export default Login