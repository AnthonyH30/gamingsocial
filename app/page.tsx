import LpBlock from '@/components/LpBlock'
import LpCards from '@/components/LpCards'
import LpFooter from '@/components/LpFooter'
import LpHeader from '@/components/LpHeader'
import LpInfo from '@/components/LpInfo'
import LpTop from '@/components/LpTop'
import Questions from '@/components/Questions'


export default function Home() {
  return (
    <main>
      <LpHeader />
      <LpTop />
      <LpCards />
      <LpBlock />
      <LpInfo />
      <Questions />
      <LpFooter />
    </main>
  )
}
