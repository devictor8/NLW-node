export const generateSlug = (text: string): string => {
    return text
        .normalize("NFD") // Normaliza os caracteres para remover acentos
        .replace(/[\u0300-\u036f]/g, "") // Remove os acentos
        .toLowerCase() // Converte para minúsculas
        .replace(/[^a-z0-9]+/g, "-") // Substitui símbolos e espaços por hífen
        .replace(/^-+|-+$/g, "") // Remove hífens no início e no fim
        .replace(/-+/g, "-"); // Remove múltiplos hífens consecutivos
}