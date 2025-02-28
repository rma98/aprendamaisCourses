<template>
    <div class="parabens-container">
        <canvas ref="fireworksCanvas"></canvas>
        <div class="celebration">
            <i class="fas fa-trophy"></i>
            <h1>Parabéns!</h1>
            <p>Você concluiu o curso de Inglês 01. Continue praticando para aprimorar ainda mais seu aprendizado!</p>
            <router-link to="/" class="home-button">Ir para a Página Inicial</router-link>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const fireworksCanvas = ref(null);

onMounted(() => {
    startFireworks();

    setTimeout(() => {
        router.push('/'); // Redireciona após 5 segundos
    }, 10000);
});

function startFireworks() {
    const canvas = fireworksCanvas.value;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    function createFirework(x, y, color) {
        for (let i = 0; i < 40; i++) {
            particles.push({
                x,
                y,
                radius: Math.random() * 4 + 2,
                color,
                speedX: (Math.random() - 0.5) * 5,
                speedY: (Math.random() - 0.5) * 5,
                life: 100
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle, index) => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            particle.life -= 1;

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();

            if (particle.life <= 0) {
                particles.splice(index, 1);
            }
        });

        if (Math.random() < 0.05) {
            createFirework(
                Math.random() * canvas.width,
                Math.random() * canvas.height * 0.5,
                `hsl(${Math.random() * 360}, 100%, 50%)`
            );
        }

        requestAnimationFrame(animate);
    }

    animate();
}
</script>

<style scoped>
.parabens-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to right, #2A7AE4, #264653);
    overflow: hidden;
}

canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.celebration {
    text-align: center;
    background: rgba(255, 255, 255, 0.9);
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    animation: popUp 0.5s ease-out;
    z-index: 2;
}

.celebration i {
    font-size: 50px;
    color: gold;
    animation: bounce 1s infinite;
}

h1 {
    font-size: 28px;
    margin: 10px 0;
    color: #333;
}

p {
    font-size: 16px;
    color: #555;
    margin-bottom: 20px;
}

.home-button {
    display: inline-block;
    background: #007bff;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s;
}

.home-button:hover {
    background: #0056b3;
}

@keyframes popUp {
    from {
        transform: scale(0.8);
        opacity: 0;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}
</style>
