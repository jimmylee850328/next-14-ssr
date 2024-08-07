'use client';

import useSWR from 'swr';
import { useState, useEffect } from 'react';

const fetcher = url => fetch(url).then(res => res.json());

export default function MeowList({ initialMeowList }) {
  const { data: meowList, error } = useSWR('http://localhost:3001/api/get_meow_list', fetcher, { initialData: initialMeowList });

  if (error) return <div>Failed to load meow list</div>;
  if (!meowList) return <div>Loading...</div>;

  return (
    <ul>
      {meowList.map(meow => (
        <li key={meow.id}>{meow.name}: {meow.sound}</li>
      ))}
    </ul>
  );
}