import Layout from '../../components/layout/Layout'
import Hero from '../../components/hero/Hero'
import imgHero1 from '../../assets/paysage-1.jpg'
import LodgingList from '../../components/lodgingList/LodgingList'

function Home() {
  
  return (
    <>
      <Layout>
        <main>
          <Hero background={imgHero1}>
            Chez vous, partout et ailleurs
          </Hero>
          <LodgingList />
        </main>
      </Layout>
    </>
  )
}

export default Home
