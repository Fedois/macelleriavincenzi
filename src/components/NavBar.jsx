function Header() {
    const links = [
        {href: '#home', name: 'Home'},
        {href: '#chi-siamo', name: 'Chi Siamo'},
        {href: '#prodotti', name: 'Prodotti'},
        {href: '#dicono-di-noi', name: 'Recensioni'},
        {href: '#contatti', name: 'Contatti'}
    ]

    return (
        <header>
            <div className="container" data-aos="fade-down">
                <div className="logo">
                    <img src="images/logo.png" alt="Logo Macelleria Vincenzi" />
                </div>
                <nav>
                    <ul>
                        {links.map((link, index) => (
                            <li key={index}><a href={link.href}>{link.name}</a></li> 
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header