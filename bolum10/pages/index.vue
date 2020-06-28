<template>
    <div class="container">
        <ul>
            <li v-for="course in courses"> {{ course.title }} | <strong>{{ course.couponCode }}</strong></li>
        </ul>
    </div>
</template>
<script>
    export default {
        computed : {
            courses(){
                return this.$store.getters.getCourses
            }
        }
    }

</script>