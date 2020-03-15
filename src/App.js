import React,{Component} from 'react';
import {Container, Row, Col, Dropdown, Breadcrumb, Carousel, ListGroup, Jumbotron, Button, Form, Modal} from 'react-bootstrap';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      status : false
    }
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal(){
    this.setState((state,props)=>{
      return{status:!state.status};
    })
  }

  render(){
    return(
      <div>
        <Container className="mw-100" >
          <Row style={{backgroundColor:"black"}}>
            <Col md={10} className="px-0">
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-Basic">
                  Pilih Bahasa
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Indonesia</Dropdown.Item>
                  <Dropdown.Item href="#">English</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col className="px-0">
              <img width={40} height={40} className="mr-2" src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" alt="user"/>
              <p style={{color:"white"}}>Alan Saputra</p>
            </Col>
          </Row>

          <Row className="mw-100 p-0 m-0">
            <Col md={8}></Col>
            <Col className="p-0 m-0">
              <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/">Berita</Breadcrumb.Item>
                <Breadcrumb.Item active>Bola</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>

        <Container>
          <Carousel>
            <Carousel.Item>
              <img
               className="d-block w-100"
               height={450}
               src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
               alt="Slide ke-1"
              />
              <Carousel.Caption>
                <h3>Sani Rizki Fauzi Tegaskan Mental Pemain Timnas U-23 Tetap Bagus</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
               className="d-block w-100"
               height={450}
               src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
               alt="Slide ke-2"
              />
              <Carousel.Caption>
                <h3>Neymar Bahas Kontrak Baru Di Paris Saint-Germain</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
               className="d-block w-100"
               height={450}
               src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
               alt="Slide ke-3"
              />
              <Carousel.Caption>
                <h3>Inggris Mau Jadi Tim Terbaik Di Dunia</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
        <br/>
        <Container className="mw-100">
          <Row>
            <Col className="px-0">
              <ListGroup.Item active>Liga 1 Indonesia</ListGroup.Item>
              <ListGroup.Item>Liga Primer Inggris</ListGroup.Item>
              <ListGroup.Item>Divisi Primera</ListGroup.Item>
              <ListGroup.Item>Seri A</ListGroup.Item>
              <ListGroup.Item>Ligue 1</ListGroup.Item>
              <ListGroup.Item>Bunde Liga</ListGroup.Item>
            </Col>
            <Col md={5}>
              <Jumbotron>
                <h1>DIVISI PRIMERA</h1>
                <p>Main Untuk Catalunya, Gerard Pique Minta Dihormati</p>
                <Button variant="primary">Read More</Button>
              </Jumbotron>
            </Col>
            <Col>
              <Form onSubmit={this.handleLogin}>
                <Form.Group >
                  <center>
                    <img
                      width={60}
                      height={60}
                      src="https://img.icons8.com/bubbles/50/000000/user.png"
                      alt="user"
                    />
                    <h3>Silahkan Login</h3>
                  </center>
                </Form.Group>
                <Form.Group>
                  <Form.Control type="text" placeholder="Masukkan Nama"/>
                </Form.Group>
                <Form.Group>
                  <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <Form.Group>
                  <Form.Check type="checkbox" label="Term & Condition"/>
                </Form.Group>

              </Form>
              <Button variant="primary" type="submit" onClick={this.handleModal}>
                Login
              </Button>
            </Col>
          </Row>
          <Modal show={this.state.status} onHide={this.handleModal}>
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Anda Berhasil Login
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleModal}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleModal}>
                Save Username & Password
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </div>
    )
  }
}

export default App;
