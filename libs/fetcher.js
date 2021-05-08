export default async function (...args) {
  const res = await fetch(...args, {headers : {
    'api-key': 'N9FgggExkv9KrTWcyidGNVCz'
  }});
  return res.json();
}
