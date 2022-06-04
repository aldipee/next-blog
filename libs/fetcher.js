export default async function (...args) {
  const res = await fetch(...args, {headers : {
    'api-key': 'P4xgUukYr7fyWQnC8HFZS1mA'
  }});
  return res.json();
}
