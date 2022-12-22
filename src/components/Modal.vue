<template>
    <transition name="fade">
        <slot v-if="isShown" class="modal">
           
        </slot>
    </transition>
</template>

<script>
export default {
    name: 'Modal',
    data: () => ({
        isShown: false,
    }),
    props: [ 'id'],
    methods: {
        show(id) {
            if (id == this.id) {
                this.isShown = true
            }
        },
        hide(id) {
            if (id == this.id) {
                this.isShown = false
            }
        },
        toggle(id) {
            if (id == this.id) {
                this.isShown = !this.isShown
            }
        }
    },
    mounted() {
        this.$modal.EventBus.$on('modalShow', this.show)
        this.$modal.EventBus.$on('modalHide', this.hide)
        this.$modal.EventBus.$on('modalToggle', this.toggle)        
    }
}
</script>

<style>

</style>

