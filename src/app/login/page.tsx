import Button from "../components/Button";
import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8">
            <form className="space-y-6" action="#">
                <h5 className="text-xl font-medium text-gray-900">Olá, bem vindo de volta!</h5>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="seu@email.com" required />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Senha</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                </div>
                    <a href="#" className="ms-auto text-sm text-blue-700 hover:underline">Esqueceu a senha?</a>
                <Button className="w-full">
                    Logar
                </Button>
                <div className="text-sm font-medium text-gray-500">
                    Novo aqui? <a href="#" className="text-blue-700 hover:underline">Registrar</a>
                </div>
            </form>
        </div>  
    </div>
  )
}
