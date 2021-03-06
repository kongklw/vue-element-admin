import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import Welcome from '@/components/page/Welcome.vue'
import Notify from '@/components/page/Notify.vue'
import Department from '@/components/page/Department.vue'
import User from '@/components/page/User.vue'
import E404 from '@/components/page/E404.vue'
import Excel from '@/components/page/Excel.vue'
import Echarts from '@/components/page/Echarts.vue'

import VueInit from '@/components/Blog/vue-init.vue'
import ExportExcel from '@/components/Blog/exportExcel.vue'
import E500 from '@/components/page/E500.vue'
import snippet_list from'@/components/Blog/snippet_list.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '*',redirect:'/' },
     {
	      path: '/',component: Home,redirect: '/index',
	      children: [
	        { path: 'index',component: Welcome },
	        { path: 'notify',component: Notify },
	        { path: 'department',component: Department },
	        { path: 'user', component: User },
	        { path: 'e404', component: E404 },
	        { path: 'excel', component: Excel },
	        { path: 'vueInit', component: VueInit },
	        { path: 'exportExcel', component: ExportExcel },
	        { path: 'echarts', component: Echarts },
			{ path: 'e500',component:E500},
			{ path: 'snippet',component:snippet_list},

	      ]
    }
  ]
})
