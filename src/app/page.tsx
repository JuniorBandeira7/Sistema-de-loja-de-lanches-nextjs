import Card from "./components/Card"

const description = "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
const number = 23.50

export default function Home() {
  return (
    <>
      <Card photoUrl="/ham.jpg" productName="Hamburguer" price={number.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} description={description}></Card>
    </>
  )
}
