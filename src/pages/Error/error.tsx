import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <>
      <div
        className="absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-blue-800 bottom-0 leading-5 h-full w-full overflow-hidden">
      </div>
      <div
        className="relative min-h-screen flex flex-row  justify-center bg-transparent rounded-3xl shadow-xl">
        <div className="flex-col flex self-center px-14 max-w-4xl z-10">
          <div className="flex flex-col text-gray-300">
            <h1 className="my-3 text-white font-bold text-5xl">Oops!</h1>
            <p className="pr-3 text-sm opacity-75">Desculpe, algo de errado aconteceu, por favor tente novamente.</p>
            <Link to={`/`}><button onClick={logout} className="mt-5 w-full flex justify-center bg-red-800  hover:bg-red-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500">
              Voltar
            </button></Link>
          </div>
        </div>
      </div>
    </>
  )
}