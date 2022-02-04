import axios from "axios";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useState } from "react";
import { Categoria } from "../../../models/categoria";

interface Props {
  id: number | 'novo';
  categoria: Categoria;
}

type CategoriaHook = [Categoria, Dispatch<SetStateAction<Categoria>>];

const carregarCategorias = (): CategoriaHook => {
  const [categoria, setCategoria] = useState<Categoria>(null);
  const router = useRouter();

  const { id } = router.query;
  if (id) {
    axios
      .get<Categoria>(`/api/categorias/${id}`)
      .then(resp => setCategoria(resp.data));
  }

  return [categoria, setCategoria];
}


export default function CategoriaEdit() {
  const [categoria, setCategoria] = carregarCategorias();
  return (
    <>
      <Head>
        <title>Editar Categoria {categoria?.id}</title>
      </Head>
      <h1>Categoria: {categoria?.id}</h1>
      <div>Descrição: {categoria?.descricao} </div>
      <div>Tipo: {categoria?.tipo} </div>
    </>
  )
}