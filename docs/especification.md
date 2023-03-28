# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Milena Silva tem 34 anos é empresária, mãe de 2 filhos (Arthur de 5 anos e Laura de 7 anos) e tem uma rotina bem corrida. Ela e o marido não conseguem levar nem buscar os filhos na escola e em atividades extracurriculares, precisam de um auxílio para o transporte e locomoção dos mesmos. Com isso está buscando um meio de conseguir transporte com segurança e que possa os acompanhar mesmo longe dos filhos. 

Felipe Alves tem 35 anos, é médico e pai solteiro da Amanda de 6 anos. Com a escala de plantões e consultas no dia a dia, tem dias que não consegue levar ou buscar a filha na escola, mesmo fazendo questão em alguns dias da semana. Ele precisa de um transporte confiável e que possa escolher os dias que vai precisar ou não, de acordo com seu dia, assim pagando só quando usar.  

Kleber Machado tem 41 anos, é dono de uma van escolar e enfrenta dificuldades para conseguir contratos para preencher sua rota. Pelo empecilho de adquirir clientes, ele precisa de uma maneira de ter acesso facil e rapido aos pais em busca de um transporte para seus filhos.


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Pais/Responsaveis  | Transporte escolar           | Levar meus filhos para a escola               |
|Motorista       | Plataforma de transporte escolar                 | Trabalhar com transporte de crianças para escola |



## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Permitir que o usuário reserve um assento em uma van | ALTA |Leni |
|RF-002| Permitir que o usuário rastreie o trajeto   | BAIXA |Otavio|
|RF-003| Permitir que o usuário acompanhe se a criança chegou ao destino   | ALTA |Ana Clara |
|RF-004| Permitir que um motorista cadastre seu veículo   | ALTA |Pedro |
|RF-005| Permitir que o motorista acompanhe a lotação de sua van e o trajeto   | MÉDIA |Otavio |
|RF-006| Permitir que o usuário avalie o serviço do motorista   | MÉDIA |Guilherme |
|RF-007|	Permitir que o motorista aceite ou negue a solicitação do usuário	| MÉDIA |	Otavio|
|RF-008|	Permitir que o usuário (responsável) cadastre uma ou mais crianças	| ALTA	|Jean |
|RF-009| Permitir que o motorista avalie o comportamento da criança  | MÉDIA |Diogo |
|RF-010| Permitir que o usuario cadastre uma forma de pagamento fixa | MÉDIA |Pedro |
|RF-011| Permitir que o usuario (motorista ou responsavel) crie uma conta na plataforma | MÉDIA |Otavio |
|RF-012| Permitir que o usuario (motorista ou responsavel) faça login na plataforma | MÉDIA |Diogo|



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivo móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 5s |  BAIXA | 
|RNF-003| Deve garantir a segurança dos dados cadastrados do usuario |  ALTA |
|RNF-004| Deve ser capaz de realizar estornos bancarios em caso de cancelamento por parte do motorista ou usuario |  MÉDIA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |



## Diagrama de casos de uso

