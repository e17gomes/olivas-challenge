
async function getDataPosts() {
  const urlApi = "https://www.olivas.digital/wp-json/wp/v2/posts?categories=373";
  const response = await fetch(urlApi);
  try {
    const data= response.json()
return data  } catch (error) {
    console.error(error + " Houve um erro na requisição")
  }

}

const PostsApi = async ()=>{
  try {
    const posts = await getDataPosts();
    posts.array.forEach(links => {
      
    });
    const link = posts[0].link
    console.log(link);
  } catch (error) {
    console.error('Error in PostsApi:', error);
  }
};

PostsApi();
export default  getDataPosts