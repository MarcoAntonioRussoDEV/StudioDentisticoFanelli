import {
    Smile,
    Wrench,
    Shield,
    Stethoscope,
    Scissors,
    Baby,
    LucideIcon,
} from "lucide-react";

interface Solution {
    title: string;
    description: string;
    frequency: string;
}

export interface Service {
    title: string;
    description: string;
    Icon: LucideIcon;
    solutions: Solution[];
    url: string;
    slug: string;
    images: string[];
}

export const services: Service[] = [
    {
        title: "Igiene e Prevenzione",
        description:
            "Trattamenti preventivi e di igiene orale per mantenere un sorriso sano e prevenire patologie dentali.",
        Icon: Smile,
        solutions: [
            {
                title: "Detartrasi e pulizia professionale",
                description:
                    "Rimozione professionale del tartaro e della placca batterica per prevenire gengiviti e malattie parodontali.",
                frequency: "Ogni 6 mesi",
            },
            {
                title: "Sbiancamento dentale",
                description:
                    "Trattamento estetico per migliorare il colore dei denti e ottenere un sorriso più luminoso e naturale.",
                frequency: "Una volta all'anno o su indicazione del dentista",
            },
            {
                title: "Fluoroprofilassi",
                description:
                    "Applicazione di fluoro per rinforzare lo smalto dentale e prevenire la formazione di carie.",
                frequency: "Su indicazione del dentista",
            },
            {
                title: "Sigillature dei solchi",
                description:
                    "Protezione dei solchi dei denti posteriori per prevenire la formazione di carie, ideale per bambini e adolescenti.",
                frequency: "Una volta, in età pediatrica",
            },
        ],
        url: "/services/igiene-e-prevenzione",
        slug: "igiene-e-prevenzione",
        images: [
            "https://picsum.photos/200/300",
            "https://picsum.photos/201/300",
            "https://picsum.photos/202/300",
        ],
    },
    {
        title: "Conservativa e Endodonzia",
        description:
            "Trattamenti per il restauro e la cura dei denti danneggiati, preservando la struttura dentale naturale.",
        Icon: Shield,
        solutions: [
            {
                title: "Otturazioni estetiche",
                description:
                    "Riparazione di carie e difetti dentali con materiali compositi estetici che si integrano perfettamente con il dente naturale.",
                frequency: "Su necessità",
            },
            {
                title: "Ricostruzioni estetiche",
                description:
                    "Restauro completo di denti danneggiati utilizzando tecniche conservative avanzate per preservare la struttura dentale.",
                frequency: "Su necessità",
            },
            {
                title: "Devitalizzazione (Terapia canalare)",
                description:
                    "Trattamento endodontico per salvare denti con polpa danneggiata, rimuovendo l'infezione e sigillando i canali radicolari.",
                frequency: "Su necessità clinica",
            },
            {
                title: "Ritrattamento endodontico",
                description:
                    "Revisione di precedenti trattamenti canalari non riusciti per salvare il dente ed evitare l'estrazione.",
                frequency: "Su indicazione specialistica",
            },
        ],
        url: "/services/conservativa-endodonzia",
        slug: "conservativa-endodonzia",
        images: [
            "https://picsum.photos/203/300",
            "https://picsum.photos/204/300",
            "https://picsum.photos/205/300",
        ],
    },
    {
        title: "Implantologia e Chirurgia Orale",
        description:
            "Soluzioni chirurgiche avanzate per la sostituzione di denti mancanti e trattamenti di chirurgia orale specialistica.",
        Icon: Scissors,
        solutions: [
            {
                title: "Implantologia standard",
                description:
                    "Inserimento di impianti in titanio biocompatibile per sostituire le radici dei denti mancanti con osteointegrazione stabile.",
                frequency: "Su pianificazione",
            },
            {
                title: "Implantologia a carico immediato",
                description:
                    "Applicazione di denti provvisori immediatamente dopo l'inserimento degli impianti, per non rimanere mai senza denti.",
                frequency: "Su valutazione del caso",
            },
            {
                title: "Implantologia flapless",
                description:
                    "Tecnica minimamente invasiva senza incisioni e senza punti di sutura, con guarigione più rapida e meno fastidi.",
                frequency: "Su indicazione clinica",
            },
            {
                title: "Chirurgia implantare computer guidata",
                description:
                    "Implantologia progettata al computer che dimezza la durata del trattamento e riduce le possibili complicanze.",
                frequency: "Su pianificazione avanzata",
            },
            {
                title: "Rialzo del seno mascellare",
                description:
                    "Ricostruzione ossea verticale e trasversale con innesti ossei e biomateriali di ultima generazione per casi complessi.",
                frequency: "Su necessità anatomica",
            },
            {
                title: "Estrazioni dentarie",
                description:
                    "Rimozione di denti compromessi o inclusi con tecniche conservative e minimamente invasive.",
                frequency: "Su necessità clinica",
            },
        ],
        url: "/services/implantologia-chirurgia",
        slug: "implantologia-chirurgia",
        images: [
            "https://picsum.photos/206/300",
            "https://picsum.photos/207/300",
            "https://picsum.photos/208/300",
        ],
    },
    {
        title: "Protesi e Riabilitazione",
        description:
            "Soluzioni protesiche moderne per il ripristino della funzione masticatoria e dell'estetica del sorriso.",
        Icon: Wrench,
        solutions: [
            {
                title: "Protesi digitale",
                description:
                    "Realizzazione di protesi con tecnologie digitali avanzate per maggiore precisione, comfort e rapidità di esecuzione.",
                frequency: "Su pianificazione",
            },
            {
                title: "Protesi fissa su denti naturali",
                description:
                    "Corone e ponti cementati stabilmente sui denti per ripristinare funzione ed estetica in modo permanente.",
                frequency: "Su necessità",
            },
            {
                title: "Protesi fissa su impianti",
                description:
                    "Protesi avvitate o cementate su impianti dentali per una soluzione stabile e confortevole senza coinvolgere denti naturali.",
                frequency: "Su pianificazione implantare",
            },
            {
                title: "Protesi mobile",
                description:
                    "Protesi rimovibili parziali o totali per pazienti che non possono ricorrere a soluzioni fisse, con materiali biocompatibili.",
                frequency: "Su valutazione del caso",
            },
            {
                title: "Faccette estetiche",
                description:
                    "Sottili lamine in ceramica applicate sulla superficie dei denti anteriori per migliorare forma, colore e allineamento.",
                frequency: "Su richiesta estetica",
            },
        ],
        url: "/services/protesi-riabilitazione",
        slug: "protesi-riabilitazione",
        images: [
            "https://picsum.photos/209/300",
            "https://picsum.photos/210/300",
            "https://picsum.photos/211/300",
        ],
    },
    {
        title: "Ortodonzia e Gnatologia",
        description:
            "Correzione di malocclusioni, allineamento dentale e trattamento dei disturbi dell'articolazione temporo-mandibolare.",
        Icon: Stethoscope,
        solutions: [
            {
                title: "Ortodonzia tradizionale",
                description:
                    "Apparecchi fissi con brackets metallici o estetici per la correzione di malposizioni dentali e malocclusioni.",
                frequency: "Terapia da 18-36 mesi",
            },
            {
                title: "Allineatori invisibili",
                description:
                    "Trattamento ortodontico con mascherine trasparenti rimovibili per correggere l'allineamento dentale in modo discreto.",
                frequency: "Terapia da 6-24 mesi",
            },
            {
                title: "Ortodonzia intercettiva",
                description:
                    "Trattamenti ortodontici precoci in età pediatrica per guidare la crescita e lo sviluppo delle arcate dentarie.",
                frequency: "In età evolutiva (6-12 anni)",
            },
            {
                title: "Gnatologia",
                description:
                    "Diagnosi e trattamento dei disturbi dell'articolazione temporo-mandibolare e dei problemi di masticazione.",
                frequency: "Su sintomatologia specifica",
            },
            {
                title: "Bite e placche occlusali",
                description:
                    "Dispositivi per proteggere i denti dal bruxismo e correggere i rapporti occlusali scorretti.",
                frequency: "Su indicazione clinica",
            },
        ],
        url: "/services/ortodonzia-gnatologia",
        slug: "ortodonzia-gnatologia",
        images: [
            "https://picsum.photos/212/300",
            "https://picsum.photos/213/300",
            "https://picsum.photos/214/300",
        ],
    },
    {
        title: "Parodontologia e Pedodonzia",
        description:
            "Cura delle malattie gengivali e parodontali, insieme ai trattamenti odontoiatrici specializzati per i più piccoli.",
        Icon: Baby,
        solutions: [
            {
                title: "Terapia parodontale non chirurgica",
                description:
                    "Curettage e levigatura radicolare per il trattamento delle gengiviti e delle parodontiti in stadio iniziale.",
                frequency: "Su indicazione parodontale",
            },
            {
                title: "Chirurgia parodontale",
                description:
                    "Interventi chirurgici per il trattamento di parodontiti avanzate e rigenerazione dei tessuti parodontali persi.",
                frequency: "Su necessità specialistica",
            },
            {
                title: "Chirurgia estetica gengivale",
                description:
                    "Interventi per correggere asimmetrie gengivali e migliorare l'estetica del sorriso attraverso il rimodellamento delle gengive.",
                frequency: "Su richiesta estetica",
            },
            {
                title: "Pedodonzia",
                description:
                    "Trattamenti odontoiatrici specializzati per bambini e adolescenti, con approccio psicologico adatto all'età pediatrica.",
                frequency: "Controlli ogni 6 mesi",
            },
            {
                title: "Sedazione cosciente per bambini",
                description:
                    "Tecniche di rilassamento e sedazione dolce per permettere ai bambini di affrontare le cure dentali serenamente.",
                frequency: "Su necessità comportamentale",
            },
            {
                title: "Prevenzione in età pediatrica",
                description:
                    "Programmi di prevenzione specifici per bambini con educazione all'igiene orale e applicazione di fluoro e sigillanti.",
                frequency: "Ogni 3-6 mesi",
            },
        ],
        url: "/services/parodontologia-pedodonzia",
        slug: "parodontologia-pedodonzia",
        images: [
            "https://picsum.photos/215/300",
            "https://picsum.photos/216/300",
            "https://picsum.photos/217/300",
        ],
    },
];
