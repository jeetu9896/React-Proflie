
export const Listitem = ({item}) =>{
    // console.log(id,status,title)
    // console.log(item)
    return <>
    {
        item.status?<h1 style={{color:"green"}} key={item.id}>{item.title}</h1> : <h1  style={{color:"red"}}>{item.title}</h1>

    }
    </>

}