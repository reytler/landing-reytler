export function Text({text}:{text:string}){
    return (
        <div style={{
            display:'flex',
            justifyContent:'center'
        }}>
            <p style={{
                maxWidth:'600px',
                textAlign:'justify',
                fontSize:'18px',
                lineHeight:'1.5em',
                padding:'15px',
            }}>
                {text}
            </p>
        </div>
    )
}