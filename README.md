# Cadastro de Carro

**Requisitos Funcionais(RF)**
Deve ser possível cadastrar um novo carro
Deve ser possivel listar todas as categorias

**Regra de Negocios(RN)**
Não deve ser possível cadastrar um carro com uma placa já existente.
Não deve ser possivel alterar a placa de um carro já cadastrado.
O carro deve ser cadastrado com disponibilidade por padrão.
Somente usuario administrador pode cadastrar um carro.

# Listagem de Carros

**Requisitos Funcionais(RF)**
Deve ser possivel listar todos os carros disponiveis.
Deve ser possivel listar todos os carros disponiveis pelo nome da categoria
Deve ser possivel listar todos os carros disponiveis pelo nome da marca
Deve ser possivel listar todos os carros disponiveis pelo nome do carro

**Requisitos não Funcionais(RNF)**

**Regra de Negocios(RN)**
O usuário não precisa estar logado no sistema 

# Cadastro de especificação no Carros

**Requisitos Funcionais(RF)**
Deve ser possivel cadastrar uma especificação para um carro.
Deve ser possivel listar todas as especificações.
Deve ser possivel listar todos os carros.

**Regra de Negocios(RN)**

Não deve ser possivel cadastrar uma especificação para um carro não cadastrado
Não deve ser possivel cadastrar uma especificação já existente para o mesmo carro
Somente usuario administrador pode cadastrar uma especificação.

# Cadastro da imagem do carro

**Requisitos Funcionais(RF)**
Deve ser possivel cadastrar a imagem do carro

**Requisitos não Funcionais(RNF)**
Utilizar o multer para upload dos arquivos

**Regra de Negocios(RN)**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro
Somente usuario administrador pode cadastrar.

# Aluguel do carro

**Requisitos Funcionais(RF)**
Deve ser possivel cadastrar um aluguel
Deve ser possivel listar todos os carros


**Regra de Negocios(RN)**
O aluguel deve ter duração minima de 24 horas.
Não deve ser possivel cadastrar um aluguel caso já exista um aberto para o mesmo usuário
Não deve ser possivel cadastrar um aluguel caso já exista um aberto para o mesmo carro
O usuario deve estar logado na aplicacao