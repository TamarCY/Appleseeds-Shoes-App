import React from "react";
import { useParams } from "react-router-dom";
import Edit from "../pages/Edit";

export default function ItemEditPageWrapper() {
  const { id } = useParams();
  return (<Edit id={id}></Edit>)
}