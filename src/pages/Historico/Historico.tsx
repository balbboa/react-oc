import Ocorrencias from "../../components/ocorrencias"


function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Historico() {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-5">Histórico de Ocorrências</h1>
      <div className="flex flex-col">
        <Ocorrencias />
        <Ocorrencias />
        <Ocorrencias />
      </div>
    </>
  )
}