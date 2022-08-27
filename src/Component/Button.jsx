
export const Button = ({handleage}) => {
    return <>
    <button onClick={() => handleage(1)} >Incarse Age</button>
    <button onClick={() => handleage(-1)} >Decrase Age</button>
    </>
}