import Loadable from '@/utils/loadable'

const Error = Loadable(() => import('@/pages/404'))
const Home = Loadable(() => import('@/pages/home'))

export {
    Error,
    Home,
}
