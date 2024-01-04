import React, { useState } from 'react'
 import "./table.css"

export default function Table() {
    let [array,setArray]=useState([])
    let [inputdata,setInputdata]=useState({id:"",userid:"",name:"",mail:"",number:"",address:""})
    let [index,setIndex]=useState()
    let [bolin,setBolin]=useState(false)
    let {id,userid,name,mail,number,address}=inputdata;




    function data(e){
        setInputdata({...inputdata,[e.target.name]:e.target.value})
    }

 
    function addinputdata(){

        if(id==="" && userid==="" && name==="" && mail==="" && number==="" && address==="" ){
            alert("Enter Name and Roll no ")
        }
        else{
        setArray([...array,{id,userid,name,mail,number,address}])
        // console.log(inputdata)
        setInputdata({id:"",userid:"",name:"",mail:"",number:"",address:""})
    }
    }



// deleting row 
function deletedata(i){
    console.log(i,"this index row want to be delete")
    let total=[...array]
    total.splice(i,1)
    setArray(total)

}

// updatedata
function updatedata(i){

    let {name,number}=array[i]//this perticular index no row data shoud be update so we get this index no row data in name or number 
    setInputdata({id,userid,name,mail,number,address})
    setBolin(true)
    setIndex(i)

}

//know add data at perticular index means update it on that index
function updateinfo(){
    let total=[...array]
    total.splice(index,1,{id,userid,name,mail,number,address})
    setArray(total)
     setBolin(false)
     setInputdata({id:"",userid:"",name:"",mail:"",number:"",address:""})
}
  return (
    <div>
    <h1 className='text-center text-4xl font-medium my-10'>USER MANAGEMENT</h1>
          
            <input type="number" value={inputdata.id || ""} name='id'  placeholder='Enter id' onChange={data}  />
            <input type="number" value={inputdata.userid || ""} name='userid'  placeholder='Enter userid' onChange={data}  />
            <input type="text" value={inputdata.name || ""} name='name' autoComplete='off' placeholder='Enter Name' onChange={data}  />
            <input type="text" value={inputdata.mail || ""} name='mail' autoComplete='off' placeholder='Enter mail' onChange={data}  />
            <input type="number" value={inputdata.number || ""} name="number" placeholder='Enter Number' onChange={data} />
            <input type="" value={inputdata.address || ""} name='address' autoComplete='off' placeholder='Enter Address' onChange={data}  />
            <button onClick={!bolin?addinputdata:updateinfo}>{!bolin?`Add data`:`Update data`}</button>

            <br />

            <table border="1" className='border-4'>
                <tbody>
                    <tr>
                        <th>id</th>
                        <th>User ID</th>
                        <th>User Name</th>
                        <th>Email Id</th>
                        <th>Mobile Number</th>
                        <th>Address</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    
                {

array && array.map(
(item,i)=>{
    return(
        <tr key={i}>
            <td>{item.id}</td>
            <td>{item.userid}</td>
            <td>{item.name}</td>
            <td>{item.mail}</td>
            <td>{item.number}</td>
            <td>{item.address}</td>
            <td><button onClick={()=>updatedata(i)}>update</button></td>
            <td><button onClick={()=>deletedata(i)}>Delete</button></td>
        </tr>
    )
}
)

                }







                </tbody>
            </table>

    </div>
  )
}