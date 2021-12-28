<template>
    <div class="container-fluid" v-if="STATE.length > 0">
        <div
            class="row"
            v-for="(ITEM, INDX) in STATE"
            :key="INDX">
            <div class="col-12">
                <div class="card border-primary mb-3">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-6">{{ ITEM.Org.ShortName }}</div>
                            <div class="col-6 text-right">
                                <small>
                                    ИНН {{ ITEM.Org.Inn }} / КПП {{ ITEM.Org.Kpp }}
                                </small>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th style="width:50%;">Документ</th>
                                    <th style="width:10%;">Дата</th>
                                    <th style="width:40%;"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="(DOC, INDXD) in ITEM.Documents"
                                    :key="INDXD">
                                    <td>
                                        <a
                                            target="_blank"
                                            :href="'https://diadoc.kontur.ru/'+ITEM.Org.BoxIdGuid+'/Document/Show?letterId='+DOC.MessageId+'&documentId='+DOC.EntityId">
                                            {{ DOC.Title }}
                                        </a>
                                    </td>
                                    <td>{{ DOC.DocumentDate }}</td>
                                    <td class="text-right">
                                        <a 
                                            class="btn btn-secondary btn-sm mr-3"
                                            :href="'https://diadoc.kontur.ru/'+ITEM.Org.BoxIdGuid+'/Document/Show?letterId='+DOC.MessageId+'&documentId='+DOC.EntityId">Посмотреть</a>
                                        <a 
                                            class="btn btn-success btn-sm mr-3"
                                            :href="'https://diadoc.kontur.ru/'+ITEM.Org.BoxIdGuid+'/Document/Show?letterId='+DOC.MessageId+'&documentId='+DOC.EntityId">Согласовать</a>
                                        <a 
                                            class="btn btn-danger btn-sm"
                                            :href="'https://diadoc.kontur.ru/'+ITEM.Org.BoxIdGuid+'/Document/Show?letterId='+DOC.MessageId+'&documentId='+DOC.EntityId">Отклонить</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    computed: {

        STATE() { 
            
            let STATE = this.$store.state
            console.log(STATE)
            return STATE
        }
    },
    monuted: function() {
        
        let STATE = this.$store.state
        console.log(STATE)
    }
}
</script>

<style scoped>
tr td:first, th td:first {
    width: 50%;
}
</style>
