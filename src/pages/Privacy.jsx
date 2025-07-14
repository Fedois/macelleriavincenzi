import { Link } from "react-router-dom"

function Privacy() {
    return(
       <>
       <section id="privacy-content">
            <div className="container">
                <h1>Privacy Policy</h1>
                <p className="last-updated"><strong>Ultimo aggiornamento:</strong> 10 Luglio 2025</p>

                <p>Benvenuti sul sito web della Macelleria Vincenzi (macelleriavincenzi.netlify.app). La presente Privacy Policy descrive come gestiamo le tue informazioni quando visiti il nostro sito.</p>
                <p>La tua privacy è molto importante per noi. Ti invitiamo a leggere attentamente questa politica.</p>

                <h2>1. Titolare del Trattamento dei Dati</h2>
                <p>Il titolare del trattamento dei dati raccolti tramite questo sito web è:</p>
                <p><strong>Macelleria Vincenzi</strong><br />
                Piazza Fratelli Sassi, 29, 41019 Soliera MO<br />
                Via Carpi Ravarino, 1953, 41019 Sozzigalli MO<br />
                Telefono: 059 567087</p>

                <h2>2. Tipi di Dati Raccolti e Finalità del Trattamento</h2>
                <p>Il nostro sito web è una **vetrina informativa**. Non raccogliamo direttamente dati personali tramite moduli di contatto, registrazioni, commenti o acquisti.</p>
                <p>Tuttavia, alcuni dati tecnici vengono gestiti automaticamente:</p>
                <ul>
                    <li><strong>Dati di Navigazione</strong>: Quando visiti il nostro sito, i sistemi informatici e le procedure software che ne regolano il funzionamento acquisiscono alcuni dati la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet. Questi includono, ad esempio, gli indirizzi IP, il tipo di br />wser, la data e l'ora della richiesta, la pagina di provenienza e la pagina di uscita.
                        <ul>
                            <li><strong>Finalità</strong>: Questi dati vengono utilizzati per garantire il corretto funzionamento e la sicurezza del sito (legittimo interesse del Titolare) e per raccogliere informazioni statistiche anonime sull'uso del sito, per migliorarne la struttura e i contenuti. Questi dati non vengono utilizzati per identificare gli utenti.</li>
                        </ul>
                    </li>
                    <li><strong>Cookie</strong>: Il nostro sito utilizza solo **cookie tecnici**, essenziali per la navigazione e per il corretto funzionamento del sito stesso. Questi cookie non raccolgono dati personali e non richiedono il tuo consenso, in quanto strettamente necessari per fornirti il servizio richiesto.
                        <ul>
                            <li>Non utilizziamo cookie di profilazione o cookie di terze parti per tracciare il tuo comportamento online o mostrarti pubblicità personalizzate.</li>
                        </ul>
                    </li>
                </ul>

                <h2>3. Servizi di Terze Parti</h2>
                <p>Il nostro sito include collegamenti a piattaforme di social media (Facebook, Instagram). Quando clicchi su questi link, sarai reindirizzato ai rispettivi siti, che sono gestiti da terze parti e hanno le proprie privacy policy e condizioni d'uso. Non siamo responsabili per le pratiche di queste piattaforme esterne.</p>
                <p>Le mappe mostrate sul sito sono **immagini statiche (screenshot)** e non sono integrate con Google Maps in tempo reale. Pertanto, il sito non invia dati a Google tramite le mappe visualizzate e non imposta cookie di Google per questa funzionalità.</p>

                <h2>4. Condivisione dei Dati</h2>
                <p>I dati di navigazione e quelli derivanti dall'uso dei cookie tecnici potrebbero essere gestiti dal nostro fornitore di hosting (Netlify), che tratta tali dati per le finalità di funzionamento e sicurezza del servizio. Netlify agisce come responsabile del trattamento e garantisce il rispetto delle normative sulla privacy.</p>
                <p>I tuoi dati personali non vengono diffusi a terzi.</p>

                <h2>5. Trasferimento di Dati al di Fuori dell'UE</h2>
                <p>Poiché il nostro fornitore di hosting e alcune delle piattaforme di social media linkate operano a livello globale, i dati potrebbero essere trasferiti al di fuori dell'Unione Europea. Tali trasferimenti avvengono nel rispetto delle disposizioni previste dal Regolamento Generale sulla Protezione dei Dati (GDPR), garantendo un livello adeguato di protezione.</p>

                <h2>6. I Tuoi Diritti</h2>
                <p>In qualità di interessato, ai sensi del GDPR, hai il diritto di:</p>
                <ul>
                    <li><strong>Accedere</strong> ai tuoi dati personali.</li>
                    <li>Chiederne la <strong>rettifica</strong> se inesatti o incompleti.</li>
                    <li>Chiederne la <strong>cancellazione</strong> (diritto all'oblio).</li>
                    <li>Chiedere la <strong>limitazione</strong> del trattamento.</li>
                    <li><strong>Opporti</strong> al trattamento.</li>
                    <li>Richiedere la <strong>portabilità</strong> dei dati.</li>
                    <li>Proporre <strong>reclamo</strong> all'Autorità Garante per la Protezione dei Dati Personali (Piazza Venezia, 11 - 00187 Roma, Italia - <a href="https://www.gpdp.it" target="_blank" rel="noopener noreferrer">www.gpdp.it</a>).</li>
                </ul>
                <p>Per esercitare questi diritti, puoi contattare il Titolare del Trattamento all'indirizzo email o telefono sopra indicati.</p>

                <h2>7. Modifiche alla Presente Privacy Policy</h2>
                <p>La presente Privacy Policy potrà essere aggiornata in qualsiasi momento. La data dell'ultima modifica è indicata all'inizio del documento. Ti invitiamo a consultare periodicamente questa pagina per rimanere informato sulle nostre pratiche.</p>

                <p>Per informazioni più dettagliate sui cookie utilizzati da questo sito, ti invitiamo a consultare la nostra <Link to="/cookies">Cookie Policy</Link>.</p>
            </div>
        </section>
        </>
    )
}

export default Privacy