import React from "react";
import type { Metadata } from "next";
import { contacts } from "../lib/data/contacts";

export const metadata: Metadata = {
    title: "Privacy Policy | Studio Dentistico Fanelli",
    description:
        "Informativa sulla privacy e trattamento dei dati personali dello Studio Dentistico Fanelli di Foggia, conforme al GDPR.",
    robots: "noindex, follow",
};

const PrivacyPolicyPage = () => {
    const email = contacts.find(contact => contact.label === "Email")?.value;
    return (
        <div className="bg-gradient-to-b from-primary/5 to-white min-h-screen">
            <div className="container mx-auto px-4 py-24 max-w-4xl">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Informativa Privacy
                    </h1>
                    <p className="text-lg text-gray-600">
                        Ai sensi dell&apos;art. 13 del Regolamento UE 2016/679
                        (GDPR)
                    </p>
                </header>

                <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
                    <section>
                        <p className="text-gray-700 leading-relaxed">
                            Si fornisce la presente informativa, ai sensi
                            dell&apos;art. 13 del Regolamento UE 2016/679
                            (GDPR), per coloro che accedono al sito web del
                            Dott. Giuseppe Fanelli.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            La presente informativa riguarda esclusivamente il
                            sito del Dott. Giuseppe Fanelli e non anche altri
                            indirizzi web eventualmente consultati
                            dall&apos;utente tramite link. Si richiama, inoltre,
                            la Raccomandazione n. 2/2001 adottata il 17 maggio
                            2001 dalle autorità europee per la protezione dei
                            dati personali, riunite nel Gruppo istituito
                            dall&apos;art. 29 della direttiva n. 95/46/CE, per
                            individuare alcuni requisiti minimi per la raccolta
                            di dati personali online.
                        </p>
                    </section>

                    <section className="border-l-4 border-primary pl-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Titolare del Trattamento
                        </h2>
                        <div className="space-y-2 text-gray-700">
                            <p>
                                Il titolare del trattamento dei dati personali è
                                il{" "}
                                <strong className="text-primary">
                                    Dott. Giuseppe Fanelli
                                </strong>
                                , con sede in Foggia (Italia).
                            </p>
                            <p className="mt-4">
                                Via Padre Antonio da Olivadi n. 9 – 71122 Foggia
                                (FG)
                            </p>
                            <p>
                                Email:{" "}
                                <a
                                    href={`mailto:${email}`}
                                    className="text-primary hover:underline"
                                >
                                    {email}
                                </a>
                            </p>
                            <p>
                                Tel:{" "}
                                <a
                                    href="tel:+390881635896"
                                    className="text-primary hover:underline"
                                >
                                    +39 0881 635896
                                </a>
                            </p>
                        </div>
                    </section>

                    <section className="border-l-4 border-primary pl-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Luogo di Trattamento dei Dati
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            I dati personali degli utenti che accedono e
                            navigano sul sito sono trattati presso la sede del
                            titolare, da personale tecnico incaricato o da
                            eventuali incaricati di operazioni di manutenzione,
                            adeguatamente formati sulla tutela della
                            riservatezza. Nessun dato derivante dalla
                            navigazione viene comunicato o diffuso.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            I dati personali forniti volontariamente tramite il
                            form di contatto sono utilizzati esclusivamente per
                            rispondere alla richiesta inviata e sono comunicati
                            a terzi solo se necessario. In particolare, il
                            servizio <strong>EmailJS</strong> è utilizzato per
                            l&apos;invio del messaggio via email.
                        </p>
                    </section>

                    <section className="border-l-4 border-primary pl-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Modalità del Trattamento
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            I dati personali sono trattati con strumenti
                            automatizzati per il tempo strettamente necessario a
                            conseguire gli scopi per cui sono stati raccolti.
                            Sono adottate misure di sicurezza idonee a prevenire
                            la perdita dei dati, usi illeciti o non corretti e
                            accessi non autorizzati.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            I dati inviati tramite il form di contatto vengono
                            trasmessi via email e conservati nella casella di
                            posta elettronica del titolare per il tempo
                            necessario alla gestione della richiesta e del
                            rapporto con il paziente. Non vengono archiviati in
                            database o sistemi di gestione esterni.
                        </p>
                    </section>

                    <section className="border-l-4 border-primary pl-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Dati Trattati
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                            Dati di Navigazione
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            L&apos;accesso al sito avviene tramite browser web.
                            Alcuni dati tecnici (es. indirizzo IP, URI delle
                            risorse richieste, orario della richiesta) possono
                            essere raccolti automaticamente e utilizzati in
                            forma anonima per fini statistici e per il controllo
                            del corretto funzionamento del sito. Tali dati
                            vengono cancellati immediatamente dopo
                            l&apos;elaborazione e potrebbero essere utilizzati
                            solo in caso di reati informatici.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                            Dati Forniti Volontariamente dall&apos;Utente
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            L&apos;invio facoltativo e volontario di messaggi
                            tramite il form di contatto comporta
                            l&apos;acquisizione dell&apos;indirizzo email del
                            mittente e degli eventuali altri dati personali
                            contenuti nel messaggio, necessari per rispondere
                            alla richiesta.
                        </p>
                    </section>

                    <section className="border-l-4 border-primary pl-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Cookies
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Ai sensi del Regolamento UE 2016/679 (GDPR) e del
                            Provvedimento del Garante per la Protezione dei Dati
                            Personali n. 229 dell&apos;8 maggio 2014, si informa
                            che il presente sito può utilizzare cookie tecnici e
                            di terze parti.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            I cookie sono piccoli file di testo che il sito
                            invia al dispositivo dell&apos;utente, dove vengono
                            memorizzati per essere ritrasmessi al sito alla
                            visita successiva. Possono essere:
                        </p>

                        <div className="mt-4 space-y-4">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-900 mb-2">
                                    Cookie Tecnici
                                </h4>
                                <p className="text-gray-700 text-sm">
                                    Necessari per il corretto funzionamento del
                                    sito, non raccolgono dati personali.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-gray-900 mb-2">
                                    Cookie di Terze Parti
                                </h4>
                                <p className="text-gray-700 text-sm">
                                    Installati da servizi esterni integrati nel
                                    sito (es. EmailJS, Google Fonts, CDN), che
                                    possono raccogliere dati di navigazione o
                                    tecnici.
                                </p>
                            </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed mt-4">
                            <strong>
                                Il sito non utilizza cookie di profilazione né
                                strumenti di tracciamento per finalità
                                pubblicitarie.
                            </strong>
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            L&apos;utente può gestire le preferenze relative ai
                            cookie direttamente dal proprio browser, bloccando o
                            eliminando quelli già installati. La disattivazione
                            dei cookie tecnici può compromettere la funzionalità
                            del sito.
                        </p>
                    </section>

                    <section className="border-l-4 border-primary pl-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Conferimento dei Dati
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Il conferimento dei dati personali tramite il form
                            di contatto è facoltativo, ma necessario per
                            l&apos;evasione della richiesta. In assenza di tali
                            dati, non sarà possibile fornire una risposta.
                        </p>
                    </section>

                    <section className="border-l-4 border-primary pl-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Diritti degli Interessati
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            I soggetti cui si riferiscono i dati personali hanno
                            il diritto di ottenere, in qualunque momento, la
                            conferma dell&apos;esistenza dei dati, di conoscerne
                            il contenuto e l&apos;origine, verificarne
                            l&apos;esattezza o chiederne l&apos;integrazione,
                            l&apos;aggiornamento o la rettifica.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Ai sensi degli articoli 15-22 del GDPR, è possibile
                            richiedere:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold mt-1">
                                    •
                                </span>
                                <span>
                                    La <strong>cancellazione</strong> dei dati
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold mt-1">
                                    •
                                </span>
                                <span>
                                    La{" "}
                                    <strong>
                                        trasformazione in forma anonima
                                    </strong>{" "}
                                    dei dati trattati
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold mt-1">
                                    •
                                </span>
                                <span>
                                    Il <strong>blocco</strong> dei dati trattati
                                    in violazione di legge
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold mt-1">
                                    •
                                </span>
                                <span>
                                    Di <strong>opporsi</strong> al loro
                                    trattamento per motivi legittimi
                                </span>
                            </li>
                        </ul>
                        <p className="mt-6 text-gray-700 leading-relaxed">
                            Le richieste possono essere rivolte al titolare del
                            trattamento tramite i recapiti indicati sul sito:
                        </p>
                        <p className="mt-2">
                            <a
                                href={`mailto:${email}`}
                                className="text-primary font-semibold hover:underline"
                            >
                                {email}
                            </a>
                        </p>
                    </section>

                    <section className="border-l-4 border-primary pl-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Aggiornamenti
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            La presente informativa può essere soggetta ad
                            aggiornamenti e/o modifiche. Si invita l&apos;utente
                            a consultarla periodicamente.
                        </p>
                    </section>

                    <section className="pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-500 text-center">
                            Ultimo aggiornamento: 4 Novembre 2025
                        </p>
                    </section>
                </article>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
