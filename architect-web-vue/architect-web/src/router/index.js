import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "../page/HomePage.vue"
import ContactPage from "../page/ContactPage.vue"
import CertificationPage from "../page/CertificationPage.vue"
import OurProjectPage from "../page/OurProjectPage.vue"
import GalleryPage from "../page/PhotoGalleryPage.vue"
import SampleProject from "../page/SampleProject.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    },
    {
      path: '/certifications',
      name: 'certifications',
      component: CertificationPage
    },
    {
      path: '/projects',
      name: 'projects',
      component: OurProjectPage
    },
    {
      path: '/sampleproject',
      name: 'sampleproject',
      component: SampleProject
    },
    {
      path: '/gallery',
      name: 'gallery',
      component:GalleryPage
    }
  ]
})

export default router
