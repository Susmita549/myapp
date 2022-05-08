import React from 'react'

const Form = () => {

    const[form,setForm]=React.useState("")
    const[name,setName]=React.useState()
    const handleClick=(e) => {
        e.preventDefault()
        setName(form)
    }
    const inputEvent=(e) =>{
        console.log(e.target.value)
        setForm(e.target.value)
    }
  return (
    <div>
        <form onSubmit={handleClick}>
        <h1>Hello {name}</h1>
        <input type="text" value={form} onChange={inputEvent}/>
        <input type="submit"/>
        </form>
    </div>
  )
}

export default Form