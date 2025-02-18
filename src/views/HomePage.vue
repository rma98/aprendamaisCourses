<template>
    <div class="container">
        <!-- Navbar -->
        <nav class="navbar">
            <div class="logo">AprendaMais</div>
            <ul class="nav-links">
                <li><a href="#">Início</a></li>
                <li><a href="#">Cursos</a></li>
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
                    <img src="../assets/images/english1.png" alt="Curso 1" />
                    <h3>Inglês 1</h3>
                    <p>O curso de Inglês 1 traz os conhecimento iniciais para a compreensão da Língua Inglesa.</p>
                </div>
                <div class="card">
                    <img src="../assets/images/english2.png" alt="Curso 2" />
                    <h3>Inglês 2</h3>
                    <p>O curso de Inglês 2 traz os conhecimento iniciais para a compreensão da Língua Inglesa.</p>
                </div>
                <div class="card">
                    <img src="../assets/images/english3.png" alt="Curso 3" />
                    <h3>Inglês 3</h3>
                    <p>O curso de Inglês 3 continua trazendo os conhecimento iniciais para a compreensão da Língua Inglesa.</p>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="footer">
            <p>© {{ new Date().getFullYear() }} AprendaMais Courses. Todos os direitos reservados.</p>
        </footer>
    </div>
</template>

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

.nav-links li a {
    color: white;
    text-decoration: none;
    font-size: 1.6rem;
    transition: 0.3s;
}

.nav-links li a:hover {
    opacity: 0.8;
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