import Hero from '@/libs/components/hero/Hero'
import Navbar from '@/libs/components/navbar/Navbar'
import ScrollToTopButton from '@/libs/components/scrolltotop/ScrollToTopButton'
import Search from '@/libs/components/search/Search'

export default function Home() {
  return (
    <main className="container">
      <Navbar />
      <Hero />
      <Search />
      <ScrollToTopButton />
    </main>
  )
}
