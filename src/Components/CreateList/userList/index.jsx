import '../../../App.css'
import React, {useState} from 'react'

function UserList ({users}) {   
  
  const[rel, setRel]=useState([])
  const[clicked, setClicked] = useState('')
  
  const ClickElem = (elem) =>{
    if(clicked===elem.id){
      setRel([])
      setClicked('')
      return
    }
    setRel(elem.relations)
    setClicked(elem.id)
  }

  return(       
    <div className='App'>            
      {users.map((item)=>(
        <div key={item.id} 
        onClick={()=>ClickElem(item)}
        className={
          rel.includes(item.id)
                ? 'fans Block'
                : clicked === item.id
                ? 'active Block'
                : 'Block'
        }>
          {item.content}
        </div>                                          
      ))}
            
    </div>
  )
}
export default UserList