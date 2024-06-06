import { useContext } from 'react';
import './style.css'
import { UserContext } from '../../contexts/UserGlobalContext';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const userContext = useContext(UserContext);
    const navigate = useNavigate();
    
    const consultas = [
        {
            data: '19/10/2024',
            status: 'AGENDADA',
            medico: 'Dra. Juliana Almeida'
        }
    ]

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const cpf = e.target.elements.cpf.value;
        const password = e.target.elements.password.value;

        if(cpf == 'admin' && password == 'admin') {
            userContext.funcs.handleLogin({name: 'Vitória Alves', consultas});
            navigate('/')
        }

        
    }

    return (
        <div className="container login-container">
            <div className="row justify-content-center mt-5">
                <div className="col-12 col-md-6">
                    <div className="card border-0">
                        <div className="card-body login-form">
                            <h1 className='mb-5 text-green-default'>Login</h1>
                            <form onSubmit={handleLoginSubmit}> 
                                <div className="form-group mb-5 ">
                                    <label htmlFor="cpf" className='font-weight-bolder'>CPF</label>
                                    <input
                                        type="text"
                                        className="form-control border-0 border-bottom"
                                        id="cpf"
                                        placeholder="XXX.XXX.XXX-XX"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password">Senha</label>
                                    <input
                                        type="password"
                                        className="form-control border-0 border-bottom"
                                        id="password"
                                        placeholder="Digite sua senha"
                                    />
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button type="button" className="btn text-decoration-none">
                                        Esqueceu sua senha?
                                    </button>
                                    <button type="submit" className="green-btn" >
                                        Entrar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}