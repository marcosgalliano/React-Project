const Item = ({id, title, stock, price, pictureUrl}) => {
    return (
        <section className="section_producto">
            <h1>
                {title}
            </h1>
            <img src={pictureUrl}/>
        </section>
    )
}

export default Item