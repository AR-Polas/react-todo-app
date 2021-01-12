import React from 'react';
import { useState } from 'react';
import Items from './Items';
import './Todo.css'

const Todo = () => {
    const [item,setItem] = useState('')
    const [value,setValue] = useState([])
    const inputItem = (event) => {
        const newItem = event.target.value;
        setItem(newItem)
    }
    const eventHandle = () => {
        if(item == ""){
            alert('Please write your items name')
        }
        else{
            setValue((itemval) => {
                return [...itemval,item];
      
        });
    }
        setItem('');
    }
    const removeItems = (id) =>{

        setValue((itemval) =>{
            return itemval.filter((arrElem,index) => {
                return index !== id;
            })
        })
    }
    return (
       <div className="row d-flex justify-content-center text-center " style={{height:'500px'}} >
            <div className=" col-10 col-sm-6 col-md-4 col-lg-4  mt-5 w-100 bg-success">
            <h2 className="bg-primary px-5 text-white">React Todo List</h2>
            <br/>
            <input onChange={inputItem} type="text" placeholder="Add a Items" value={item}/>
            <button onClick={eventHandle} className="btn btn-primary ml-2 my-3">+</button>
            <br/>
            <ol style={{listStyle:'none',float:'left'}}>
                {
                    value.map((data,index) =>{
                        return <Items data={data} removeItems={removeItems} key={index} id={index} />
                    })
                }
            </ol>
            </div>
       </div>
    );
};

export default Todo;