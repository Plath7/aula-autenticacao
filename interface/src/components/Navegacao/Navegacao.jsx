import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import AuthRequests from '../../fetch/AuthRequests'; // Importe o AuthRequests para manipular o token
import { useNavigate } from 'react-router-dom'; // Importe o hook para navegação

function Navegacao() {
    const navigate = useNavigate(); // Hook para redirecionar o usuário

    const estiloNavbar = {
        backgroundColor: 'var(--primaryColor)',
    }

    const estiloNavOptions = {
        color: 'var(--fontColor)',
    }

    // Função para verificar se o usuário está logado (se há token no localStorage)
    const isLoggedIn = () => {
        return !!localStorage.getItem('token'); // Retorna true se o token existe
    }

    // Função de logout
    const handleLogout = () => {
        AuthRequests.removeToken(); // Remove o token
        navigate('/login'); // Redireciona para a página de login após o logout
    }

    return (
        <>
            <Navbar style={estiloNavbar}>
                <Container>
                    <Navbar.Brand href="/" style={estiloNavOptions}>Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/pessoas" style={estiloNavOptions}>Pessoas</Nav.Link>
                    </Nav>
                    {
                        isLoggedIn() ? (
                            // Exibe o botão de logout se o usuário estiver logado
                            <Button variant='light' onClick={handleLogout}>Logout</Button>
                        ) : (
                            // Exibe o botão de login se o usuário não estiver logado
                            <Button href='/login' variant='light'>Login</Button>
                        )
                    }
                </Container>
            </Navbar>
        </>
    );
}

export default Navegacao;