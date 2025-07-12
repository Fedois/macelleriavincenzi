import { useEffect, useState } from "react";

function Contacts() {
    const day = new Date().getDay() - 1
    const [locations, setLocations] = useState([
            {
            name: 'Soliera',
            address: 'Piazza Fratelli Sassi, 29, 41019 Soliera MO',
            phone: '059 850249',
            hours: [
            'Lunedì: 7:15 - 12',
            'Martedì: 7:15 - 13',
            'Mercoledì: 7:15 - 13',
            'Giovedì: 7:15 - 13',
            'Venerdì: 07:15 - 13:00 / 17:00 - 19:30',
            'Sabato: 7:15 - 13',
            'Domenica: Closed',
            ],
            mapUrl: 'https://www.google.it/maps/place/Piazza+Fratelli+Sassi,+29,+41019+Soliera+MO/@44.7387097,10.9223092,17z/data=!3m1!4b1!4m6!3m5!1s0x477fed0a1a7e5d81:0xdc3e30710e213bf6!8m2!3d44.7387059!4d10.9248841!16s%2Fg%2F11csjwyn9f?hl=it&entry=ttu',
            mapImage: 'map_1.png',
            delay: 100,
            listId: 'hours-soliera',
        },
        {
            name: 'Sozzigalli',
            address: 'Via Carpi Ravarino, 1953, 41019 Sozzigalli MO',
            phone: '059 563740',
            hours: [
            'Lunedì: Closed',
            'Martedì: 7:15 - 13',
            'Mercoledì: 7:15 - 13',
            'Giovedì: 7:15 - 13',
            'Venerdì: 7:15 - 13',
            'Sabato: 7:15 - 13',
            'Domenica: Closed',
            ],
            mapUrl: 'https://www.google.it/maps/place/Via+Carpi+Ravarino,+1953,+41019+Sozzigalli+MO/@44.7481739,10.9761797,17z/data=!3m1!4b1!4m6!3m5!1s0x477fec96e610c07b:0xcc06efd81988d77a!8m2!3d44.7481701!4d10.9787546!16s%2Fg%2F11c26kmb4g?hl=it&entry=ttu',
            mapImage: 'map_2.png',
            delay: 200,
            listId: 'hours-sozzigalli',
        },
    ]);

    useEffect(() => {
        const reordered = locations.map(loc => {
            let newArray = []
            newArray.push(loc.hours[day])

            let posIndex = (day === 6) ? 0 : day + 1
            while (posIndex !== day) {
                newArray.push(loc.hours[posIndex])
                posIndex = (posIndex + 1) % loc.hours.length;
            }

            return {
                ...loc,
                hours: newArray
            }
        })

        setLocations(reordered)
    }, [])

    return (
        <section id="contatti">
            <div className="container">
                <h2 data-aos="fade-right">Contattaci</h2>

                {locations.map((location, index) => (
                <div className="location-section" key={index}>
                    <div
                    className="location-info-block"
                    data-aos="fade-right"
                    data-aos-delay={location.delay}
                    >
                    <h3>Sede di {location.name}</h3>
                    <p>
                        <strong>Indirizzo:</strong> {location.address}
                    </p>
                    <p>
                        <strong>Telefono:</strong> {location.phone}
                    </p>
                    <p>
                        <strong>Orari apertura:</strong>
                    </p>
                    <ul id={location.listId}>
                        {location.hours.map((hour, i) => (
                            <li key={i} className={i === 0 ? 'today' : ''}>
                                {hour}
                            </li>
                        ))}
                    </ul>
                    </div>
                    <div
                    className="map-embed"
                    data-aos="zoom-in"
                    data-aos-delay={location.delay}
                    >
                    <a href={location.mapUrl} target="_blank" rel="noopener noreferrer">
                        <img src={'images/'+location.mapImage} alt={`Google Maps: ${location.address}`} />
                    </a>
                    </div>
                </div>
                ))}
            </div>
        </section>
  );
}

export default Contacts
