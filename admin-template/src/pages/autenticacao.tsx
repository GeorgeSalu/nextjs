import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconeAtencao } from "../components/icons";


export default function Autenticacao() {

  const [erro, setErro] = useState(null)
  const [modo, setModo] = useState<'login'|'cadastro'>('login')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function exibirErro(msg, tempoEmSegundos = 5) {
    setErro(msg)
    setTimeout(() => setErro(null), tempoEmSegundos * 1000)
  }

  function submeter() {
    if(modo === 'login') {
      console.log('login')
      exibirErro('ocorreu um erro no login')
    } else {
      console.log('cadastrar')
      exibirErro('ocorreu um erro no cadastro')
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img
          src="https://source.unsplash.com/random" 
          alt="Imagem da tela de autenticacao"  
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="m-10 w-full md:w-1/2">
        <h1 className={`
          text-xl font-bold mb-5
        `}>
          {modo === 'login' ? 'Entre om sua conta' : 'cadastrese na plataforma'}
        </h1>

        {erro ? (
          <div className={`
            flex items-center
            bg-red-400 text-white py-3  px-5 my-2
            border border-red-700 rounded-lg
          `}>
            {IconeAtencao(7)}
            <span className="ml-3">{erro}</span>
          </div>
        ) : false}

        <AuthInput 
          label="Email" 
          tipo="email"
          valor={email}
          valorMudou={setEmail} 
          obrigatorio
        />
        <AuthInput 
          label="Senha"
          tipo="password" 
          valor={senha}
          valorMudou={setSenha} 
        />
        <AuthInput 
          label="Confirmacao de Senha"
          tipo="password" 
          valor={senha}
          valorMudou={setSenha} 
          obrigatorio
          naoRenderizarQuando={false}
        />

        <button onClick={submeter} className={`
          w-full bg-indigo-500 hover:bg-indigo-400
          text-white rounded-lg px-4 py-3 mt-6
        `}>
          {modo === 'login' ? 'Entrar' : 'cadastrar'}
        </button>

        <hr className="my-6 border-gray-300 w-full" />

        <button onClick={submeter} className={`
          w-full bg-red-500 hover:bg-indigo-400
          text-white rounded-lg px-4 py-3 
        `}>
          Entrar com google
        </button>

        {modo === 'login' ? (
          <p className="mt-8">
            Novo por aqui ?
            <a onClick={() => setModo('cadastro')} className={`
              text-blue-500 hover:text-blue-700 font-semibold
              cursor-pointer
            `}>
              Crie uma conta gratuitamente?
            </a>
          </p>
        ) : (

          <p className="mt-8">
            Ja faz parte da nossa comunidade ?
            <a onClick={() => setModo('login')} className={`
              text-blue-500 hover:text-blue-700 font-semibold
              cursor-pointer
            `}>
              Entre com usas credencias
            </a>
          </p>
        )}
      </div>
    </div>
  )
}