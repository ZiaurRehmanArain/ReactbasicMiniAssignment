import Carousel from 'react-bootstrap/Carousel';

function Sliders() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={400+'px'}
          src="https://media.istockphoto.com/id/187876557/photo/classroom.jpg?s=612x612&w=is&k=20&c=lAzFK-7M5VuTdeWTFa8ui3jQJLhK8bgcbTNZbafnh_k="
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={400+'px'}

          src="https://media.istockphoto.com/id/1401277435/photo/empty-classroom-at-elementary-school.jpg?s=612x612&w=is&k=20&c=dR8Yufx_9oT88qPe1-gppdkFlqV_X1q5p1lpZ5ZnEX8="
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={400+'px'}

          src="https://media.istockphoto.com/id/187975890/photo/classroom.jpg?s=612x612&w=is&k=20&c=cfBREErFiGPUsBgPmwVKwSslC7FPhpvJndqMgV8vY2U="
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Sliders;