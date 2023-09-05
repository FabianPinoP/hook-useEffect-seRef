import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const SuperHeroApi = () => {
  const [superHero, setSuperHero] = useState("batman"); // Estado para el término de búsqueda
  const [superHeroData, setSuperHeroData] = useState([]); // Estado para los datos de la API

  const searchSuperhero = () => {
    const apiUrl = `https://www.superheroapi.com/api/10228469172019406/search/${superHero}`;
    axios
      .get(apiUrl)
      .then((response) => {
        console.log("Datos de la API:", response.data.results);
        setSuperHeroData(response.data.results);
      })
      .catch((err) => {
        console.log("Error al obtener datos de la API:", err);
      });
  };
  // Usar useEffect para realizar la búsqueda cuando searchTerm cambie
  useEffect(() => {
    searchSuperhero();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [superHero]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuperHero(e.target[0].value);
  };

  return (
    <>
      <Container>
        <h1>Super Hero API</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>search super hero</Form.Label>
            <Form.Control type="text" placeholder="Enter super hero" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
        <div className="mt-5 d-flex justify-content-center gap-3">
          {superHeroData ? superHeroData.map((item) => (
            <Card key={item.id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.image.url} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  <span className="skills">Name: </span>
                  {item.biography["full-name"]} <br />
                  <span className="skills">Biography: </span>
                  {item.biography["aliases"]}
                </Card.Text>
              </Card.Body>
            </Card>
          )): <h1>Not found</h1>}
        </div>
      </Container>
    </>
  );
};

export default SuperHeroApi;
