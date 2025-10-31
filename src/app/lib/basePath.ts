/**
 * Ottiene il basePath da utilizzare per i path delle risorse statiche
 * In sviluppo ritorna stringa vuota, in produzione ritorna il basePath configurato
 */
export const getBasePath = (): string => {
    return process.env.NODE_ENV === "development"
        ? ""
        : "/StudioDentisticoFanelli";
};

/**
 * Aggiunge il basePath al path fornito se necessario
 */
export const withBasePath = (path: string): string => {
    const basePath = getBasePath();
    // Se il path inizia già con il basePath, non aggiungerlo di nuovo
    if (path.startsWith(basePath)) {
        return path;
    }
    return `${basePath}${path}`;
};
