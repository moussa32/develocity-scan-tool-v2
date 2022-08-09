export function Placeholder({styling}){
    let stylingdata={
        width:styling.width,
        height:styling.height,
        marginTop:styling.padding,
        marginRight:styling.marginRight,
        borderRadius:styling.borderRadius,
        marginLeft:styling.marginLeft
    }
    return(
        <>
            <div className="placeholder-glow">
                <p className="placeholder bg-secondary" style={stylingdata}></p>
            </div>
        </>
    )
}