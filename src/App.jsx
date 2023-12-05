import Layout from './components/Layout'
import Hero from './components/Hero'
import imgHero1 from './assets/paysage-1.jpg'
import LgmtList from './components/LgmtList'

function App() {
  
  return (
    <>
      <Layout>
        <main>
          <Hero background={imgHero1}>
            Chez vous, partout et ailleurs
          </Hero>
          <LgmtList />
        </main>
      </Layout>
    </>
  )
}

export default App
