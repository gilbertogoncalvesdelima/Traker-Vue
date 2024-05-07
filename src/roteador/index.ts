// Importa as funções e componentes necessários do Vue Router e dos arquivos do projeto.
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarefas from '../views/Tarefas.vue'
import Projetos from '../views/Projetos.vue'
import Formulario from '../views/Projetos/Formulario.vue'
import Lista from '../views/Projetos/Lista.vue'

// Define o tipo de registro de rota usando RouteRecordRaw.
const rotas: RouteRecordRaw[] = [
    {
        // Rota raiz, exibindo a lista de tarefas.
        path: '/',
        name: 'Tarefas',
        component: Tarefas
    },
   
        
    
]

// Cria uma instância de roteador usando o modo de histórico hash e as rotas definidas.
const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

// Exporta a instância do roteador para ser usada no aplicativo principal.
export default roteador;