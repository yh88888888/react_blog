import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

export default function Info() {
  const { id, goodId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  let page = searchParams.get('page');

  return (
    <div>
      <h1>{id}</h1>
      <h1>{goodId}</h1>
      <h1>{page}</h1>
    </div>
  );
}
