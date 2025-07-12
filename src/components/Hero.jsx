import { useEffect, useState } from "react";

function Hero() {
    const images = [
        {src: 'hero_image.jpg', alt: 'boh'},
        {src: 'hero_image_2.jpg', alt: 'boh'},
        {src: 'hero_image_3.jpg', alt: 'boh'},
        {src: 'hero_image_4.jpg', alt: 'boh'},
    ]

    const [imgActive, setImgActive] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setImgActive(prev => (prev + 1) % images.length)
        }, 3000);

        return () => clearInterval(interval)
    }, [])

     return(
        <section id="hero">
            <div className="container">
                <div className="carousel-images" data-aos="zoom-in">
                    {images.map((img, index) => (
                        <img key={index} src={`/images/${img.src}`} alt={img.alt} className={index === imgActive ? 'active' : ''}/>
                    ))}
                </div>

                <div className="hero-info">
                    <h1 data-aos="fade-up">Tradizione e Qualità dal 1939</h1>
                    <p data-aos="fade-up" data-aos-delay="200">Le migliori carni selezionate per la tua tavola, ogni giorno fresche e garantite.</p>
                    <a href="#prodotti" className="btn" data-aos="zoom-in" data-aos-delay="200">Scopri i Nostri Prodotti</a>
                </div>
            </div>
        </section>
     )
}

export default Hero