// Base de datos de cartas del tarot con mensajes matutinos
export const tarotCards = [
    {
        id: 1,
        name: "El Sol",
        emoji: "☀️",
        message: "Hoy es un día lleno de energía y optimismo. Las cosas que emprendas tendrán un brillo especial. Confía en tu luz interior y compártela con los demás.",
        color: "#FFD700"
    },
    {
        id: 2,
        name: "La Luna",
        emoji: "🌙",
        message: "Escucha tu intuición hoy. Tus sueños y emociones tienen mensajes importantes. Es un buen día para la reflexión y conectar con tu mundo interior.",
        color: "#E0E0E0"
    },
    {
        id: 3,
        name: "La Estrella",
        emoji: "⭐",
        message: "La esperanza y la inspiración te acompañan. Es momento de soñar en grande y creer en tus posibilidades. El universo conspira a tu favor.",
        color: "#87CEEB"
    },
    {
        id: 4,
        name: "El Mago",
        emoji: "🎩",
        message: "Tienes todas las herramientas que necesitas para lograr tus objetivos. Tu creatividad y habilidades están en su punto máximo. ¡Es hora de actuar!",
        color: "#9370DB"
    },
    {
        id: 5,
        name: "La Fuerza",
        emoji: "🦁",
        message: "Tu coraje y determinación te llevarán lejos hoy. Enfrenta los desafíos con valentía, pero también con compasión. La verdadera fuerza viene del corazón.",
        color: "#FF6347"
    },
    {
        id: 6,
        name: "La Justicia",
        emoji: "⚖️",
        message: "Busca el equilibrio en todas tus acciones. Las decisiones que tomes hoy deben ser justas y equilibradas. La verdad y la honestidad son tus aliados.",
        color: "#4169E1"
    },
    {
        id: 7,
        name: "El Mundo",
        emoji: "🌍",
        message: "Estás completando un ciclo importante. Celebra tus logros y prepárate para nuevos comienzos. El mundo está lleno de posibilidades para ti.",
        color: "#32CD32"
    },
    {
        id: 8,
        name: "El Carro",
        emoji: "🏆",
        message: "Tu determinación te llevará al éxito. Mantén el control y avanza con confianza. Los obstáculos son solo pruebas de tu fortaleza.",
        color: "#FFD700"
    },
    {
        id: 9,
        name: "El Ermitaño",
        emoji: "🕯️",
        message: "Hoy necesitas tiempo para ti mismo. La soledad consciente trae sabiduría. Busca respuestas dentro de ti antes de buscarlas afuera.",
        color: "#A9A9A9"
    },
    {
        id: 10,
        name: "La Rueda",
        emoji: "🎡",
        message: "Los cambios son inevitables y necesarios. Acepta los giros del destino con gracia. Lo que sube debe bajar, y viceversa. Todo es cíclico.",
        color: "#FF69B4"
    },
    {
        id: 11,
        name: "Los Enamorados",
        emoji: "💕",
        message: "Las relaciones y conexiones son importantes hoy. Toma decisiones desde el amor, no desde el miedo. La armonía en tus vínculos es clave.",
        color: "#FF1493"
    },
    {
        id: 12,
        name: "El Emperador",
        emoji: "👑",
        message: "Estructura y liderazgo son tus fortalezas hoy. Organiza tus ideas y toma el control de tu día. Tu autoridad interior te guía.",
        color: "#B8860B"
    }
];

// Función para obtener una carta aleatoria
export function getRandomCard() {
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    return tarotCards[randomIndex];
}