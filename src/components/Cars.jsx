

function Cars(props) {
    const cars=props.cars
    const theme=cars.theme
  return (
    <section>
      <img src={cars.imgUrl} alt={cars.title} />
      <h2>{cars.title}</h2>
      <p>{cars.description}</p>
    </section>
  )
}

export default Cars

