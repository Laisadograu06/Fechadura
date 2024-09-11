const CadastroPage = () => {
    return (
        <div>
            <h1>Cadastro</h1>
            <form>
                <label>
                    Nome:
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <br />
                <label>
                    Senha:
                    <input type="password" name="password" />
                </label>
                <br />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastroPage;
