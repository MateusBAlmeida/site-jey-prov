import { InstagramIcon, TwitterIcon } from 'lucide-react'
// import './App.css'

function App() {
  

  return (
    <div className='min-h-screen flex bg-slate-800 justify-center'>
      <div className="flex items-center gap-4">
      <h1 className='font-extrabold text-cyan-50'>EM INVESTIGAÇÃO</h1>
      </div>
      <div className="flex items-center gap-4">
        
        <a href='https://www.instagram.com/jyngrey/'>
          <InstagramIcon className='w-10 h-10 text-cyan-50' />
        </a>
        <a href='https://twitter.com/jyngrey'>
          <TwitterIcon className='w-10 h-10 mr-2' />
        </a>
        
          <span className="text-sm text-muted-foreground">

          </span>
      </div>
    </div>
  )
}

export default App
