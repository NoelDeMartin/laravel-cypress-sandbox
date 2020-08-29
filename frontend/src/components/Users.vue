<template>
    <h1>Users</h1>
    <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
</template>

<script>
export default {
    name: 'Users',
    data: () => ({ users: [] }),
    async created() {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users`);

        this.users = await response.json();
    },
};
</script>

<style scoped>
    ul {
        list-style: none;
        padding: 0;
    }
</style>
