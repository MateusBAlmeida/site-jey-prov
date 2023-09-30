import { InstagramIcon, TwitterIcon } from 'lucide-react'
// import './App.css'

function App() {
  

  return (
    <div className='min-h-screen flex bg-gradient-to-b from-[#01f8fd] via-[#0abebf] to-[#fa6970] justify-center items-center'>
      <div className='justify-center '>
      <div className="justify-center min-h-full flex p-6">
      <h1 className='font-extrabold text-gray-800 text-2xl sm:text-6xl'>EM CONSTRUÇÃO</h1>
      </div>
      <div className="flex items-center gap-4 justify-center">
        
        <a href='https://www.instagram.com/jyngrey/'>
          <InstagramIcon className='w-10 h-10 text-gray-800' />
        </a>
        <a href='https://twitter.com/jyngrey'>
          <TwitterIcon className='w-10 h-10 mr-2 text-gray-800' />
        </a>
        
          <span className="text-sm text-muted-foreground">

          </span>
      </div>
      </div>
    </div>
  )
}

export default App
