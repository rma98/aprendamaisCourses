<template>
    <nav class="navbar">
        <div class="logo"><a href="https://aprendamais.mec.gov.br/" target="_blank">AprendaMais</a></div>

        <!-- Menu principal -->
        <ul class="nav-links">
            <li><a href="/">Início</a></li>

            <!-- Dropdown de Cursos -->
            <li class="dropdown">
                <a href="#" class="dropbtn">Cursos <i class="arrow down"></i></a>
                <ul class="dropdown-content">
                    <li v-for="course in courses" :key="course">
                        <router-link :to="`/ingles/${course.number}/pag01`">{{ course.name }}</router-link>
                    </li>
                </ul>
            </li>

            <!-- Botão para abrir o modal -->
            <li><a href="#" @click.prevent="openModal">Contato</a></li>
        </ul>
        <!-- Modal de Contato -->
        <ModalContato :show="modalOpen" @close="modalOpen = false" />
    </nav>
</template>

<script>
import ModalContato from "./ModalContato.vue";

export default {
    name: "Navbar",
    components: { ModalContato },
    data() {
        return {
            modalOpen: false,
            courses: [
                { name: "Inglês 1", number: "1" },
                { name: "Inglês 2", number: "2" },
                { name: "Inglês 3", number: "3" },
                { name: "Inglês 4", number: "4" },
                { name: "Inglês 5", number: "5" },
                { name: "Inglês 6", number: "6" },
                { name: "Inglês 7", number: "7" },
                { name: "Inglês 8", number: "8" },
                { name: "Inglês 9", number: "9" },
                { name: "Inglês 10", number: "10" },
                { name: "Inglês 11", number: "11" },
                { name: "Inglês 12", number: "12" },
                { name: "Inglês 13", number: "13" }
            ],
        };
    },
    methods: {
        openModal() {
            this.modalOpen = true;
        },
    }
}
</script>

<style scoped>
/* ======== Navbar ======== */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 5%;
    background: #2A7AE4;
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.navbar .logo a {
    font-size: 2.2rem;
    font-weight: bold;
    color: white;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 2rem;
}

.nav-links li {
    position: relative;
}

.nav-links li a {
    color: white;
    text-decoration: none;
    font-size: 1.6rem;
    transition: 0.3s;
}

.nav-links li a:hover {
    opacity: 0.8;
}

/* ======== Dropdown ======== */
.dropdown .dropbtn {
    display: flex;
    align-items: center;
}

.dropdown .arrow {
    border: solid white;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 5px;
    margin-left: 5px;
    transform: rotate(45deg);
    transition: transform 0.3s ease;
}

/* Estilizando o dropdown */
.dropdown-content {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background: #2A7AE4;
    min-width: 200px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    overflow: hidden;
}

.dropdown-content li {
    list-style: none;
}

.dropdown-content a {
    display: block;
    padding: 12px 16px;
    color: #333;
    text-decoration: none;
    transition: background 0.3s ease;
}

.dropdown-content a:hover {
    background: white;
    color: #2A7AE4;
}

/* Exibir o dropdown ao passar o mouse */
.dropdown:hover .dropdown-content {
    display: block;
}

/* Animação para seta girar ao abrir o dropdown */
.dropdown:hover .arrow {
    transform: rotate(225deg);
}

/* ======== Responsividade ======== */
@media (max-width: 768px) {
    .navbar {
        flex-direction: column;

        text-align: center;
    }

    .nav-links {
        flex-direction: column;

        gap: 1rem;
    }

    .dropdown-content {
        position: relative;
        width: 100%;
    }
}
</style>