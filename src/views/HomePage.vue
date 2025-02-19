<template>
    <div class="container">
        <!-- Navbar -->
        <nav class="navbar">
            <div class="logo">AprendaMais</div>

            <!-- Menu principal -->
            <ul class="nav-links">
                <li><a href="#">Início</a></li>

                <!-- Dropdown de Cursos -->
                <li class="dropdown">
                    <a href="#" class="dropbtn">Cursos <i class="arrow down"></i></a>
                    <ul class="dropdown-content">
                        <li v-for="course in courses" :key="course">
                            <a href="#">{{ course }}</a>
                        </li>
                    </ul>
                </li>

                <li><a href="#">Contato</a></li>
            </ul>
        </nav>

        <!-- Hero Section -->
        <header class="hero">
            <div class="hero-content">
                <h1>Domine o Inglês com o AprendaMais!</h1>
                <p>Explore cursos de inglês do nível 1 ao 13 e aprimore suas habilidades.</p>
                <button class="btn-primary">Comece Agora</button>
            </div>
        </header>

        <!-- Cards informativos -->
        <section class="courses">
            <h2>Nossos Cursos</h2>
            <div class="cards">
                <div class="card">
                    <img src="../assets/images/english01.png" alt="Curso 1" />
                    <h3>Inglês 1</h3>
                    <p>O curso de Inglês 1 traz os conhecimento iniciais para a compreensão da Língua Inglesa.</p>
                </div>
                <div class="card">
                    <img src="../assets/images/english02.png" alt="Curso 2" />
                    <h3>Inglês 2</h3>
                    <p>O curso de Inglês 2 traz os conhecimento iniciais para a compreensão da Língua Inglesa.</p>
                </div>
                <div class="card">
                    <img src="../assets/images/english03.png" alt="Curso 3" />
                    <h3>Inglês 3</h3>
                    <p>O curso de Inglês 3 continua trazendo os conhecimento iniciais para a compreensão da Língua
                        Inglesa.</p>
                </div>
                <div class="card">
                    <img src="../assets/images/english04.png" alt="Curso 4" />
                    <h3>Inglês 4</h3>
                    <p>O curso de Inglês 4 continua trazendo os conhecimento iniciais para a compreensão da Língua
                        Inglesa.</p>
                </div>
                <div class="card">
                    <img src="../assets/images/english05.png" alt="Curso 5" />
                    <h3>Inglês 5</h3>
                    <p>O curso de Inglês 5 amplia o seu vocabulário em situações que envolvam: restaurante, saúde, corpo
                        humano, doenças, locais e atividades de lazer.</p>
                </div>
                <div class="card">
                    <img src="../assets/images/english06.png" alt="Curso 6" />
                    <h3>Inglês 6</h3>
                    <p>O curso de Inglês 6 amplia o seu vocabulário em situações que envolvam: adjetivos, viagens, e faz
                        uma revisão do que já foi visto até aqui.</p>
                </div>
                <div class="card">
                    <img src="../assets/images/english07.png" alt="Curso 7" />
                    <h3>Inglês 7</h3>
                    <p>O curso de Inglês 7 amplia o seu vocabulário em situações que envolvam: Future (Going To
                        and Will), Modal Verbs, Past Continous and Simple Past.</p>
                </div>
                <div class="card">
                    <img src="../assets/images/english08.png" alt="Curso 8" />
                    <h3>Inglês 8</h3>
                    <p>O curso de Inglês 8 amplia o seu vocabulário em situações que envolvam: Vocabulário:
                        esportes radicais, serviços funerários e ambiente acadêmico; estrutura e usos: Past Simple, Past
                        Continuous, Present Perfect Simple.</p>
                </div>
                <div class="card">
                    <img src="../assets/images/english09.png" alt="Curso 9" />
                    <h3>Inglês 9</h3>
                    <p>O curso de Inglês 9 amplia o seu vocabulário em situações que envolvam: entrevista de
                        emprego e ambiente de trabalho; Present Continuous; verbos modais can e could; adjetivos
                        terminados em -ed e -ing; modal verbs should, must e have to.</p>
                </div>
                <div class="card">
                    <img src="../assets/images/english010.png" alt="Curso 10" />
                    <h3>Inglês 10</h3>
                    <p>O curso de Inglês 10 amplia o seu vocabulário em dinheiro e feriados do Canadá;
                        conjunções concessivas e adversativas (however, although, even though, despite, in spite of);
                        conjunções consecutivas e causais (so, therefore, because (of), due to); Non-Defining Relative
                        Clauses e Defining Relative Clauses; Present Continuous vs. Going to; Be able to.</p>
                </div>
                <div class="card">
                    <img src="../assets/images/english011.png" alt="Curso 11" />
                    <h3>Inglês 11</h3>
                    <p>O curso de Inglês 11 amplia o seu vocabulário em situações que envolvam: Vocabulário:
                        gêneros de filme, profissionais do cinema, tipos de histórias e estágios da vida; uso de to ou
                        -ing em dois verbos seguidos; as diferenças de pronúncia de The, Object pronouns e To be; uso do
                        Past Perfect Simple associado ao Past Simple; contrações no Past Perfect Simple; Verbo use, get
                        use e used to.</p>
                </div>
                <div class="card">
                    <img src="../assets/images/english012.png" alt="Curso 12" />
                    <h3>Inglês 12</h3>
                    <p>O curso de Inglês 12 amplia o seu vocabulário em situações que envolvam: Causative
                        sentences; Tag Questions; Indirect Questions.</p>
                </div>
                <div class="card">
                    <img src="../assets/images/english013.png" alt="Curso 13" />
                    <h3>Inglês 13</h3>
                    <p>O curso de Inglês 13 amplia o seu vocabulário em situações que envolvam: meio musical,
                        mídia televisiva e hábitos saudáveis; Zero Conditional; First Conditional; Second Conditional;
                        Third Conditional; Uso do would e could.</p>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="footer">
            <p>© {{ new Date().getFullYear() }} AprendaMais Courses. Todos os direitos reservados.</p>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            courses: [
                "Inglês 1", "Inglês 2", "Inglês 3", "Inglês 4", "Inglês 5", "Inglês 6",
                "Inglês 7", "Inglês 8", "Inglês 9", "Inglês 10", "Inglês 11", "Inglês 12", "Inglês 13"
            ]
        };
    }
};
</script>

