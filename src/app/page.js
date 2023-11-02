import Card from "@/components/card/card";
import config from "@/configure";
import { response } from "express";

const fetchBlog = async (params) => {
  const reqOptions ={
    headers :{
      Authorization: `Bearer ${process.env.API_TOKEN}`
    }
  }
  const request = await fetch(`${config.api}/api/headless-blogs?populate=*&${params}` , reqOptions);
  const response = await request.json();

  return response;
}


const Home = async () => {
  const [featuredBlogs , Blog] = await Promise.all([
    await fetchBlog('filters[isFeatured][$eq]=true'),
    await fetchBlog('filters[isFeatured][$eq]=false')
  ]);

  console.log ("featured ",featuredBlogs.data)

 return(
  <div className="container pb-80">
    {featuredBlogs.data.map(featuredBlogs => (
      <Card 
      key={featuredBlogs.attributes.id}
      label={featuredBlogs.attributes.Category}
      title={featuredBlogs.attributes.Title}
      summary={featuredBlogs.attributes.Summary}
      href={`/${featuredBlogs.attributes.slug}`}
      imgSrc={`${config.api}${featuredBlogs.attributes.FeaturedImage.data.attributes.url}`}
      className="mb-30"/>
    ))}

    <div className="row">
      <div className="col col_4 m-mw-100"> <Card 
    label='Opinion'
    title='This is the best product ever seen'
    summary='This is the summary part of the product'
    href='#'
    className="mb-30"
    /></div>
      <div className="col col_4 m-mw-100"> <Card 
    label='Product Reviews'
    title='This is the best product ever seen'
    summary='This is the summary part of the product'
    href='#'
    className="mb-30"/></div>
      <div className="col col_4 m-mw-100"><Card 
    label='Travel Guides'
    title='This is the best product ever seen'
    summary='This is the summary part of the product'
    href='#'
    className="mb-30"/></div>
    </div>
  </div>
 )
}

export default Home;