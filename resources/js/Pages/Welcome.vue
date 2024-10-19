<script setup>
import { Head, Link } from "@inertiajs/vue3";

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});

function handleImageError() {
    document.getElementById("screenshot-container")?.classList.add("!hidden");
    document.getElementById("docs-card")?.classList.add("!row-span-1");
    document.getElementById("docs-card-content")?.classList.add("!flex-row");
    document.getElementById("background")?.classList.add("!hidden");
}
</script>

<template>
    <Head title="Home" />
    <div class="landing-page">
        <header class="header">
            <div class="image-wrapper">
                <img src="../../../public/images/hero-logo-new-nav.svg" />
            </div>

            <nav v-if="canLogin" class="">
                <Link
                    v-if="$page.props.auth.user"
                    :href="route('dashboard')"
                    class=""
                >
                    Go to Dashboard
                </Link>

                <template v-else>
                    <div class="">
                        <Link :href="route('login')" class=""> Log in /</Link>

                        <Link
                            v-if="canRegister"
                            :href="route('register')"
                            class=""
                        >
                            Register
                        </Link>
                    </div>
                </template>
            </nav>
        </header>

        <main class="main">
            <div class="image-wrapper">
                <img
                    src="../../../public/images/hero-handwerkersoftware-cloud-app.png.webp"
                />
            </div>
        </main>

        <footer class="footer">
            Hero App - © {{ new Date().getFullYear() }}
        </footer>
    </div>
</template>
