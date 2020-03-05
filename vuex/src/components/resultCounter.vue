<template>
    <div>
        <p>this is my result counter {{ counter }}</p>

    </div>
</template>

<script>

export default {
    name: "resultCounter",
    computed: {
        counter: function() {
           return this.$store.state.count
        }
    }
}
</script>