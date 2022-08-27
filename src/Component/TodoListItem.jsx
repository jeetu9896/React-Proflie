import { Listitem } from "./Listitem"

export const TodoListItem = ({data}) => {

    return <>
    {
        data.map((item) =>(
            // console.log(item)
            <Listitem  item={item}/>
        ))
    }
    </>
}