function Reviews() {
    const reviewsData = [
        {name: 'Lucia', description: 'Carne sempre eccellente. Se si vuol mangiare carne buona questo è il posto giusto', stars: 5, delay: 200},
        {name: 'Manuela', description: 'Carne buonissima e gentilezza. Assortimento e se si prenota si può trovare qualsiasi tipo di carne.', stars: 5, delay: 300},
        {name: 'Federico', description: "Sono anni che mi servo da loro e non deludono mai. La carne è sempre tenera e saporita. Consigliatissimo per chi cerca l'eccellenza.", stars: 5, delay: 400},
    ]

    return(
        <section id="dicono-di-noi">
        <div className="container">
            <h2 data-aos="zoom-in">Dicono di Noi</h2>
            <p className="intro-text" data-aos="fade-up" data-aos-delay="100">La soddisfazione dei nostri clienti è la nostra più grande ricompensa. Leggi alcune delle loro esperienze.</p>
            <div className="reviews-grid">
                {reviewsData.map((rew, index) => {
                    return (
                        <div key={index} className="review-item" data-aos="fade-up" data-aos-delay={rew.delay}>
                            <p className="review-text"><q>{rew.description}</q></p>
                            <p className="review-author">- {rew.name}</p>
                            <div className="stars">{'★'.repeat(rew.stars)}</div>
                        </div>
                    )
                })}
            </div>
            <p className="review-cta" data-aos="fade-up" data-aos-delay="400">
                Vuoi lasciare la tua recensione? 
                <br /><a href="https://www.google.com/search?q=Fratelli%20Vincenzi%20Fu%20Leo%20Di%20Vincenzi%20Aldo%20-%20Massimo%20-%20Francesco%20Sas%20Recensioni&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDQ0sLAwNDA1NLA0NTYxNDUysdjAyPiK0c-tKLEkNScnUyEsMy85Na8qU8GtVMEnNV_BBUnIMSclX0FXwTexuDgzF8QC6gJKFSfnKwQnFisEpQKVFWfm52UuYqWygQABmGr9vQAAAA&rldimm=11108810510953415248&tbm=lcl&cs=1&hl=it&sa=X&ved=0CBwQ9fQKKABqFwoTCOjuhdi_so4DFQAAAAAdAAAAABAG&biw=1920&bih=993&dpr=1#lkt=LocalPoiReviews">
                    Clicca qui
                </a>
            </p>
        </div>
    </section>
    )
}

export default Reviews