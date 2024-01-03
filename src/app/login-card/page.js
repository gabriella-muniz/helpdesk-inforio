import style from '../login-card/login-card.css'

export default function LoginCard({ children, title }) {
    return (
     <>
      <div className='card'>
        <div className='login-cadastro'>
          <div className='img-card' >
          <img
              src="http://www.inforio.com.br/images/logo.png"
              alt="logo"
          />
          </div>
          <h2 className='title'>{title}</h2>
          {children}
        </div>
      </div>
     </>
      
    )
  }