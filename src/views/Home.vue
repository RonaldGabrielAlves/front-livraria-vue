<template>
<div class="container mt-5">
    <h1 class="text-center">DashBoard</h1>
    <h3>Último Livro Alugado</h3>
    <table class="table mt-5 table-info table-bordered table-striped table-hover shadow p-3 mb-5 bg-white rounded">
        <thead>
            <tr class="text-center">
                <th>
                    Data do Aluguel
                </th>
                <th>
        
                    Nome do Livro
                
                </th>
                <th>
        
                    Cliente
                
                </th>
            </tr>
        </thead>
        <tbody class="text-center">
            <tr v-for="ult of resula" :key="ult.id">
                <td>{{ult.dataalu}}</td>
                <td>{{ult.nomeliv}}</td>
                <td>{{ult.nomecli}}</td>
            </tr>
        </tbody>
    </table>

    <h3>Livros mais alugados</h3>
    <apexchart
        v-if="!loading"
        type="pie"
        width="500"
        :options="chartOptions"
        :series="series"
    ></apexchart>
</div>
</template>

<script>
  import Ultlivroalug from '../services/ultlivroalug'
  import Livromsalug from '../services/livromsalug'  

  export default ({
        data(){
            return{
                loading: true,
                resula:[],
                reslmsa:[] ,

                series: [0, 0, 0],
                chartOptions: {
                    labels: ['', '', ''],
                    colors: ['#87CEFA', '#00BFFF', '#1E90FF'],
                    chart: {
                        type: 'pie',
                        height: '400',
                        width: '550'
                    }
        }, 
            }
            
        },

        name: 'Livros',
        mounted(){
            
            this.listar()

        },

        methods:{

            listar(){
                Ultlivroalug.listar().then(resposta => {
                this.resula = resposta.data
            })
                Livromsalug.listar().then(resposta => {
                this.reslmsa = resposta.data
                this.series[0] = this.reslmsa[0].quantidade
                this.series[1] = this.reslmsa[1].quantidade
                this.series[2] = this.reslmsa[2].quantidade
                this.chartOptions.labels[0] = this.reslmsa[0].nomeliv
                this.chartOptions.labels[1] = this.reslmsa[1].nomeliv
                this.chartOptions.labels[2] = this.reslmsa[2].nomeliv
                this.loading = false
            })
            },
            
        }
    })
</script>
