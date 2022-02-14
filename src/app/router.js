import { createWebHistory, createRouter } from 'vue-router';
import Booking from './components/Booking.vue'
import Feed from './components/Feed.vue'
import PostLecture from './components/PostLecture.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import AboutUs from './components/AboutUs.vue'
import Payment from "./components/Payment.vue"
import Profil from "./components/ProfilUser.vue"
import AddTeacher from './components/AddTeacher.vue'
import AddType from './components/AddType.vue'
import Lectures from './components/Lectures.vue'

const routes = [
	{
		path: '/Lectures',
		name: 'Lectures',
		component: Lectures,
	},
    {
        path: '/',
        name: 'Feed',
        component: Feed
    },
	{
        path: '/Post',
        name: 'Post',
        component: PostLecture
    },
	{
        path: '/Login',
        name: 'Login',
        component: Login
    },
	{
        path: '/Signup',
        name: 'Signup',
        component: Signup
    },
	{
        path: '/Signup',
        name: 'Signup',
        component: Signup
    },
	{
        path: '/AboutUs',
        name: 'AboutUs',
        component: AboutUs
    },
    {
        path:"/Payment",
        name:'Payment',
        component:Payment
    },
    {
        path:"/Profil",
        name:'Profil',
        component:Profil
    },
    {
        path:"/ListUser",
        name:'ListUser',
        component:AddTeacher
    },
    {
        path:"/AddType",
        name:'AddType',
        component:AddType
    },
    {
        path:"/Booked",
        name:'Booked',
        component:Booking
    }
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;