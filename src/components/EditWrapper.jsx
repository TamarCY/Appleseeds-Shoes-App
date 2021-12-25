import React from "react";
import { useParams } from "react-router-dom";
import Edit from "../pages/Edit";

export default function ItemEditPageWrapper(props) {
  const { id } = useParams();
  return (
  <Edit id={id} getOneItem={props.getOneItem} edit={true}></Edit>)
}