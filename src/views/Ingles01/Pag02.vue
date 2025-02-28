<template>
    <main class="course-content">
        <div class="video-container">
            <h2>🎥 Assista abaixo ao episódio 2 ao módulo do curso.</h2>
            <iframe class="video-frame" src="https://www.youtube.com/embed/zMm5GeB-EYk?si=WzSxx-scbq9zu1GN"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </main>
</template>

<script setup lang="ts">
// Aqui você pode importar ícones ou outros componentes, se necessário
</script>

<style scoped>
.course-content {
    font-family: 'Roboto', sans-serif;
    color: #333;
    max-width: 900px;
    margin: 2rem auto;
    padding: 2rem;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.video-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;
}

.video-container:hover {
    transform: scale(1.02);
}

.video-container h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
}

.video-frame {
    width: 100%;
    max-width: 560px;
    height: 315px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}
</style>