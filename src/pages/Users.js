import React, { useEffect, useState } from "react";
import { Table, Container, Spinner, Alert, Button } from "react-bootstrap";
import AppNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8004/api/usuarios");
        if (!response.ok) {
          throw new Error("Error al obtener la lista de usuarios");
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8004/api/usuarios/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("No se pudo eliminar el usuario");
      }
      setSuccessMessage("Usuario eliminado correctamente.");
      setTimeout(() => setSuccessMessage(""), 3000);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (err) {
      setError("No se pudo eliminar el usuario.");
      setTimeout(() => setError(null), 3000);
    }
  };

  return (
    <>
      <AppNavbar />
      <div className="content">
        <Container className="my-5">
          <h1 className="text-center page-title">Gestión de Usuarios</h1>
          {successMessage && (
            <Alert variant="success" className="text-center">
              {successMessage}
            </Alert>
          )}
          {error && (
            <Alert variant="danger" className="text-center">
              {error}
            </Alert>
          )}
          {loading ? (
            <div className="text-center my-5">
              <Spinner animation="border" role="status" />
              <span className="visually-hidden">Cargando...</span>
            </div>
          ) : (
            <Table striped bordered hover responsive="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Email</th>
                  <th>Teléfono</th>
                  <th>Fecha de Nacimiento</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.nombre}</td>
                    <td>{user.apellido}</td>
                    <td>{user.email}</td>
                    <td>{user.telefono}</td>
                    <td>{user.fechaNacimiento.split("-").reverse().join("/")}</td>
                    <td>
                      <Button
                        variant="warning"
                        size="sm"
                        className="mx-1"
                        onClick={() => console.log("Funcionalidad de edición")}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        className="mx-1"
                        onClick={() => handleDelete(user.id)}
                      >
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Users;
