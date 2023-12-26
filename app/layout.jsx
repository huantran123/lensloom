import '@styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
// components
import Nav from '@components/Navbar/Nav'
import Provider from '@components/Provider'

export const metadata = {
  title: 'LensLoom',
  description: 'Discover and Share Photos'
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout