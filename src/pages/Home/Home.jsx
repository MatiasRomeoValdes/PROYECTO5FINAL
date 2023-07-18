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
              src="https://img-global.cpcdn.com/recipes/fbadf1dd44fac0a5/680x482cq70/homemade-italian-penne-rigate-pasta-recipe-main-photo.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Raviolis</h3>
              <p>Prueba nuestros raviolis caseros, hechos con la mejor harina de fuerza italiana.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.food52.com/T9IqCqj-126tm6to78WCByJB068=/1008x672/filters:format(webp)/2507db3c-38ab-40d4-afbf-7cae1b9d5fe8--Homemade_Ravioli_with_Ricotta_Cheese_and_Spinach_Filling.jpg"
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
              src="https://www.gourmet.cl/wp-content/uploads/2016/09/Tortellini-ajustada-web-570x458.jpg"
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