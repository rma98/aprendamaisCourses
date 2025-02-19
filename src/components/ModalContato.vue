<template>
    <div v-if="show" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
            <button class="close-btn" @click="closeModal">✖</button>

            <h2>Entre em Contato</h2>

            <form @submit.prevent="handleSubmit">
                <div class="input-group">
                    <label for="name">Nome</label>
                    <input type="text" id="name" v-model="form.name" required placeholder="Seu nome">
                </div>

                <div class="input-group">
                    <label for="email">E-mail</label>
                    <input type="email" id="email" v-model="form.email" required placeholder="seuemail@email.com">
                </div>

                <div class="input-group">
                    <label for="message">Mensagem</label>
                    <textarea id="message" v-model="form.message" required placeholder="Sua mensagem"></textarea>
                </div>

                <button type="submit" class="send-btn" :disabled="sending">
                    {{ sending ? "Enviando..." : "Enviar" }}
                </button>
            </form>

            <p v-if="message" class="response-message">{{ message }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        show: Boolean, // Controla a visibilidade do modal
    },
    data() {
        return {
            form: {
                name: "",
                email: "",
                message: ""
            },
            sending: false, // Estado de envio
            message: "" // Mensagem de feedback
        };
    },
    methods: {
        closeModal() {
            this.$emit("close"); // Emite evento para fechar o modal
        },
        async handleSubmit() {
            this.sending = true;
            this.message = "";

            try {
                const formData = new FormData();
                formData.append("name", this.form.name);
                formData.append("email", this.form.email);
                formData.append("message", this.form.message);

                const response = await fetch("https://formsubmit.co/ajax/98a2cc209e9dfb5f218da9ba79920ca0", {
                    method: "POST",
                    body: formData,
                });

                if (response.ok) {
                    this.message = "✅ Mensagem enviada com sucesso!";
                    this.resetForm();
                } else {
                    this.message = "❌ Erro ao enviar mensagem. Tente novamente.";
                }
            } catch (error) {
                this.message = "❌ Erro ao conectar ao servidor.";
            } finally {
                this.sending = false;
            }
        },
        resetForm() {
            this.form.name = "";
            this.form.email = "";
            this.form.message = "";
        },
    }
};
</script>

<style scoped>
/* ======== Estilização do Modal ======== */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    animation: fadeIn 0.3s ease-in-out;
}

.modal-content {
    background: white;
    padding: 2rem;
    width: 90%;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    text-align: center;
    animation: slideUp 0.3s ease-in-out;
}

.close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
}

h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
}

.input-group {
    margin-bottom: 1rem;
    text-align: left;
}

.input-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.input-group input,
.input-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
}

.input-group textarea {
    resize: none;
    height: 100px;
}

.send-btn {
    background: #2A7AE4;
    color: white;
    border: none;
    padding: 10px 15px;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

.send-btn:hover {
    background: #1b5db2;
}

/* ======== Animações ======== */
@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes slideUp {
    from {
        transform: translateY(20px);
    }

    to {
        transform: translateY(0);
    }
}
</style>