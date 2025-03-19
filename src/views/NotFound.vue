<template>
    <div class="not-found">
        <h2>Página não encontrada</h2>
        <p>A página que você tentou acessar não existe.</p>
        <router-link to="/">Voltar para a página inicial</router-link>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.not-found {
    text-align: center;
    margin-top: 50px;
}

.not-found h2 {
    font-size: 2rem;
    color: red;
}

.not-found p {
    font-size: 1.2rem;
    margin: 10px 0;
}

.not-found a {
    display: inline-block;
    margin-top: 15px;
    padding: 10px 20px;
    color: white;
    background-color: #007bff;
    text-decoration: none;
    border-radius: 5px;
    transition: 0.3s;
}

.not-found a:hover {
    background-color: #0056b3;
}
</style>
