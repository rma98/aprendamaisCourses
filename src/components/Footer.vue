<template>
    <!-- Footer -->
    <footer class="footer">
        <p>© {{ new Date().getFullYear() }} <a href="https://aprendamais.mec.gov.br/" target="_blank">AprendaMais</a> Courses. Todos os direitos reservados.</p>
    </footer>
</template>

<script>
export default {
    name: "Footer",
}
</script>

<style scoped>
/* ======== Footer ======== */
.footer {
    background: #264653;
    color: white;
    text-align: center;
    padding: 2rem;
    margin-top: 3rem;
    font-size: 1.4rem;
}

.footer a {
    color: var(--text-secondary);
}
</style>