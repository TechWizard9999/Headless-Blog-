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
  const featuredBlogs = await fetchBlog('filters[isFeatured][$eq]=true');
  const Blog = await  await fetchBlog('filters[isFeatured][$eq]=false');

  console.log ("featured ",Blog.data)


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
      {featuredBlogs.data.map(featuredBlogs => (
        <div className="col col_4 m-mw-100"  > <Card 
        key={featuredBlogs.attributes.id}
      label={featuredBlogs.attributes.Category}
      title={featuredBlogs.attributes.Title}
      summary={featuredBlogs.attributes.Summary}
      href={`/${featuredBlogs.attributes.slug}`}
      imgSrc={`${config.api}${featuredBlogs.attributes.FeaturedImage.data.attributes.url}`}
        className="mb-30"
      /></div>
      ))}
      {featuredBlogs.data.map(featuredBlogs => (
        <div className="col col_4 m-mw-100"  > <Card 
        key={featuredBlogs.attributes.id}
      label={featuredBlogs.attributes.Category}
      title={featuredBlogs.attributes.Title}
      summary={featuredBlogs.attributes.Summary}
      href={`/${featuredBlogs.attributes.slug}`}
      imgSrc={`${config.api}${featuredBlogs.attributes.FeaturedImage.data.attributes.url}`}
        className="mb-30"
      /></div>
      ))}
      {featuredBlogs.data.map(featuredBlogs => (
        <div className="col col_4 m-mw-100"  > <Card 
        key={featuredBlogs.attributes.id}
      label={featuredBlogs.attributes.Category}
      title={featuredBlogs.attributes.Title}
      summary={featuredBlogs.attributes.Summary}
      href={`/${featuredBlogs.attributes.slug}`}
      imgSrc={`${config.api}${featuredBlogs.attributes.FeaturedImage.data.attributes.url}`}
        className="mb-30"
      /></div>
      ))}
    </div>
  </div>
 )
}

export default Home;