function ChiSiamo() {
    return(
        <section id="chi-siamo">
            <div className="container">
                <h2 data-aos="fade-right">Chi Siamo</h2>
                <div className="content">
                    <div className="text-content" data-aos="fade-right" data-aos-delay="200">
                        <p>Alla <b>Macelleria Vincenzi</b>, la passione per la carne è una tradizione di famiglia che si tramanda da generazioni. Dal 1939, selezioniamo personalmente solo i migliori tagli, garantendo freschezza e sapore inconfondibili in ogni prodotto.</p>
                        <p>Ci impegniamo a offrire carni di origine controllata, provenienti da allevamenti che rispettano il benessere degli animali. Ogni giorno lavoriamo con cura artigianale per portare sulla tua tavola solo il meglio, dai tagli più pregiati ai preparati più sfiziosi.</p>
                    </div>
                    <div className="image-content" data-aos="fade-down" data-aos-delay="200">
                        <img src="images/chi_siamo_image.jpg" alt="Il Nostro Team al Lavoro" />
                    </div>
                </div>

                <div id="video-section" data-aos="fade-up" data-aos-delay="300">
                    <h2>Ascolta la Nostra Storia</h2>
                    <p className="intro-text">Un'intervista con i fondatori della Macelleria Vincenzi: passione, tradizione e segreti di famiglia.</p>
                    <div id="video-wrapper">
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChiSiamo