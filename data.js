import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Ultrassonografia 3D/4D',
      slug: 'ultrassonografia-3d4d',
      isFeatured: true,
      image: '/ultrassonografia.png',
      featuredImage: '/images/banner2.jpg',
      recomendacao1:
        'não ingerir nenhum comprimido contendo cálcio durante 24 horas antes do exame;',
      recomendacao2:
        'não tomar pílulas de vitaminas ou suplementos minerais na manhã do seu exame;',
      recomendacao3:
        'não ter realizado nenhum procedimento com contraste intravenoso, estudos de bário ou estudos de medicina nuclear durante os 7 dias que antecedem o exame;',
      description:
        'É um exame realizado para definir massa óssea em regiões como coluna lombar e fêmur e fazer diagnóstico de osteoporose. É realizado num aparelho de dupla emissão de raio-X, porém com baixa dosagem de radiação. É essencial que você realize o exame de densitometria óssea anualmente a partir dos 65 anos, ou antes dessa idade, caso se enquadre em ao menos um dos critérios abaixo: Ter sofrido fraturas anteriormente. Possuir baixo peso (IMC abaixo de 18,5) Fizer uso de alguma medicação contra osteoporose.',
    },
    {
      //_id: '2',
      name: 'Ressonância Magnética',
      slug: 'ressonancia_magnetica',
      isFeatured: true,
      image: '/ressonancia.png',
      featuredImage: '/images/banner2.jpg',
      recomendacao1:
        'não ingerir nenhum comprimido contendo cálcio durante 24 horas antes do exame;',
      recomendacao2:
        'não tomar pílulas de vitaminas ou suplementos minerais na manhã do seu exame;',
      recomendacao3:
        'não ter realizado nenhum procedimento com contraste intravenoso, estudos de bário ou estudos de medicina nuclear durante os 7 dias que antecedem o exame;',
      description:
        'É um exame realizado para definir massa óssea em regiões como coluna lombar e fêmur e fazer diagnóstico de osteoporose. É realizado num aparelho de dupla emissão de raio-X, porém com baixa dosagem de radiação. É essencial que você realize o exame de densitometria óssea anualmente a partir dos 65 anos, ou antes dessa idade, caso se enquadre em ao menos um dos critérios abaixo: Ter sofrido fraturas anteriormente. Possuir baixo peso (IMC abaixo de 18,5) Fizer uso de alguma medicação contra osteoporose.',
    },
    {
      //_id: '3',
      name: 'Raio-X',
      slug: 'raio_x',
      isFeatured: true,
      featuredImage: '/images/banner2.jpg',
      image: '/raiox.png',
      recomendacao1:
        'não ingerir nenhum comprimido contendo cálcio durante 24 horas antes do exame;',
      recomendacao2:
        'não tomar pílulas de vitaminas ou suplementos minerais na manhã do seu exame;',
      recomendacao3:
        'não ter realizado nenhum procedimento com contraste intravenoso, estudos de bário ou estudos de medicina nuclear durante os 7 dias que antecedem o exame;',
      description:
        'É um exame realizado para definir massa óssea em regiões como coluna lombar e fêmur e fazer diagnóstico de osteoporose. É realizado num aparelho de dupla emissão de raio-X, porém com baixa dosagem de radiação. É essencial que você realize o exame de densitometria óssea anualmente a partir dos 65 anos, ou antes dessa idade, caso se enquadre em ao menos um dos critérios abaixo: Ter sofrido fraturas anteriormente. Possuir baixo peso (IMC abaixo de 18,5) Fizer uso de alguma medicação contra osteoporose.',
    },
  ],
  exams: [
    {
      name: 'Mamografia Digital',
      slug: 'mamografia',
      image: '/mamografia.png',
      isFeatured: true,
      featuredImage: '/images/banner2.jpg',
      recomendacao1:
        'não ingerir nenhum comprimido contendo cálcio durante 24 horas antes do exame;',
      recomendacao2:
        'não tomar pílulas de vitaminas ou suplementos minerais na manhã do seu exame;',
      recomendacao3:
        'não ter realizado nenhum procedimento com contraste intravenoso, estudos de bário ou estudos de medicina nuclear durante os 7 dias que antecedem o exame;',
      description:
        'É um exame realizado para definir massa óssea em regiões como coluna lombar e fêmur e fazer diagnóstico de osteoporose. É realizado num aparelho de dupla emissão de raio-X, porém com baixa dosagem de radiação. É essencial que você realize o exame de densitometria óssea anualmente a partir dos 65 anos, ou antes dessa idade, caso se enquadre em ao menos um dos critérios abaixo: Ter sofrido fraturas anteriormente. Possuir baixo peso (IMC abaixo de 18,5) Fizer uso de alguma medicação contra osteoporose.',
    },
    {
      name: 'Doppler Colorido',
      slug: 'doppler_colorido',
      isFeatured: true,
      featuredImage: '/images/banner2.jpg',
      image: '/doppler.png',
      recomendacao1:
        'não ingerir nenhum comprimido contendo cálcio durante 24 horas antes do exame;',
      recomendacao2:
        'não tomar pílulas de vitaminas ou suplementos minerais na manhã do seu exame;',
      recomendacao3:
        'não ter realizado nenhum procedimento com contraste intravenoso, estudos de bário ou estudos de medicina nuclear durante os 7 dias que antecedem o exame;',
      description:
        'É um exame realizado para definir massa óssea em regiões como coluna lombar e fêmur e fazer diagnóstico de osteoporose. É realizado num aparelho de dupla emissão de raio-X, porém com baixa dosagem de radiação. É essencial que você realize o exame de densitometria óssea anualmente a partir dos 65 anos, ou antes dessa idade, caso se enquadre em ao menos um dos critérios abaixo: Ter sofrido fraturas anteriormente. Possuir baixo peso (IMC abaixo de 18,5) Fizer uso de alguma medicação contra osteoporose.',
    },
    {
      name: 'Densitometria Óssea',
      slug: 'densitometria_ossea',
      isFeatured: true,
      featuredImage: '/images/banner2.jpg',
      image: '/densitometria.png',
      recomendacao1:
        'não ingerir nenhum comprimido contendo cálcio durante 24 horas antes do exame;',
      recomendacao2:
        'não tomar pílulas de vitaminas ou suplementos minerais na manhã do seu exame;',
      recomendacao3:
        'não ter realizado nenhum procedimento com contraste intravenoso, estudos de bário ou estudos de medicina nuclear durante os 7 dias que antecedem o exame;',
      description:
        'É um exame realizado para definir massa óssea em regiões como coluna lombar e fêmur e fazer diagnóstico de osteoporose. É realizado num aparelho de dupla emissão de raio-X, porém com baixa dosagem de radiação. É essencial que você realize o exame de densitometria óssea anualmente a partir dos 65 anos, ou antes dessa idade, caso se enquadre em ao menos um dos critérios abaixo: Ter sofrido fraturas anteriormente. Possuir baixo peso (IMC abaixo de 18,5) Fizer uso de alguma medicação contra osteoporose.',
    },
  ],
  planos: [
    {
      name: 'Unimed',
      image: '/unilogo.png',
    },
    {
      name: 'Bradesco',
      image: '/bralogo.png',
    },
    {
      name: 'Cassi',
      image: '/cassilogo.png',
    },
    {
      name: 'Energisa',
      image: '/energilogo.png',
    },
    {
      name: 'Ipsemg',
      image: '/iplogo.png',
    },
    {
      name: 'Postal Saúde',
      image: '/postallogo.png',
    },
    {
      name: 'Polícia Militar',
      image: '/polilogo.png',
    },
  ],
};
export default data;
