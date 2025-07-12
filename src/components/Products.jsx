function Products() {
    const products = [
        {image: '', title: 'Bistecche Scelte', description: 'Frollatura perfetta per un sapore intenso e una tenerezza unica.', delay: 200},
        {imgae: '', title: 'Salumi Artigianali', description: 'Produzione propria con ricette tradizionali e ingredienti genuini.', delay: 300},
        {imgae: '', title: 'Preparati Freschi', description: 'Salsicce, spiedini e arrosti pronti da cuocere, perfetti per la tua tavola.', delay: 400},
        {imgae: '', title: 'Carni Bianche', description: 'Pollo, tacchino e suino da allevamenti selezionati, per una carne leggera e saporita.', delay: 500},
    ]
    
    return(
        <section id="prodotti">
            <div className="container">
                <h2 data-aos="fade-up">I Nostri Prodotti</h2>
                <p className="intro-text" data-aos="fade-up" data-aos-delay="100">Un'ampia selezione di carni fresche, salumi e preparati artigianali per ogni occasione.</p>
                <div className="product-grid">
                    {products.map((product, index) => {
                        return(
                            <div key={index} className="product-item" data-aos="fade-up" data-aos-delay={product.delay}>
                                <img src={`/images/${product.image}`} alt={product.title} />
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Products