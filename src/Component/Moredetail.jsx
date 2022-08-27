

export const Moredetail = ({ status ,handleDetails,handlehideDetails }) => {
    // console.log(status)
    return <>
        {status ?
            <div>
                <button onClick={handlehideDetails}>Show Details</button>
            </div>
            :
            <div>
            <button onClick={handleDetails}>Hide Details</button>
            <h1>Location : Sirsa</h1>
            <h1>Organisztion : Unthinkable</h1>
        </div>
            }
    </>
}
