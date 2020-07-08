<template>
    <div>
        <CRow>
            <CCol sm="12">
                <CTableWrapper
                        :items="getShuffledUsersData()"
                        hover
                        striped
                        bordered
                        small
                        fixed
                        caption="Devoluciones"
                />
            </CCol>
        </CRow>
        <CRow>
            <CCol lg="12">
                <CTableWrapper :items="getShuffledUsersData()">
                    <template #header>
                        <CIcon name="cil-grid"/> Simple Table
                        <div class="card-header-actions">
                            <a
                                    href="https://coreui.io/vue/docs/components/nav"
                                    class="card-header-action"
                                    rel="noreferrer noopener"
                                    target="_blank"
                            >
                                <small class="text-muted">docs</small>
                            </a>
                        </div>
                    </template>
                </CTableWrapper>
            </CCol>

            <CCol lg="6">
                <CTableWrapper
                        :items="getShuffledUsersData()"
                        striped
                        caption="Striped Table"
                />
            </CCol>
        </CRow>
    </div>
</template>

<script>
    import CTableWrapper from "../Table";
    import usersData from "../../users/UsersData";

    export default {
        name: "Returns",
        components: { CTableWrapper },
        methods: {
            shuffleArray (array) {
                for (let i = array.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    let temp = array[i];
                    array[i] = array[j];
                    array[j] = temp
                }
                return array
            },

            getShuffledUsersData () {
                return this.shuffleArray(usersData.slice(0))
            }
        }
    }
</script>

<style scoped>

</style>
