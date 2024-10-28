import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">My App</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>          
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

function CarSelect({ car }) {
  return (
    <div className="card mb-4" style={{ width: '18rem' }}>
      <img src={car.image} className="card-img-top" alt={car.model} />
      <div className="card-body">
        <h5 className="card-title">{car.model}</h5>
        <p className="card-text">{car.description}</p>
        <p className="card-text"><strong>Price:</strong> {car.price}</p>
        <button className="btn btn-primary">Select Car</button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3">
        <a href="#" className="text-dark">Privacy Policy</a> | 
        <a href="#" className="text-dark">Terms of Service</a> 
        <p>© 2023 My App <FontAwesomeIcon icon={faCar} /></p>
      </div>
    </footer>
  );
}

function App() {
  const cars = [
    {
      model: 'Tesla Model S',
      description: 'Electric sedan with high performance and luxury features.',
      price: '$94,990',
      image: 'https://via.placeholder.com/150' // Zamień na rzeczywisty link do zdjęcia
    },
    {
      model: 'Ford Mustang',
      description: 'Iconic American muscle car with powerful performance.',
      price: '$43,995',
      image: 'https://via.placeholder.com/150' // Zamień na rzeczywisty link do zdjęcia
    },
    {
      model: 'Chevrolet Corvette',
      description: 'High-performance sports car with a sleek design.',
      price: '$63,000',
      image: 'https://via.placeholder.com/150' // Zamień na rzeczywisty link do zdjęcia
    },
    {
      model: 'BMW M3',
      description: 'Luxury sports sedan known for its performance and handling.',
      price: '$72,800',
      image: 'https://via.placeholder.com/150' // Zamień na rzeczywisty link do zdjęcia
    },
    {
      model: 'Porsche 911',
      description: 'Legendary sports car with exceptional handling and performance.',
      price: '$101,200',
      image: 'https://via.placeholder.com/150' // Zamień na rzeczywisty link do zdjęcia
    },
    {
      model: 'Audi A6',
      description: 'Luxury sedan with advanced technology and comfortable interior.',
      price: '$55,900',
      image: 'https://via.placeholder.com/150' // Zamień na rzeczywisty link do zdjęcia
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          {cars.map((car, index) => (
            <div className="col-md-4" key={index}>
              <CarSelect car={car} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
