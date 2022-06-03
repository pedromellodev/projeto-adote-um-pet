import type { NextPage } from 'next'
import Title from '../ui/components/Title/Title'
import List from '../ui/components/List/List'

const Home: NextPage = () => {
  return (
    <div>
      <Title 
        Title='' 
        subTitle={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente</strong>
          </span>
        }
      />

      <List
        pets={[
          {
            id: 1,
            name: 'Jamal',
            history: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatibus, assumenda fuga repellat aliquid nulla fugiat dolor? Expedita, doloremque. Reiciendis quam tempore cum atque corporis aperiam dignissimos repellendus tempora est!',
            photo: 'https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_1x1.jpg'
          },
          {
            id: 2,
            name: 'Tommy',
            history: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatibus, assumenda fuga repellat aliquid nulla fugiat dolor? Expedita, doloremque. Reiciendis quam tempore cum atque corporis aperiam dignissimos repellendus tempora est!',
            photo: 'https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg'
          }
        ]}
      />
    </div>
  )
}

export default Home
