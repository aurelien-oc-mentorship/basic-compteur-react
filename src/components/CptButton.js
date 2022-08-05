export default function CptButton(props){
    const handleClick = () => {
        if(props.action === '+') {
            props.set(oldCompteur => {
                return oldCompteur + 1
            })
        }else{
            props.set(oldCompteur => {
                return oldCompteur - 1
            })
        }
    }
    return (
        <button onClick={handleClick}>{props.content}</button>
    )
}
