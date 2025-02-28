<template>
    <main class="course-content">
        <div class="video-container">
            <h2>🎥 Assista abaixo ao vídeo de introdução ao módulo.</h2>
            <iframe class="video-frame" src="https://www.youtube.com/embed/B0l8vjqrXoY?si=x-898ac8SkukXXJq"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <h2 class="main-heading">Tópico 1: Identificação e Caracterização Pessoal; Localização no Tempo e no Espaço</h2>
    </main>
</template>

<script setup lang="ts">
// Aqui você pode importar ícones ou outros componentes, se necessário
</script>

<style scoped>
/* Estilos principais para a página */
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

.main-heading {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #3b82f6;
}

.sub-heading {
    font-size: 2rem;
    color: #34d399;
    margin-top: 2rem;
}

.paragraph-tex {
    font-size: 1.7rem;
    line-height: 1.6;
    color: #4b5563;
}

.responsive-image {
    width: 100%;
    max-width: 600px;
    display: block;
    margin: 20px auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;
}

.responsive-image:hover {
    transform: scale(1.05);
}

.responsive-video {
    width: 100%;
    max-width: 560px;
    display: block;
    margin: 20px auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.dialogue-box {
    background: #f1f5f9;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.dialogue {
    font-size: 1.5rem;
    line-height: 1.8;
}

.content-table {
    margin: 2rem 0;
}

.content-table h4 {
    font-size: 2rem;
    color: #10b981;
    margin-bottom: 1rem;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 2rem;
    border-radius: 8px;
    overflow: hidden;
}

th,
td {
    padding: 1rem;
    text-align: left;
    border: 1px solid #ddd;
}

th {
    background-color: #f3f4f6;
    color: #111827;
}

td {
    background-color: #ffffff;
}

td:hover {
    background-color: #f9fafb;
    cursor: pointer;
}

.highlights {
    display: flex;
    justify-content: center;
    gap: 15px;
    padding: 15px;
    background: linear-gradient(135deg, #f3f3f3, #e0e0e0);
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    flex-wrap: wrap;
    text-align: center;
}

.highlights span {
    font-size: 1.2em;
    font-weight: bold;
    color: #333;
    padding: 10px 15px;
    border-radius: 5px;
    background: white;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
}

.highlights span:hover {
    transform: scale(1.1);
    background: #007BFF;
    color: white;
}

.content-img {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    padding: 20px;
}

.styled-img {
    width: 100%;
    max-width: 300px;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.styled-img.flags {
    max-width: 157px;
}

.styled-img:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.glossary {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    justify-content: center;
}

.glossary span {
    background: linear-gradient(135deg, #ff7eb3, #ff758c);
    color: white;
    padding: 10px 15px;
    border-radius: 8px;
    font-weight: bold;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
}

.glossary span:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 15px rgba(255, 117, 140, 0.5);
}

@media (max-width: 600px) {
    .video-frame {
        height: 200px;
    }

    .course-content {
        padding: 1rem;
    }

    .main-heading {
        font-size: 1.5rem;
    }

    .sub-heading {
        font-size: 1.2rem;
    }

    .dialogue-box {
        padding: 0.8rem;
    }

    .content-table th,
    .content-table td {
        padding: 0.8rem;
    }

    .highlights {
        flex-direction: column;
        align-items: center;
    }

    .content-img {
        flex-direction: column;
        align-items: center;
    }

    .glossary {
        flex-direction: column;
        align-items: center;
    }
}
</style>