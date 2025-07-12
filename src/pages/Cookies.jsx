import { Link } from "react-router-dom"

function Cookies() {
    return(
        <>
        <section id="cookie-content">
            <div className="container">
                <h1>Cookie Policy</h1>
                <p className="last-updated"><strong>Ultimo aggiornamento:</strong> 10 Luglio 2025</p>

                <p>Questa Cookie Policy descrive come il sito web della Macelleria Vincenzi (macelleriavincenzi.netlify.app) utilizza i cookie.</p>

                <h2>Cosa sono i Cookie?</h2>
                <p>I cookie sono piccoli file di testo che vengono memorizzati sul tuo computer o dispositivo mobile quando visiti un sito web. Sono ampiamente utilizzati per far funzionare i siti web o per farli funzionare in modo più efficiente, oltre a fornire informazioni ai proprietari del sito.</p>

                <h2>Tipi di Cookie Utilizzati su Questo Sito</h2>
                <p>Il nostro sito web utilizza esclusivamente **cookie tecnici**. Questi cookie sono strettamente necessari per permettere la navigazione del sito e per garantirne il corretto funzionamento, ad esempio per mantenere la sessione di navigazione.</p>
                <p>I cookie tecnici non raccolgono informazioni personali sull'utente e non richiedono il tuo consenso, in quanto essenziali per fornirti il servizio richiesto.</p>

                <h2>Cookie di Terze Parti</h2>
                <p>Il nostro sito **non utilizza cookie di terze parti** per finalità di profilazione, marketing o analisi del comportamento degli utenti. Le funzionalità di Google Maps sono implementate tramite immagini statiche (screenshot) e non tramite integrazioni che impostano cookie.</p>

                <h2>Gestione dei Cookie</h2>
                <p>Dato che utilizziamo solo cookie tecnici, non è necessario alcun meccanismo di gestione del consenso specifico (come un "cookie banner"). Puoi comunque controllare e/o eliminare i cookie a tuo piacimento. Puoi cancellare tutti i cookie già presenti sul tuo computer e puoi impostare la maggior parte dei browser in modo da bloccarne l'installazione.</p>
                <p>Tieni presente che se scegli di bloccare i cookie tecnici, alcune parti del sito potrebbero non funzionare correttamente.</p>

                <h2>Modifiche alla Presente Cookie Policy</h2>
                <p>La presente Cookie Policy potrà essere aggiornata in qualsiasi momento. La data dell'ultima modifica è indicata all'inizio del documento. Ti invitiamo a consultare periodicamente questa pagina.</p>

                <p>Per maggiori informazioni sulle nostre pratiche relative al trattamento dei dati personali, ti preghiamo di consultare la nostra <Link to="/privacy">Privacy Policy</Link>.</p>
            </div>
        </section>
        </>
    )
}

export default Cookies