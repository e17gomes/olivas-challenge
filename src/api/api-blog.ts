
async function getDataPosts() {
  const urlApi = "https://www.olivas.digital/wp-json/wp/v2/posts?categories=373";
  const response = await fetch(urlApi);
  try {
    const data= response.json()
return data  } catch (error) {
    console.error(error + " Houve um erro na requisição")
  }

};
export default  getDataPosts;