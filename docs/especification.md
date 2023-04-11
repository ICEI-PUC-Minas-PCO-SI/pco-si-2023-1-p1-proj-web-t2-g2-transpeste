# Especificações do Projeto

Transpeste será voltado para motoristas que desejam expandir seus negócios e não encontram clientes com o Sr.Rodrigo Amaral, que deseja capitalizar uma clientela para preencher sua frota ou para pais que tem rotinas agitadas e tem dificuldade para acompanhar essa rotina importante dos seus filhos. O projeto terá seu desenvolvimento voltado principalmente ao seu sítio web, onde o front end ficará entorno do html, css e javascript e seu armazenamento de dados ficara pelo localstorage, que simulara as informações dos clientes. Visto que as restrições que encontramos no rastreamento, na averiguação dos dados do motorista e no armazenamento das informações dos usuários, limitam nosso desenvolvimento.

## Personas

Rodrigo Amaral tem 53 anos, e está pensando em expandir seu negócio de transporte privado para a área de transporte escolar. Com diversos veículos prontos para serviço, Rodrigo busca uma forma de captar clientes com rapidez e facilidade, com o objetivo de colocar sua frota para rodar os quanto antes.

Milena Silva tem 34 anos é empresária, mãe de 2 filhos (Arthur de 5 anos e Laura de 7 anos) e tem uma rotina bem corrida. Ela e o marido não conseguem levar nem buscar os filhos na escola e em atividades extracurriculares, precisam de um auxílio para o transporte e locomoção dos mesmos. Com isso está buscando um meio de conseguir transporte com segurança e que possa os acompanhar mesmo longe dos filhos. 

Bruna Ferreira tem 30 anos, é advogada e mãe de uma menina de 8 anos chamada Sofia. Ela trabalha em um escritório de advocacia renomado e tem uma rotina corrida, com prazos apertados e reuniões constantes. Como muitas vezes precisa viajar a trabalho, precisa de um transporte seguro e confiável para levar e buscar sua filha na escola e em atividades extracurriculares. Além disso, busca um serviço que possa ser agendado com antecedência e que possibilite um acompanhamento em tempo real para ter tranquilidade enquanto está fora.

Felipe Alves tem 35 anos, é médico e pai solteiro da Amanda de 6 anos. Com a escala de plantões e consultas no dia a dia, tem dias que não consegue levar ou buscar a filha na escola, mesmo fazendo questão em alguns dias da semana. Ele precisa de um transporte confiável e que possa escolher os dias que vai precisar ou não, de acordo com seu dia, assim pagando só quando usar. 

Ricardo Santos tem 33 anos, é engenheiro e pai de dois filhos, João de 4 anos e Maria de 6 anos. Ele trabalha em uma empresa de construção civil e tem uma rotina de trabalho bastante instável, com horários flexíveis e reuniões inesperadas. Com isso, precisa de um transporte que possa se adaptar à sua rotina, com opções de horários flexíveis e possibilidade de agendamento de última hora. Além disso, busca um serviço que ofereça segurança e conforto para seus filhos.

Kleber Machado tem 41 anos, é dono de uma van escolar e enfrenta dificuldades para conseguir contratos para preencher sua rota. Pelo empecilho de adquirir clientes, ele precisa de uma maneira de ter acesso facil e rapido aos pais em busca de um transporte para seus filhos.

Ana Paula Oliveira tem 40 anos, é psicóloga e mãe de uma menina de 9 anos chamada Julia. Ela tem um consultório próprio e atende pacientes durante todo o dia, o que a impede de levar e buscar sua filha na escola e em atividades extracurriculares. Com isso, precisa de um serviço de transporte que possa garantir a segurança e o conforto de sua filha, além de permitir que ela possa acompanhar a localização da criança em tempo real. Além disso, busca um serviço que possa ser agendado com antecedência e que possa se adaptar a sua rotina de trabalho.


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Pais/Responsaveis  | Transporte escolar           | Levar meus filhos para a escola               |
|Motorista       | Plataforma de transporte escolar                 | Trabalhar com transporte de crianças para escola |
|Dono de Frota veicular      | Forma de captar clientes                 | Preencher os veiculos da rota |



## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Permitir que o usuário reserve um assento em uma van | ALTA |Leni |
|RF-002| Permitir que o usuário rastreie o trajeto   | DESEJÁVEL |Otavio|
|RF-003| Permitir que o usuário acompanhe se a criança chegou ao destino   | DESEJÁVEL |Ana Clara |
|RF-004| Permitir que um motorista cadastre seu veículo   | ALTA |Pedro |
|RF-005| Permitir que o motorista acompanhe a lotação de sua van  | ALTA |Otavio |
|RF-006| Permitir que o motorista acompanhe a sua rota  | DESEJÁVEL |Otavio |
|RF-007| Permitir que o usuário avalie o serviço do motorista   | BAIXA |Guilherme |
|RF-008|	Permitir que o motorista aceite ou negue a solicitação do usuário	| BAIXA |	Otavio|
|RF-009|	Permitir que o usuário (responsável) cadastre uma ou mais crianças	| ALTA	|Jean |
|RF-010| Permitir que o motorista avalie o comportamento da criança  | DESEJÁVEL |Diogo |
|RF-011| Permitir que o usuario cadastre uma forma de pagamento fixa | MÉDIA |Pedro |
|RF-012| Permitir que o usuario (motorista ou responsavel) crie uma conta na plataforma | MÉDIA |Otavio |
|RF-013| Permitir que o usuario (motorista ou responsavel) faça login na plataforma | MÉDIA |Diogo|



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivo móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 5s |  BAIXA | 
|RNF-003| Deve garantir a segurança dos dados cadastrados do usuario |  ALTA |
|RNF-004| Deve ser capaz de realizar estornos bancarios em caso de cancelamento por parte do motorista ou usuario |  DESEJÁVEL |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O site não será capaz de sincronizar as informações como cadastro de veículo ou de pessoas para todos, por não ter um banco de dados.       |
|04| não será possível realizar o rastreio em tempo real dos veículos, pois seria necessário uma api que realize esse processo.        |
|05| O pagamento das corridas não poderá ser feito diretamente no site, por não termos uma API que integre com nosso código ou vínculos com plataformas de pagamentos como PayPal. |
|06| Todas as corridas que forem realizadas não ficará guardada em nenhum histórico, por não termos um banco de dados para guardar esse tipo de informação. |

## Diagrama de casos de uso
![image](https://user-images.githubusercontent.com/124322407/229393307-73184395-8460-4dcd-8659-443a3f59784c.png)
