const Productoss = (props) => {
    return(
        <>
        <div className="container_producto">
            <div className="imagen">
                <img src={props.imagen} className="img"/>
            </div>
            <div className="texto">
            <h1 className="h1_nombre">
                {props.nombre}
            </h1>
            <h3>
                {props.precio}
            </h3>
            <p>
                {props.description}
            </p>
            </div>
        </div>
        </>
    )
}

export default Productoss