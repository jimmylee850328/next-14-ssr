import MeowList from './meowList';

async function getMeowList() {
  const res = await fetch('http://localhost:3001/api/get_meow_list', {
    headers: {
      'Cache-Control': 'no-store',
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch meow list');
  }
  return res.json();
}

export default async function MeowPage() {
  const meowList = await getMeowList();

  return (
    <div>
      <h1>Meow List</h1>
      <MeowList initialMeowList={meowList} />
    </div>
  );
}