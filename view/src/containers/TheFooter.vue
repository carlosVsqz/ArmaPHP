<template>
    <CFooter :fixed="false">
        <div>
            <a href="#" target="_blank">Arma</a>
            <span class="ml-1">&copy; {{new Date().getFullYear()}} ESCod</span>
        </div>
        <div class="ml-auto">
            <span class="mr-1">Powered by</span>
            <a href="https://escodgt.com" target="_blank">ESCod</a>
        </div>
    </CFooter>
</template>

<script>
    export default {
        name: 'TheFooter'
    }
</script>
