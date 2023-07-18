import { useContext } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import UserContext from '../../contexts/user/UserContext.jsx';
import Products from '../Products/Products.jsx';

export function Home() {
  const userCtx = useContext( UserContext )
  const { user, verifyingToken, authStatus } = userCtx

  return (
    <Container>
      <h1>{ `Bienvenido ${ user?.fullName || "" }` }</h1>
      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://ibb.co/Qvh2DgY"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Raviolisl</h3>
              <p>Prueba nuestros raviolis caseros, hechos con la mejor harina de fuerza italiana.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://st.https://www.trattoria.cl/assets/img/recetas/tortellini-pesto-con-salmon.webp.com/1679308/1622/i/600/depositphotos_16225575-stock-photo-landscape-of-croatian-nature.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Tortellini</h3>
              <p>Nuestros tortellinis rellenos de carne de osobuco con queso ricotta.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://https://i.blogs.es/8dc839/penne-rigate-salvia-tomate/840_560.jpg.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Penne Rigatti</h3>
              <p>
                Nuestro mejor diseño de pastas para acaparar las mejores salsas con recetas italianas de origen.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Products></Products>
    </Container>
  )
}