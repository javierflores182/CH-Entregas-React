import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
// import data from '../data/productos.json'
import { Row, Col, Card } from 'react-bootstrap';
import { NavLink,useParams } from 'react-router-dom';
import { getFirestore, getDocs, where, query, collection } from 'firebase/firestore';




export const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    // useEffect(() => {
    //     new Promise((resolve) => setTimeout(() => resolve(data), 2000))
    //         .then((response) => {
    //             if (!id) {
    //                 setItems(response);
    //             } else {
    //                 const filtrado = response.filter((i) => i.category === id);
    //                 setItems(filtrado);
    //             }
    //         })
    //         .finally(() => setLoading(false));
    // }, [id]);


    useEffect(() => {
        const db = getFirestore()
        const ref = !id ? collection(db, "productos")
        :query(collection(db, "productos"),where("category","==",id))
        getDocs(ref).then((snapshot)=>{
            setItems(
                snapshot.docs.map((doc)=>{
                    return {id: doc.id, ...doc.data()}
                })
            )
        }).finally(()=> setLoading(false))
    }, [id]);

    if (loading) return "espere";

    return (
        <Container className='mt-4'>
            <h1>Productos</h1><br/>
            <Row>
                {items.map((i) => (
                    <Col key={i.codigo} sm={12} md={6} lg={4} className="mb-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{i.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{i.category}</Card.Subtitle>
                                <Card.Text>{i.description}</Card.Text>
                                <Card.Text>{i.price}</Card.Text>
                                <Card.Text>{i.brand}</Card.Text>
                                <Card.Link as={NavLink} to={`/item/${i.id}`}>Ver detalle</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};