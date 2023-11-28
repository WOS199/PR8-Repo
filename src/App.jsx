import Layout from './components/Layout'
import Hero from './components/Hero'
import LgmtList from './components/LgmtList'

function App() {
  
  return (
    <>
      <Layout>
        <Hero>
          Chez vous, partout et ailleurs
        </Hero>
        <LgmtList />
      </Layout>
    </>
  )
}

export default App
