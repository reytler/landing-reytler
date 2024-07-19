export function Title({text}:{text:string}){
    return(
        <h2 style={{
            padding: "8px",
            margin:"10px",
            textAlign:'center',
        }}>
            {text}
        </h2>
    )
}