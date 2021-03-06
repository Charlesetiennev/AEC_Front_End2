// ModifierLibrairie.js
// Par Charles-Etienne Villemure
// Le 14 Septembre 2020
import React, { useState, useEffect } from 'react';
import {
  Form,
  InputGroup,
  FormControl,
  Button,
  Image,
  Row,
  Col,
  Container,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { API } from '../CrudCrudAPI/API';
import { toast } from 'react-toastify';

export default function ModifierLibrairie(props) {
  const [photos, setPhotos] = useState('');
  const [donneesRecues, setDonneesRecues] = useState({
    nom: '',
    logo: '',
    description: '',
    lien: '',
  });
  const [libID, setlibID] = useState(
    props.location.pathname.substring(19, props.location.pathname.length)
  );
  console.log(libID);
  useEffect(() => {
    getLibrairieInfos();
  }, []);
  //   Recuperation des infos
  async function getLibrairieInfos() {
    try {
      const response = await fetch(API + libID);
      const reponseDeApi = await response.json();
      setDonneesRecues(reponseDeApi);
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }
  //   Envoie des Modifications
  async function editLibrairie(nomLib, logoLib, descriptionLib, lienLib) {
    try {
      const response = await fetch(API + libID, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: nomLib,
          logo: logoLib,
          description: descriptionLib,
          lien: lienLib,
        }),
      });
      if (response.ok) {
        props.history.push('/listeLibrairies');
        // toast.success('Modification de ' + nom);

        return response;
      }
      throw new Error('Request failed!');
    } catch (error) {
      console.log(error);
    }
  }
  //Suppression
  async function SupprLibrairie() {
    try {
      const response = await fetch(API + libID, {
        method: 'delete',
      });
      if (response.ok) {
        //const jsonResponse = await response.json();
        props.history.push('/listeLibrairies');
        toast.error('Supression de ' + donneesRecues.nom);

        return response;
      }
      throw new Error('Request failed!');
    } catch (error) {
      console.log(error);
    }
  }

  // HandleEdit
  function handleEdit(event) {
    event.preventDefault();

    const nomLib = document.getElementById('nomModif').value;
    const logoLib = document.getElementById('logoModif').value;
    const descriptionLib = document.getElementById('descriptionModif').value;
    const lienLib = document.getElementById('lienModif').value;

    editLibrairie(nomLib, logoLib, descriptionLib, lienLib);
  }
  //   HandlePhotoChange
  function handlePhoto(event) {
    const photos = document.getElementById('logoModif').value;
    setPhotos(photos);
  }
  return (
    <Container>
      <Link exact to='/listeLibrairies' className='btn btn-primary'>
        Annuler la modification
      </Link>
      <h1>Modification de {donneesRecues.nom}</h1>

      <Row>
        <Col xs='6'>
          <h3>
            Image Actuelle
            <br />
          </h3>
          <Image src={donneesRecues.logo} rounded fluid />
        </Col>
        <Col xs='6'>
          <h3>
            Nouvelle Image
            <br />
          </h3>
          {donneesRecues.logo !== '' && <Image src={photos} rounded fluid />}
        </Col>
      </Row>

      <Row>
        <Col xs='8'>
          <Form>
            <Form.Row>
              <Col sm={3} className='my-1'>
                <Form.Label htmlFor='nomModif' srOnly>
                  Nom
                </Form.Label>
                <InputGroup className='mb-2'>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Nom : </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    id='nomModif'
                    placeholder='Username'
                    defaultValue={donneesRecues.nom}
                  />
                </InputGroup>
              </Col>
              <Col xs={3} className='my-1'>
                <Form.Label htmlFor='lienModif' srOnly>
                  Lien
                </Form.Label>
                <InputGroup className='mb-2'>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Lien : </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    id='lienModif'
                    placeholder='lien de la librairie'
                    defaultValue={donneesRecues.lien}
                  />
                </InputGroup>
              </Col>
            </Form.Row>
            <Form.Group controlId='descriptionModif'>
              <Form.Label>Description </Form.Label>
              <Form.Control
                placeholder='Description de la librairie'
                defaultValue={donneesRecues.description}
              />
            </Form.Group>
            <Form.Group controlId='logoModif'>
              <Form.Label>URL du logo</Form.Label>
              <Form.Control
                type='text'
                placeholder='Entrer une URL valide'
                onBlur={handlePhoto}
                defaultValue={donneesRecues.logo}
              />
            </Form.Group>
          </Form>
          <Button type='submit' onClick={handleEdit}>
            Enregistrer
          </Button>
          <Button onClick={SupprLibrairie}>Effacer</Button>
        </Col>
      </Row>
    </Container>
  );
}
