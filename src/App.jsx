import './App.css'

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Welcome to ShopEase</h1>
        <h2>Your One-Stop E-commerce Destination</h2>
      </header>
      <section className="card">
        <p>
          Discover the latest products, enjoy exclusive deals, and Experience Seamless shopping.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '24px' }}>
          <button
            className="btn-3d"
            onClick={() => alert('Browse our latest products!')}
          >
            Start Shopping
          </button>
          <button
            className="btn-3d"
            onClick={() => alert('Create your free account to get started!')}
          >
            Sign Up
          </button>
          <button
            className="btn-3d"
            onClick={() => alert('Check out our exclusive offers!')}
          >
            View Offers
          </button>
        </div>
      </section>
    </div>
  )
}

export default App