<style scoped>
/* ======== Reset básico ======== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* ======== Estilização da Página ======== */
.container {
    font-family: 'Inter', sans-serif;
    color: #333;
    background-color: #FAFAFA;
}

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

.navbar .logo {
    font-size: 2.2rem;
    font-weight: bold;
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
    background: #2A7AE4;
    color: white;
}

/* Exibir o dropdown ao passar o mouse */
.dropdown:hover .dropdown-content {
    display: block;
}

/* Animação para seta girar ao abrir o dropdown */
.dropdown:hover .arrow {
    transform: rotate(225deg);
}

/* ======== Hero Section ======== */
.hero {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60vh;
    text-align: center;
    background: linear-gradient(to right, #2A7AE4, #264653);
    color: white;
    padding: 5rem 2rem;
}

.hero h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
}

.hero p {
    font-size: 1.8rem;
    margin-bottom: 2rem;
}

.btn-primary {
    padding: 1rem 2rem;
    background: #F4A261;
    border: none;
    border-radius: 5px;
    font-size: 1.6rem;
    cursor: pointer;
    transition: 0.3s;
}

.btn-primary:hover {
    background: #e58f4a;
}

/* ======== Cursos ======== */
.courses {
    padding: 4rem 5%;
    text-align: center;
}

.courses h2 {
    font-size: 2.8rem;
    margin-bottom: 2rem;
}

.cards {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
}

.card {
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    max-width: 300px;
    transition: 0.3s;
}

.card img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 1rem;
}

.card h3 {
    font-size: 2rem;
    color: #2A7AE4;
}

.card p {
    font-size: 1.4rem;
    color: #666;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* ======== Footer ======== */
.footer {
    background: #264653;
    color: white;
    text-align: center;
    padding: 2rem;
    margin-top: 3rem;
    font-size: 1.4rem;
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

    .hero h1 {
        font-size: 2.5rem;
    }

    .hero p {
        font-size: 1.6rem;
    }

    .cards {
        flex-direction: column;
        align-items: center;
    }
}
</style>