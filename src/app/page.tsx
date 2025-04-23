import Card from "./components/Card"
import Header from "./components/Header"

const description = "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
const number = 23.50

export default function Home() {
  return (
    <>
      <Header></Header>
      <section className="h-[600px] relative flex items-center">
        <img src="/s1.jfif" alt="" className="object-cover w-full h-full brightness-50 absolute"/>
        <div className="w-full relative flex items-center content-center">
          <h1 className="text- text-white">Aqui vai ficar vewsvew</h1>
        </div>
      </section>
      <Card photoUrl="/ham.jpg" productName="Hamburguer" price={number.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} description={description}></Card>
    </>
  )
}
