<template>
    <main class="course-content">
        <div class="video-container">
            <h2>🎥 Assista abaixo ao vídeo introdutório ao módulo do curso.</h2>
            <iframe class="video-frame" src="https://www.youtube.com/embed/7StArwBZTQA?si=dhvh1Izf1Fe1fahK"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <h2 class="main-heading">Tópico 1: Identificação e Caracterização Pessoal; Localização no Tempo e no Espaço</h2>

        <h3 class="sub-heading">1.1 Nice to meet you</h3>
        <p class="intro-text">
            Rosa chegou aos Estados Unidos e foi recebida por Amanda, que a levou até sua nova home para conhecer suas
            housemates. Neste momento Rosa, de uma forma espontânea abraça Carly, demonstrando alegria em ver suas novas
            amigas pela primeira vez. Ao encontrarem-se, as garotas saudaram-se e apresentaram-se. Acompanhe a
            continuação da conversa:
        </p>

        <img src="../../assets/images/foto001.png" alt="Rosa chegando aos EUA" class="responsive-image">

        <div class="dialogue-box">
            <p class="dialogue">
                <strong>Rosa:</strong> Nice to meet you, girls!<br>
                <strong>Carly:</strong> Nice to meet you too.<br>
                <strong>Christiane:</strong> Welcome to your new home!<br>
                <strong>Carly:</strong> Where are you from in Brazil?<br>
                <strong>Rosa:</strong> I’m from Rio de Janeiro. And you? Are you from Chicago?<br>
                <strong>Christiane:</strong> I’m from New York!<br>
                <strong>Carly:</strong> I’m from a small town in California.<br>
                <strong>Rosa:</strong> I’m curious to see my bedroom!<br>
                <strong>Carly:</strong> Of course! Let’s go… your bedroom is upstairs.
            </p>
        </div>

        <p class="importance-text">
            É importante observar que quando interagimos com pessoas precisamos nos comunicar com elas. Você pôde
            acompanhar que, ao se encontrarem, as garotas utilizam o "Hi" para se saudar. Para que você consiga saudar
            ou se despedir de alguém, no tópico a seguir você conhecerá algumas destas estruturas.
        </p>

        <iframe class="responsive-video" width="560" height="315"
            src="https://www.youtube.com/embed/EaTAkIC-qLM?si=zf2MyBdIg-Qw0jpL" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <h3 class="sub-heading">1.2 Greetings and Goodbyes</h3>
        <p>Cada cultura tem sua forma própria de saudar ou despedir-se de alguém. Observe na tabela algumas expressões
            utilizadas nestas situações.</p>

        <div class="content-table">
            <h4>Quadro 1 - Greetings</h4>
            <table>
                <thead>
                    <tr>
                        <th>Greetings</th>
                        <th>Saudações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Hi</td>
                        <td>Oi</td>
                    </tr>
                    <tr>
                        <td>Hello</td>
                        <td>Olá, alô</td>
                    </tr>
                    <tr>
                        <td>Good morning</td>
                        <td>Bom dia</td>
                    </tr>
                    <tr>
                        <td>Good afternoon</td>
                        <td>Boa tarde</td>
                    </tr>
                    <tr>
                        <td>Good night</td>
                        <td>Boa noite</td>
                    </tr>
                    <tr>
                        <td>Good evening</td>
                        <td>Boa noite (ao chegar)</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="content-table">
            <h4>Quadro 2 - Goodbyes</h4>
            <table>
                <thead>
                    <tr>
                        <th>Goodbyes</th>
                        <th>Despedidas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Good night</td>
                        <td>Boa noite (ao sair)</td>
                    </tr>
                    <tr>
                        <td>Good bye</td>
                        <td>Adeus</td>
                    </tr>
                    <tr>
                        <td>Bye Bye / Bye</td>
                        <td>Tchau</td>
                    </tr>
                    <tr>
                        <td>See you tomorrow</td>
                        <td>Vejo você amanhã</td>
                    </tr>
                    <tr>
                        <td>See you later</td>
                        <td>Vejo você depois</td>
                    </tr>
                    <tr>
                        <td>See you soon</td>
                        <td>Até breve / Até logo</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p class="next-topic-text">
            Ao se comunicar, além de saudar e despedir-se, é preciso se apresentar. Veja no próximo tópico algumas
            estruturas para que você possa conversar com outras pessoas numa situação em que seja necessário falar de
            si.
        </p>
    </main>
</template>

<script setup lang="ts">
// Aqui você pode importar ícones ou outros componentes, se necessário
</script>

<style scoped>
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

.intro-text,
.importance-text,
.next-topic-text {
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
}
</style>