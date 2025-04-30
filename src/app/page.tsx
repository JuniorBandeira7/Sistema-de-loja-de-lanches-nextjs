import Card from "./components/Card"
import Header from "./components/Header"
import PhotoSection from "./components/PhotoSection"

const description = "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
const number = 23.50

export default function Home() {
  return (
    <>
      <Header></Header>
      <PhotoSection></PhotoSection>
      <main className="w-full flex justify-center">
        <div className="lg:w-[70%] sm:w-[90%] flex items-center flex-col mt-16 bg-gray-100 rounded-lg pr-4 pl-4">
          <h1 className="text-5xl font-bold mt-2">Burguers</h1>
          <div className="grid grid-cols-1 gap-2 sm:gap-4 sm:grid-cols-2 mt-8">
            <Card photoUrl="/ham.jpg" productName="Hamburguer" price={number.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} description={description}></Card>
            <Card photoUrl="/ham.jpg" productName="Hamburguer" price={number.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} description={description}></Card>
            <Card photoUrl="/ham.jpg" productName="Hamburguer" price={number.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} description={description}></Card>
            <Card photoUrl="/ham.jpg" productName="Hamburguer" price={number.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} description={description}></Card>
            <Card photoUrl="/ham.jpg" productName="Hamburguer" price={number.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} description={description}></Card>
            <Card photoUrl="/ham.jpg" productName="Hamburguer" price={number.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} description={description}></Card>
            <Card photoUrl="/ham.jpg" productName="Hamburguer" price={number.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} description={description}></Card>
          </div>
        </div>
      </main>
    </>
  )
}
