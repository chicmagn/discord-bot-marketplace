import './App.css'
import { createBrowserRouter, RouterProvider, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import { Container, Box } from '@chakra-ui/react'
import Servers from './pages/Servers'
import EmojisPage from './pages/EmojisPage'
import BotDetail from './pages/BotDetailPage'
import BotListPage from './pages/BotListPage'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Body/>,
//     children: [{
//       path: 'home',
//       element: <Home/>,
//     },{
//       path: 'bots',
//       element: <Bots/>,
//       children: [
//         {
//           path: 'bots/:botId',
//           element: <BotDetail/>
//         }
//       ]
//     },{
//       path: 'servers',
//       element: <Servers/>
//     },{
//       path: 'emojis',
//       element: <Emojis/>
//     }]
//   }
// ])

function App() {

  return (
    <Box maxW='10xl' bg='discord.900'>
      {/* <Header></Header> */}
      {/* <RouterProvider router={router}/> */}
      {/* <Footer></Footer> */}
      <Router>
        <Header />
        {/* <Body /> */}
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='home' element={<Home />} />
          <Route path='bots' element={<BotListPage />}/>
          <Route path='bots/:botId' element={<BotDetail />} />
          <Route path='servers' element={<Servers />} />
          <Route path='emojis' element={<EmojisPage />} />
          <Route path='emojis/:emojiTag' element={<EmojisPage />} />
        </Routes>
        <Footer />
      </Router>
    </Box>
  )
}

export default App
