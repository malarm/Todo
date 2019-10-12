import React from 'react';


function Todos ({todo,index,completetodo,removetodo,updateTodo}) {

    return (
        <div className ="collection-item" >
          <span> <input type="checkbox"  onClick={() => completetodo(index)}/></span> 
          
      <span  > <input className="update" type ="text" index={todo.index} value={todo.text} onChange={e =>updateTodo(e.target.value)} style={{textDecoration: todo.isCompleted ? 'line-through' : null}} />
      </span>
        <span className="remove"> 
           <button onClick={() => removetodo(index)} > x</button></span>
        
      </div>
       
   
    )
    }
    export default Todos  
/*const Todos = ({item,deletetodoca }) => {

    const todolist = item.length ? (
        item.map (todoca => {
            return(
                <div onClick ={ () => {deletetodoca(todoca.id)}} className="collection-item" key ={todoca.id}>
                    <span >{todoca.content} </span>    
                </div>
            )
        })
    ) : 
    (
        <p className="center">You have no todos left</p>
    )
    return (
        <div className ="collection">
            {todolist}
        </div>
    )
}
export default Todos*/