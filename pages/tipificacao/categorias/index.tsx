import axios from 'axios';
import { GetStaticProps } from "next";
import Link from 'next/link';
import { Categoria } from "../../models/categoria";

interface Props {
  categorias: Categoria[]
}

export const getStaticProps: GetStaticProps = async context => {
  const resposta = await axios.get<Categoria[]>('http://localhost:8080/api/categorias');
  const categorias = resposta.data;
  return {
    props: {
      categorias
    }
  }
}

export default function CategoriasList({ categorias }: Props) {
  return (
    <>
      <h1>Categorias</h1>

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Ativo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {categorias.map(c => (
            <tr key={c.id}>
              <td>
                <Link href={`/tipificacao/categorias/${c.id}`}>
                  <a>{c.id}</a>
                </Link>
              </td>
              <td>{c.descricao}</td>
              <td>{c.tipo}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}