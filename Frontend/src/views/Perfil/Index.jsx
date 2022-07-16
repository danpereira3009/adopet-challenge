import React from "react";
import FormaVerdeSuperior from "../../components/FormaSuperior/FormaVerdeSuperior";
import FormaLateral from "../../components/FormaLateral/FormaLateral";
import Perfil from "./Perfil";
import './styles.sass'

export default () =>

<section className="containerPerfil">
    <FormaVerdeSuperior />
    <FormaLateral /> 
    <Perfil />
</section>